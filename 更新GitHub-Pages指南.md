# 🚀 更新GitHub Pages文件指南

## 方法1：通过GitHub网页直接更新（最简单）

### 步骤：

1. **打开GitHub仓库**
   - 访问：`https://github.com/你的用户名/你的仓库名`

2. **找到要更新的文件**
   - 点击文件列表中的 `assessment-survey.html`

3. **编辑文件**
   - 点击右上角的 **铅笔图标** ✏️（Edit this file）

4. **删除旧内容，粘贴新内容**
   - 全选删除（Ctrl+A，然后Delete）
   - 打开本地的 `assessment-survey.html` 文件
   - 复制全部内容（Ctrl+A，Ctrl+C）
   - 粘贴到GitHub编辑器中（Ctrl+V）

5. **提交更改**
   - 滚动到页面底部
   - 在 "Commit changes" 部分：
     - 第一行输入：`更新标题为：整车电动管理者角色评分`
     - 第二行（可选）输入详细说明
   - 点击绿色按钮 **"Commit changes"**

6. **等待部署（2-3分钟）**
   - GitHub Pages 会自动重新部署
   - 查看部署状态：仓库页面 → Actions 标签

7. **验证更新**
   - 访问你的评估链接
   - 刷新页面（Ctrl+F5 强制刷新）
   - 确认标题已更新为 "整车电动管理者角色评分"

---

## 方法2：直接上传文件覆盖

### 步骤：

1. **打开GitHub仓库主页**
   ```
   https://github.com/你的用户名/你的仓库名
   ```

2. **找到现有文件**
   - 点击 `assessment-survey.html`

3. **删除旧文件**
   - 点击右上角的 **垃圾桶图标** 🗑️（Delete this file）
   - 底部提交删除：输入 "删除旧文件" → Commit changes

4. **上传新文件**
   - 返回仓库主页
   - 点击 **"Add file"** → **"Upload files"**
   - 拖拽本地的 `assessment-survey.html` 到上传区域
   - 或点击 "choose your files" 选择文件
   - 输入提交信息：`更新标题为：整车电动管理者角色评分`
   - 点击 **"Commit changes"**

5. **等待2-3分钟，刷新链接验证**

---

## 方法3：使用Git命令（如果熟悉Git）

### 如果本地有Git环境：

```bash
# 1. 进入项目文件夹
cd C:\Users\zhangfeifei\work-anniversary-system

# 2. 初始化Git（如果还没有）
git init

# 3. 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 4. 添加修改的文件
git add assessment-survey.html

# 5. 提交更改
git commit -m "更新标题为：整车电动管理者角色评分"

# 6. 推送到GitHub
git push origin main
# 如果分支是master，使用：git push origin master
```

---

## 📋 快速操作清单

**推荐使用方法1（网页编辑）**：

- [ ] 打开 GitHub 仓库
- [ ] 点击 `assessment-survey.html`
- [ ] 点击编辑按钮 ✏️
- [ ] 复制本地修改后的文件内容
- [ ] 粘贴到 GitHub 编辑器
- [ ] 提交更改
- [ ] 等待 2-3 分钟
- [ ] 刷新评估链接验证

---

## ⚠️ 注意事项

1. **清除浏览器缓存**
   - 更新后访问链接时，按 `Ctrl+F5` 强制刷新
   - 或清除浏览器缓存后访问

2. **部署时间**
   - GitHub Pages 通常需要 1-3 分钟完成部署
   - 可以在仓库的 "Actions" 标签查看部署进度

3. **验证更新**
   - 刷新后应该看到新标题："整车电动管理者角色评分"
   - 检查浏览器标签页标题是否也更新了

4. **如果看不到更新**
   - 等待 5 分钟再试
   - 使用无痕/隐私模式打开
   - 或使用其他浏览器测试

---

## 🎯 本次需要更新的内容

已修改的文件：
- ✅ `assessment-survey.html` - 标题改为 "整车电动管理者角色评分"

其他文件（不需要更新）：
- `url-generator.html` - 链接生成器
- `assessment-collect.html` - 数据收集工具
- `feishu-test.html` - 测试工具
- 各种文档 `.md` 文件

**只需要上传 `assessment-survey.html` 一个文件即可！**

---

## 🆘 如果遇到问题

### 问题1：无法编辑文件
**解决方案**：确认你已登录GitHub账号，且是仓库的所有者

### 问题2：上传后看不到更新
**解决方案**：
1. 检查 Actions 标签，确认部署成功
2. 清除浏览器缓存
3. 等待 5 分钟后重试

### 问题3：提交时出现错误
**解决方案**：
1. 检查文件内容是否完整
2. 确保文件名没有改变
3. 重试上传操作

---

**准备好后，按照方法1的步骤更新GitHub Pages即可！** 🚀

更新完成后，您之前生成的评估链接会自动显示新标题，无需重新生成链接。
