# 🚀 部署飞书配置页面到GitHub Pages

## 📋 前提条件

- ✅ 已有GitHub账号
- ✅ 已有仓库（之前部署评估系统用的）

---

## 方法1：直接上传文件（最简单）

### 步骤1：打开GitHub仓库

1. **访问您的仓库**：
   ```
   https://github.com/你的用户名/你的仓库名
   ```

2. **确认仓库主页**
   - 可以看到之前上传的 `assessment-survey.html` 等文件

### 步骤2：上传飞书配置文件

1. **点击 "Add file" 按钮**（右上角绿色按钮旁边）

2. **选择 "Upload files"**

3. **准备文件**：
   - 找到本地文件：`C:\Users\zhangfeifei\work-anniversary-system\feishu-config.html`
   - 直接**拖拽**到上传区域
   - 或点击 "choose your files" 选择文件

4. **提交上传**：
   - 在底部输入提交信息：`添加飞书配置页面`
   - 点击绿色按钮 **"Commit changes"**

### 步骤3：等待部署

1. **等待2-3分钟**
   - GitHub Pages会自动部署

2. **检查部署状态**：
   - 点击仓库顶部的 **"Actions"** 标签
   - 看到绿色的✅表示部署成功

### 步骤4：访问在线页面

1. **访问链接**：
   ```
   https://你的用户名.github.io/你的仓库名/feishu-config.html
   ```

   **示例**：
   ```
   https://zhangfeifei.github.io/work-anniversary-system/feishu-config.html
   ```

2. **现在可以直接测试Webhook连接**，不会有CORS错误！

---

## 方法2：通过Git命令上传（如果熟悉Git）

### 步骤：

```bash
# 1. 进入项目文件夹
cd C:\Users\zhangfeifei\work-anniversary-system

# 2. 添加文件
git add feishu-config.html

# 3. 提交
git commit -m "添加飞书配置页面"

# 4. 推送到GitHub
git push origin main
# 如果是master分支，使用：git push origin master
```

---

## 方法3：直接编辑器上传（最快）

### 步骤：

1. **打开GitHub仓库主页**

2. **点击 "Add file" → "Upload files"**

3. **打开本地文件夹**：
   ```
   C:\Users\zhangfeifei\work-anniversary-system
   ```

4. **拖拽这个文件到浏览器**：
   - `feishu-config.html`

5. **提交**：输入 "添加飞书配置页面" → Commit

6. **完成！** 等待2分钟后访问

---

## 📸 图文步骤（详细版）

### 第1步：进入仓库主页

```
https://github.com/你的用户名/你的仓库名
```

你会看到：
```
┌─────────────────────────────────────┐
│ <> Code  ○ Issues  ⎙ Pull requests │
├─────────────────────────────────────┤
│                                     │
│  你的仓库名                          │
│                                     │
│  [Add file ▼] [<> Code ▼]         │  ← 点这个
│                                     │
│  📄 assessment-survey.html          │
│  📄 url-generator.html              │
│  📄 README.md                       │
│                                     │
└─────────────────────────────────────┘
```

### 第2步：点击上传文件

点击 **"Add file"** 下拉菜单：
```
┌─────────────────────┐
│ Create new file     │
│ Upload files        │ ← 点这个
└─────────────────────┘
```

### 第3步：拖拽文件

看到上传页面：
```
┌─────────────────────────────────────┐
│  Drag files here to add them to    │
│  your repository                    │
│                                     │
│  ╔═══════════════════════════════╗ │
│  ║                               ║ │
│  ║  拖拽 feishu-config.html     ║ │
│  ║  到这里                       ║ │
│  ║                               ║ │
│  ╚═══════════════════════════════╝ │
│                                     │
│  or choose your files               │
└─────────────────────────────────────┘
```

**操作**：
1. 打开文件夹 `C:\Users\zhangfeifei\work-anniversary-system`
2. 找到 `feishu-config.html`
3. **拖拽**到浏览器上传区域

### 第4步：提交更改

拖拽后，滚动到页面底部：
```
┌─────────────────────────────────────┐
│ Commit changes                      │
├─────────────────────────────────────┤
│                                     │
│ [添加飞书配置页面        ]          │ ← 输入这个
│                                     │
│ [ 可选的详细说明...      ]          │
│                                     │
│ ○ Commit directly to main branch   │ ← 选中这个
│ ○ Create a new branch               │
│                                     │
│  [Commit changes]                   │ ← 点击
└─────────────────────────────────────┘
```

**填写**：
- 第一行：`添加飞书配置页面`
- 选择：`Commit directly to main branch`
- 点击：绿色按钮 **"Commit changes"**

### 第5步：等待部署

1. **点击顶部 "Actions" 标签**

2. **查看部署进度**：
   ```
   ┌─────────────────────────────────────┐
   │ All workflows                       │
   ├─────────────────────────────────────┤
   │ ● pages build and deployment        │ ← 黄色圆圈=进行中
   │   main branch                       │
   │   2 minutes ago                     │
   └─────────────────────────────────────┘
   ```

3. **等待变成绿色✅**（约2-3分钟）：
   ```
   ┌─────────────────────────────────────┐
   │ ✅ pages build and deployment       │ ← 变成绿色勾
   │    main branch                      │
   │    3 minutes ago                    │
   └─────────────────────────────────────┘
   ```

### 第6步：访问在线页面

