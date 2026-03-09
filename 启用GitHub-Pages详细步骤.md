# 🔧 启用GitHub Pages - 详细步骤

## ❗ 错误说明

**错误信息**：`There isn't a GitHub Pages site here.`

**原因**：GitHub Pages功能未启用

**解决方法**：在仓库设置中启用GitHub Pages（1分钟搞定）

---

## ✅ 启用GitHub Pages（1分钟）

### 第1步：进入仓库设置

1. **打开你的GitHub仓库主页**
   ```
   https://github.com/你的用户名/你的仓库名
   ```

2. **点击顶部的 "Settings" 标签**
   ```
   ┌─────────────────────────────────────────────┐
   │ <> Code  Issues  Pull requests  Settings   │ ← 点这里
   └─────────────────────────────────────────────┘
   ```

### 第2步：找到Pages设置

1. **在左侧菜单中找到 "Pages"**
   ```
   左侧菜单（向下滚动找到）：
   ├── General
   ├── Access
   ├── Code and automation
   │   ├── Branches
   │   ├── Tags
   │   └── Pages          ← 点这个
   └── ...
   ```

2. **点击 "Pages"**

### 第3步：配置GitHub Pages

现在你会看到Pages配置页面：

```
┌─────────────────────────────────────────┐
│ GitHub Pages                            │
├─────────────────────────────────────────┤
│                                         │
│ Source                                  │
│                                         │
│ Build and deployment                   │
│                                         │
│ Branch:  [None ▼]                      │ ← 点这个下拉菜单
│                                         │
└─────────────────────────────────────────┘
```

**操作**：

1. **点击 "Branch" 下拉菜单**（默认显示 "None"）

2. **选择分支**：
   - 如果有 `main` 分支，选择 **"main"**
   - 如果有 `master` 分支，选择 **"master"**

   ```
   Branch: [main ▼]  或  [master ▼]
   ```

3. **选择根目录**：
   - 第二个下拉菜单保持默认：**"/ (root)"**

   ```
   Branch: [main ▼] / (root) ▼
   ```

4. **点击 "Save" 按钮**
   ```
   [Save]  ← 点击保存
   ```

### 第4步：等待部署

保存后，页面会刷新并显示：

```
┌─────────────────────────────────────────┐
│ Your site is live at                    │
│ https://你的用户名.github.io/仓库名/     │ ← 你的网站地址
│                                         │
│ ✅ Your site is published               │
└─────────────────────────────────────────┘
```

**等待1-2分钟**让GitHub完成首次部署。

### 第5步：验证部署成功

**访问你的网站**：
```
https://你的用户名.github.io/仓库名/
```

**如果看到**：
- ✅ 显示了README内容，或
- ✅ 显示了index.html页面，或
- ✅ 显示了文件列表

**说明GitHub Pages已成功启用！**

---

## 📋 完整示例

假设你的GitHub用户名是 `zhangfeifei`，仓库名是 `work-anniversary-system`：

### 操作流程：

1. **访问仓库**：
   ```
   https://github.com/zhangfeifei/work-anniversary-system
   ```

2. **点击 Settings**

3. **左侧菜单点击 Pages**

4. **配置**：
   - Branch: `main`
   - 文件夹: `/ (root)`
   - 点击 Save

5. **等待1-2分钟**

6. **访问网站**：
   ```
   https://zhangfeifei.github.io/work-anniversary-system/
   ```

7. **访问具体页面**：
   ```
   https://zhangfeifei.github.io/work-anniversary-system/assessment-survey.html
   https://zhangfeifei.github.io/work-anniversary-system/feishu-config.html
   ```

---

## 🎯 启用后上传文件

### 方法1：网页上传（推荐）

1. **回到仓库主页**
   ```
   点击顶部的 "<> Code" 标签
   ```

2. **上传文件**
   ```
   点击 "Add file" → "Upload files"
   拖拽 feishu-config.html
   提交更改
   ```

3. **等待2-3分钟部署**

4. **访问**：
   ```
   https://你的用户名.github.io/仓库名/feishu-config.html
   ```

### 方法2：创建新文件（直接在网页编辑）

1. **点击 "Add file" → "Create new file"**

2. **文件名**：`feishu-config.html`

3. **复制粘贴内容**：
   - 打开本地的 `feishu-config.html`
   - Ctrl+A 全选
   - Ctrl+C 复制
   - 粘贴到GitHub编辑器

4. **提交**：
   - 输入：`添加飞书配置页面`
   - 点击 "Commit changes"

---

## 🔍 检查部署状态

### 查看Actions状态

1. **点击仓库顶部的 "Actions" 标签**

2. **查看最新的工作流**：
   ```
   ┌─────────────────────────────────────┐
   │ All workflows                       │
   ├─────────────────────────────────────┤
   │ ● pages build and deployment        │
   │   on: push                          │
   │   2 minutes ago                     │
   └─────────────────────────────────────┘
   ```

3. **等待状态变化**：
   - 🟡 黄色圆点 = 正在部署
   - ✅ 绿色勾 = 部署成功
   - ❌ 红色叉 = 部署失败

