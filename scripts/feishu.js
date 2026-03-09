// 飞书集成模块
// Feishu Integration Module

/**
 * 飞书消息发送类
 * 支持两种方式：
 * 1. Webhook 机器人（简单快速）
 * 2. 飞书开放平台API（功能完整）
 */
class FeishuIntegration {
    constructor() {
        // 从localStorage加载配置
        this.config = this.loadConfig();
    }

    /**
     * 加载飞书配置
     */
    loadConfig() {
        const config = localStorage.getItem('feishuConfig');
        if (config) {
            return JSON.parse(config);
        }
        return {
            enabled: false,
            mode: 'webhook', // webhook 或 api
            webhookUrl: '',
            appId: '',
            appSecret: '',
            defaultMode: 'card' // text, card, interactive
        };
    }

    /**
     * 保存飞书配置
     */
    saveConfig(config) {
        this.config = { ...this.config, ...config };
        localStorage.setItem('feishuConfig', JSON.stringify(this.config));
    }

    /**
     * 发送文本消息（Webhook方式）
     */
    async sendTextMessage(text, webhookUrl = null) {
        const url = webhookUrl || this.config.webhookUrl;

        if (!url) {
            throw new Error('未配置Webhook URL');
        }

        const payload = {
            msg_type: 'text',
            content: {
                text: text
            }
        };

        return await this.sendWebhookRequest(url, payload);
    }

    /**
     * 发送富文本消息卡片
     */
    async sendCardMessage(employee, years, wishContent, webhookUrl = null) {
        const url = webhookUrl || this.config.webhookUrl;

        if (!url) {
            throw new Error('未配置Webhook URL');
        }

        // 构建飞书消息卡片
        const card = {
            msg_type: 'interactive',
            card: {
                config: {
                    wide_screen_mode: true,
                    enable_forward: true
                },
                header: {
                    title: {
                        content: `🎉 ${employee.name}入职${years}周年纪念`,
                        tag: 'plain_text'
                    },
                    template: 'turquoise' // 青色主题
                },
                elements: [
                    {
                        tag: 'div',
                        fields: [
                            {
                                is_short: true,
                                text: {
                                    tag: 'lark_md',
                                    content: `**姓名：**\n${employee.name}`
                                }
                            },
                            {
                                is_short: true,
                                text: {
                                    tag: 'lark_md',
                                    content: `**部门：**\n${employee.department}`
                                }
                            },
                            {
                                is_short: true,
                                text: {
                                    tag: 'lark_md',
                                    content: `**职位：**\n${employee.position || '-'}`
                                }
                            },
                            {
                                is_short: true,
                                text: {
                                    tag: 'lark_md',
                                    content: `**入职日期：**\n${employee.joinDate}`
                                }
                            }
                        ]
                    },
                    {
                        tag: 'hr'
                    },
                    {
                        tag: 'div',
                        text: {
                            tag: 'lark_md',
                            content: wishContent
                        }
                    },
                    {
                        tag: 'hr'
                    },
                    {
                        tag: 'note',
                        elements: [
                            {
                                tag: 'plain_text',
                                content: `由入职周年祝福提醒系统自动发送 | ${new Date().toLocaleDateString('zh-CN')}`
                            }
                        ]
                    }
                ]
            }
        };

        // 如果有照片，添加到卡片顶部
        if (employee.photo) {
            card.card.elements.unshift({
                tag: 'img',
                img_key: employee.photo, // 如果是URL可以直接用，如果是base64需要先上传
                alt: {
                    tag: 'plain_text',
                    content: employee.name
                }
            });
        }

        return await this.sendWebhookRequest(url, card);
    }

    /**
     * 发送Webhook请求
     */
    async sendWebhookRequest(url, payload) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.code !== 0) {
                throw new Error(result.msg || '发送失败');
            }

            return {
                success: true,
                message: '飞书消息发送成功'
            };
        } catch (error) {
            console.error('飞书消息发送失败:', error);
            throw error;
        }
    }

    /**
     * 通过飞书API发送消息（使用应用凭证）
     */
    async sendMessageViaAPI(userId, content) {
        // 1. 获取tenant_access_token
        const token = await this.getTenantAccessToken();

        // 2. 发送消息
        const response = await fetch('https://open.feishu.cn/open-apis/im/v1/messages?receive_id_type=user_id', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                receive_id: userId,
                msg_type: 'interactive',
                content: JSON.stringify(content)
            })
        });

        return await response.json();
    }

    /**
     * 获取tenant_access_token
     */
    async getTenantAccessToken() {
        const response = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                app_id: this.config.appId,
                app_secret: this.config.appSecret
            })
        });

        const result = await response.json();

        if (result.code !== 0) {
            throw new Error('获取access_token失败: ' + result.msg);
        }

        return result.tenant_access_token;
    }

    /**
     * 批量发送周年祝福
     */
    async sendBatchBlessings(employees) {
        const results = [];

        for (const employee of employees) {
            try {
                // 计算周年数
                const years = this.calculateYears(employee.joinDate) + 1;

                // 生成祝福语
                const wishContent = this.generateWishContent(employee, years);

                // 发送消息
                await this.sendCardMessage(employee, years, wishContent);

                results.push({
                    success: true,
                    employee: employee.name,
                    message: '发送成功'
                });

                // 避免频率限制，延迟1秒
                await this.sleep(1000);
            } catch (error) {
                results.push({
                    success: false,
                    employee: employee.name,
                    error: error.message
                });
            }
        }

        return results;
    }

    /**
     * 计算入职年限
     */
    calculateYears(joinDate) {
        const join = new Date(joinDate);
        const today = new Date();
        return today.getFullYear() - join.getFullYear();
    }

    /**
     * 生成祝福语
     */
    generateWishContent(employee, years) {
        const templates = [
            `亲爱的${employee.name}，恭喜您加入理想汽车大家庭${years}周年！🎉\n\n在过去的${years}年里，您用专业和热情为公司发展贡献了力量。感谢您的付出与坚守，期待与您共创更美好的未来！`,

            `${employee.name}，今天是您入职${years}周年的特殊日子！🎂\n\n${years}年风雨同舟，感谢您一路相伴。您的努力和才华让团队更加出色，祝愿您在理想汽车的舞台上继续闪耀！`,

            `🎊 热烈祝贺${employee.name}入职${years}周年！\n\n${years}年的坚持与努力，见证了您的成长与蜕变。感恩有您，未来可期，让我们一起创造更多精彩！`,

            `${employee.name}，祝贺您入职${years}周年快乐！🌟\n\n${years}年的时光，您用实际行动诠释了"创造移动的家，创造幸福的家"的使命。期待您在新的征程中再创佳绩！`
        ];

        return templates[Math.floor(Math.random() * templates.length)];
    }

    /**
     * 延迟函数
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * 测试连接
     */
    async testConnection() {
        try {
            if (this.config.mode === 'webhook') {
                await this.sendTextMessage('🎉 飞书集成测试成功！入职周年祝福系统已连接。');
                return { success: true, message: 'Webhook连接测试成功' };
            } else {
                // API模式测试
                const token = await this.getTenantAccessToken();
                return { success: true, message: 'API连接测试成功', token: token.substring(0, 20) + '...' };
            }
        } catch (error) {
            return { success: false, message: '连接测试失败: ' + error.message };
        }
    }
}

// 导出为全局变量
window.FeishuIntegration = FeishuIntegration;
