# 📋 GitHub在线编辑修复指南

## 问题
GitHub Pages上的文件是旧版本，包含JavaScript错误。

## 解决方案
直接在GitHub上编辑文件

---

## 🎯 快速修复（5分钟）

### 第1步：打开文件编辑

1. **访问仓库**：https://github.com/ffeizhang-dev/workanniversary
2. **点击**：`feishu-config.html`
3. **点击右上角的编辑按钮** ✏️

### 第2步：查找并替换（推荐）

使用浏览器的查找功能（Ctrl+F）：

#### 替换1：删除外部脚本引用

**查找**：
```
<script src="scripts/feishu.js"></script>
```

**替换为**：（直接删除这一行）

#### 替换2：修改初始化代码

**查找**：
```javascript
const feishu = new FeishuIntegration();
let config = feishu.loadConfig();
```

**替换为**：
```javascript
const FeishuConfig = {
    loadConfig() {
        const saved = localStorage.getItem('feishuConfig');
        return saved ? JSON.parse(saved) : {
            enabled: false,
            mode: 'webhook',
            webhookUrl: '',
            appId: '',
            appSecret: '',
            messageTemplate: ''
        };
    },

    saveConfig(config) {
        localStorage.setItem('feishuConfig', JSON.stringify(config));
    },

    async testConnection() {
        const mode = document.querySelector('input[name="mode"]:checked').value;

        if (mode === 'webhook') {
            const webhookUrl = document.getElementById('webhookUrl').value.trim();
            if (!webhookUrl) {
                throw new Error('请先输入Webhook URL');
            }

            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    msg_type: 'text',
                    content: {
                        text: '🎉 入职周年提醒系统\n\n✅ Webhook连接测试成功！\n系统已准备就绪。'
                    }
                })
            });

            const result = await response.json();

            if (result.code === 0) {
                return {
                    success: true,
                    message: '连接测试成功！请检查飞书群是否收到测试消息。'
                };
            } else {
                return {
                    success: false,
                    message: `飞书返回错误: ${result.msg || '未知错误'} (code: ${result.code})`
                };
            }
        } else {
            return {
                success: false,
                message: 'API模式测试功能开发中，请手动验证配置。'
            };
        }
    }
};

let config = FeishuConfig.loadConfig();
```

#### 替换3：修改saveConfig调用

**查找**：
```javascript
feishu.saveConfig(newConfig);
```

**替换为**：
```javascript
FeishuConfig.saveConfig(newConfig);
```

#### 替换4：修改testConnection调用

**查找**：
```javascript
const result = await feishu.testConnection();
```

**替换为**：
```javascript
const result = await FeishuConfig.testConnection();
```

### 第3步：提交更改

1. **滚动到页面底部**
2. **提交信息**：`修复JavaScript初始化错误`
3. **点击**："Commit changes"

### 第4步：等待部署并测试

1. **等待2-3分钟**
2. **清除浏览器缓存**（Ctrl+Shift+Delete）
3. **重新访问**：https://ffeizhang-dev.github.io/workanniversary/feishu-config.html
4. **测试保存配置**
5. **测试连接** - 应该正常工作了！

---

## 🔍 如何确认修复成功

### 正确的表现

**保存配置**：
```
✅ 成功：配置保存成功！
```

**测试连接**（Webhook正确时）：
```
✅ 成功：连接测试成功！请检查飞书群是否收到测试消息。
```

**测试连接**（Webhook错误时）：
```
❌ 错误：测试失败: 飞书返回错误: Bad Request (code: 9499)
```

### 错误的表现（修复前）

```
❌ 错误：ReferenceError: Cannot access 'feishu' before initialization
```

如果还看到这个错误，说明文件没有更新成功。

---

## 💾 备用方案：直接上传完整文件

如果在线编辑太复杂，可以：

1. **下载本地修复后的文件**
   ```
   C:\Users\zhangfeifei\work-anniversary-system\feishu-config.html
   ```

2. **GitHub上删除旧文件**
   - 点击文件 → 垃圾桶图标 → 确认删除

3. **上传新文件**
   - Add file → Upload files
   - 拖拽修复后的文件
   - Commit changes

4. **等待部署**

---

## ⏱️ 需要多久生效

- **提交更改后**：立即生效
- **GitHub Pages部署**：2-3分钟
- **浏览器缓存**：需要手动清除或使用无痕模式

---

## 📞 还有问题？

如果修复后还是不行，告诉我：

1. **错误信息是什么**
2. **是在哪一步遇到的**
3. **有没有清除浏览器缓存**

我会继续帮您！