4. **部署成功后**（绿色✅），访问你的网站

---

## ⚠️ 常见问题

### 问题1：找不到"Pages"选项

**原因**：
- 可能权限不足
- 仓库是私有的（免费账户）

**解决方法**：

#### 方法A：确认仓库是公开的
1. 在Settings页面
2. 滚动到最底部
3. 找到"Danger Zone"
4. 查看仓库是否为Public
5. 如果是Private，需要升级到GitHub Pro才能使用Pages

#### 方法B：改为公开仓库
1. Settings → Danger Zone
2. 点击"Change visibility"
3. 选择"Make public"
4. 输入仓库名确认
5. 重新进入Settings → Pages配置

### 问题2：Branch下拉菜单是空的

**原因**：仓库还没有任何文件

**解决方法**：
1. 先上传至少一个文件（如README.md）
2. 提交后等待几秒
3. 刷新Settings → Pages页面
4. 重新配置Branch

### 问题3：保存后显示错误

**错误信息**：`There was an error creating the Pages site`

**解决方法**：
1. 确认仓库名没有特殊字符
2. 确认有main或master分支
3. 刷新页面重试
4. 检查仓库是否有文件

### 问题4：访问页面显示404

**可能原因**：
1. 部署还未完成（等待2-5分钟）
2. 文件名或路径错误
3. 缓存问题

**解决方法**：
1. 等待5分钟
2. 检查Actions标签确认部署完成
3. 清除浏览器缓存
4. 使用无痕模式访问
5. 确认文件在仓库根目录

### 问题5：只能访问首页，其他页面404

**原因**：可能没有上传对应的文件

**解决方法**：
1. 回到仓库主页
2. 检查文件列表
3. 确认 `feishu-config.html` 存在
4. 如果不存在，上传该文件

---

## 📊 部署检查清单

### 启用前
- [ ] 已登录GitHub
- [ ] 已进入正确的仓库
- [ ] 仓库是公开的（Public）
- [ ] 仓库中至少有一个文件

### 启用中
- [ ] 进入Settings页面
- [ ] 找到并点击Pages选项
- [ ] Branch选择了main或master
- [ ] 文件夹选择了/ (root)
- [ ] 点击了Save按钮
- [ ] 看到了"Your site is live"提示

### 启用后
- [ ] 等待了2-5分钟
- [ ] Actions显示绿色✅
- [ ] 能访问基础网址
- [ ] 能访问具体HTML文件
- [ ] 飞书配置页面可以测试Webhook

---

## 🎯 快速解决方案

如果以上步骤太复杂，**最简单的方法**：

### 使用curl命令测试（不需要GitHub Pages）

1. **打开命令行**（Win+R → cmd）

2. **运行测试命令**：
   ```bash
   curl -X POST "你的Webhook地址" -H "Content-Type: application/json" -d "{\"msg_type\":\"text\",\"content\":{\"text\":\"测试\"}}"
   ```

3. **如果返回 `{"code":0}`**，说明Webhook可用

4. **直接在本地保存配置**：
   - 打开 `feishu-config.html`
   - 填写Webhook
   - 点"保存配置"（跳过测试按钮）

5. **配置保存在浏览器localStorage**，可以直接使用

**这样就不需要部署到GitHub Pages了！**

---

## 💡 温馨提示

### 首次启用GitHub Pages的用户

如果这是你第一次使用GitHub Pages：
1. 不要担心，配置很简单
2. 只需要在Settings里点几下
3. 完全免费，无需付费
4. 适合托管静态网页（HTML/CSS/JS）

### 如果实在配置不成功

可以使用这些替代方案：
1. ✅ **curl命令测试**（已经很好用了）
2. ✅ **本地保存配置**（跳过测试按钮）
3. ✅ **启动本地服务器**（双击 `启动服务器.bat`）
4. ✅ **使用Vercel/Netlify**（另外的免费托管平台）

---

## 📞 需要帮助？

如果按照步骤还是遇到问题，请告诉我：

1. **在哪一步遇到问题**？
   - 找不到Settings？
   - 找不到Pages？
   - 保存失败？
   - 访问404？

2. **看到什么错误信息**？
   - 截图给我看

3. **仓库信息**：
   - 仓库是公开的还是私有的？
   - 有多少个文件？

我会详细帮你解决！

---

## 🚀 总结：两个选择

### 选择1：启用GitHub Pages（推荐）

**优点**：
- ✅ 可以在线访问
- ✅ 测试按钮正常工作
- ✅ 可以分享给其他人

**步骤**：
```
Settings → Pages → Branch选main → Save
等待2分钟 → 访问网站
```

### 选择2：使用curl测试（最快）

**优点**：
- ✅ 不需要配置GitHub Pages
- ✅ 立即可以测试
- ✅ 确认Webhook可用就行

**步骤**：
```
打开cmd → 运行curl命令
返回{"code":0} → 直接保存配置
```

---

**建议**：先用curl测试确认Webhook可用，然后再决定是否启用GitHub Pages。

如果只是自己使用，curl测试+本地配置就够了！😊