**在浏览器地址栏输入**：
```
https://你的GitHub用户名.github.io/你的仓库名/feishu-config.html
```

**示例**（假设用户名是zhangfeifei，仓库名是work-system）：
```
https://zhangfeifei.github.io/work-system/feishu-config.html
```

---

## ✅ 部署成功验证

### 访问成功的标志

打开上面的链接后，你会看到：
```
┌─────────────────────────────────────┐
│  🔧 飞书集成配置                     │
│  入职周年祝福系统                    │
├─────────────────────────────────────┤
│                                     │
│  选择集成模式                        │
│                                     │
│  □ Webhook机器人    □ 开放平台API  │
│                                     │
│  Webhook URL:                       │
│  [_________________________]        │
│                                     │
│  [测试连接] [保存配置]              │
│                                     │
└─────────────────────────────────────┘
```

### 测试CORS是否解决

1. **填写Webhook地址**
2. **点击"测试连接"**
3. **如果看到**：
   ```
   ✅ 连接测试成功！
   飞书群已收到测试消息
   ```
   **说明部署成功，CORS问题已解决！**

---

## 🔧 如果访问404错误

### 问题：访问链接显示404 Not Found

**可能原因**：
1. GitHub Pages未启用
2. 文件未上传成功
3. 部署还未完成

**解决方法**：

#### 方法1：检查GitHub Pages设置

1. **进入仓库设置**：
   - 仓库主页 → 点击顶部 **"Settings"** 标签

2. **找到GitHub Pages设置**：
   - 左侧菜单 → 点击 **"Pages"**

3. **确认设置**：
   ```
   ┌─────────────────────────────────────┐
   │ Source                              │
   │                                     │
   │ Branch: [main ▼] / (root) ▼  [Save]│ ← 确认选择了main
   │                                     │
   │ Your site is live at:               │
   │ https://xxx.github.io/xxx/          │ ← 显示这个说明已启用
   └─────────────────────────────────────┘
   ```

4. **如果未启用**：
   - Branch 选择：`main` (或 `master`)
   - 文件夹选择：`/ (root)`
   - 点击 **"Save"**

#### 方法2：检查文件是否存在

1. **回到仓库主页**
2. **查看文件列表**
3. **确认有** `feishu-config.html` 文件
4. **如果没有，重新上传**

#### 方法3：等待更长时间

有时部署需要5-10分钟，尤其是首次部署：
- 等待10分钟
- 清除浏览器缓存
- 重新访问链接

---

## 📦 同时上传其他文件（可选）

如果你想把整个系统都部署到GitHub Pages：

### 建议上传的文件列表

```
必需文件：
□ assessment-survey.html         （评估问卷）
□ feishu-config.html             （飞书配置）
□ url-generator.html             （链接生成器）

可选文件：
□ assessment-collect.html        （数据收集工具）
□ assessment-results.html        （结果查看）
□ feishu-test.html              （飞书测试工具）
□ auto-submit-config.html       （自动回传配置）

文档文件（可选）：
□ README.md
□ 各种指南.md文件
```

### 批量上传

1. **点击 "Add file" → "Upload files"**
2. **选择多个文件**：
   - 按住 Ctrl 键
   - 点击选择多个HTML文件
3. **拖拽到上传区域**
4. **一次性提交**

---

## 🎯 完整流程总结

```
第1步：打开GitHub仓库
https://github.com/你的用户名/你的仓库名

第2步：点击 "Add file" → "Upload files"

第3步：拖拽 feishu-config.html 到浏览器

第4步：输入提交信息 → Commit changes

第5步：等待2-3分钟部署完成

第6步：访问在线页面
https://你的用户名.github.io/你的仓库名/feishu-config.html

第7步：测试Webhook连接（不会有CORS错误）
```

---

## 💡 温馨提示

### 部署后的好处

1. **无CORS限制**
   - 可以直接测试Webhook连接
   - 测试按钮正常工作

2. **随时访问**
   - 不需要本地文件
   - 任何设备都可以访问

3. **分享方便**
   - 可以把链接分享给其他HR同事
   - 他们也可以配置自己的Webhook

### 安全注意

- ⚠️ 不要在公开页面保存Webhook地址
- ✅ 每次使用完清除浏览器localStorage
- ✅ 或使用浏览器的"无痕模式"访问

---

## 🆘 常见问题

### Q1: 找不到 "Add file" 按钮？

**A**: 确认你已登录GitHub，且在仓库主页（不是Settings页面）

### Q2: 上传后还是404？

**A**:
1. 等待5-10分钟
2. 检查Actions标签，确认部署完成（绿色✅）
3. 清除浏览器缓存后重试

### Q3: 可以用手机访问吗？

**A**: 可以！部署后任何设备都能访问，包括手机、平板。

### Q4: 会覆盖之前的评估系统吗？

**A**: 不会！这是新增文件，不影响现有文件。

### Q5: 需要付费吗？

**A**: 不需要！GitHub Pages完全免费。

---

## 📞 需要帮助？

如果按照步骤还是遇到问题：

1. **截图当前页面**
2. **告诉我具体在哪一步遇到问题**
3. **描述看到的错误信息**

我会详细帮您解决！

---

**准备好了吗？现在就开始上传吧！** 🚀

只需要：
1. 打开GitHub仓库
2. 拖拽文件
3. 提交
4. 等待2分钟

就完成了！
