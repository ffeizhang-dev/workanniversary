# 入职周年祝福提醒系统 - 在线版

理想汽车风格的入职周年祝福提醒系统，支持多用户在线协作。

## 功能特性

- 🔐 用户认证系统 (邮箱/密码 + Google登录)
- 👥 多租户支持 (每个组织独立数据空间)
- 📊 实时数据同步 (多用户协作)
- 🎂 自动周年提醒 (生日当天和提前3天)
- 📤 数据导入导出 (CSV/TXT/JSON格式)
- 🖼️ 员工照片上传
- 🎨 理想汽车设计风格
- 📱 响应式设计 (支持移动端)

## 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **后端服务**: Firebase
  - Authentication (身份认证)
  - Firestore (云数据库)
  - Storage (文件存储)
  - Hosting (网站托管)
- **CDN**: Firebase SDK (通过CDN加载)

## 快速开始

### 1. 前置要求

- Node.js 14+ (用于Firebase CLI)
- Firebase账号
- 现代浏览器 (Chrome, Firefox, Safari, Edge)

### 2. Firebase项目设置

```bash
# 安装Firebase CLI
npm install -g firebase-tools

# 登录Firebase
firebase login

# 初始化项目 (选择Firestore, Authentication, Storage, Hosting)
firebase init
```

### 3. 配置Firebase

编辑 `scripts/config.js`，填入你的Firebase项目配置:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

> 提示: 在Firebase Console > 项目设置 > 你的应用 中可以找到这些配置信息

### 4. 启用Firebase服务

在Firebase Console中启用以下服务:

**Authentication**:
- 邮箱/密码登录
- Google登录 (可选)

**Firestore Database**:
- 在生产模式下创建数据库
- 部署security rules: `firebase deploy --only firestore:rules`

**Storage**:
- 创建Storage bucket
- 部署security rules: `firebase deploy --only storage`

### 5. 本地测试

```bash
# 启动本地服务器
firebase serve

# 访问 http://localhost:5000
```

### 6. 部署到生产环境

```bash
# 部署所有服务
firebase deploy

# 仅部署hosting
firebase deploy --only hosting

# 部署完成后会显示:
# Hosting URL: https://your-project.web.app
```

## 项目结构

```
work-anniversary-system/
├── index.html              # 主页面
├── styles/
│   ├── main.css           # 主样式
│   ├── modal.css          # 弹窗样式
│   └── responsive.css     # 响应式样式
├── scripts/
│   ├── config.js          # Firebase配置
│   ├── auth.js            # 认证逻辑
│   ├── database.js        # 数据库操作
│   ├── employees.js       # 员工管理
│   ├── anniversaries.js   # 周年计算
│   ├── notifications.js   # 通知系统
│   ├── import-export.js   # 导入导出
│   └── main.js            # 主入口
├── firebase.json          # Firebase配置
├── firestore.rules        # 数据库安全规则
├── firestore.indexes.json # 数据库索引
├── storage.rules          # 存储安全规则
└── README.md             # 本文件
```

## 使用指南

### 首次使用

1. **注册账号**: 访问系统URL，使用邮箱注册或Google账号登录
2. **创建组织**: 首次登录后，创建你的组织(公司)
3. **邀请成员**: 生成邀请码，分享给团队成员
4. **添加员工**: 手动添加或批量导入员工数据

### 权限角色

| 角色 | 权限 |
|-----|------|
| **管理员 (admin)** | 全部权限: 添加/编辑/删除员工, 管理团队成员, 导出数据 |
| **编辑者 (editor)** | 添加/编辑员工信息, 发送祝福消息 |
| **查看者 (viewer)** | 仅查看员工信息和周年提醒 |

### 数据导入

支持三种格式:

1. **CSV格式**: Excel导出的CSV UTF-8文件
2. **TXT格式**: 使用 `|`, `;`, 或 Tab 分隔的文本文件
3. **JSON格式**: 从旧版本导出的完整数据

详细格式说明见系统内的 "导入数据" 帮助文档。

### 数据迁移

从localStorage版本迁移:

1. 在旧系统中点击 "导出数据"
2. 登录新系统
3. 点击 "导入数据" → 选择导出的JSON文件
4. 选择 "追加" 或 "替换" 模式

## 数据库结构

### Collections

**organizations** (组织表)
```javascript
{
  id: "auto_id",
  name: "理想汽车北京分公司",
  createdAt: Timestamp,
  adminEmails: ["hr@company.com"]
}
```

**users** (用户表)
```javascript
{
  uid: "firebase_uid",
  email: "user@company.com",
  displayName: "张三",
  organizationId: "org_id",
  role: "admin | editor | viewer",
  joinedAt: Timestamp,
  settings: {...}
}
```

**employees** (员工表)
```javascript
{
  id: "auto_id",
  organizationId: "org_id",
  name: "李四",
  employeeNumber: "E001",
  department: "技术部",
  grade: "16",
  status: "在职",
  joinDate: "2020-01-15",
  photoURL: "https://...",
  reminderEnabled: true,
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

## 安全与隐私

- ✅ 所有数据传输使用HTTPS加密
- ✅ Firestore安全规则确保数据隔离
- ✅ 用户只能访问所属组织的数据
- ✅ 照片存储在Firebase Storage，访问受控
- ✅ 密码使用Firebase Authentication加密存储

## 成本估算

### Firebase免费额度 (Spark计划)

对于中小团队 (100员工以内, 10活跃用户):

| 服务 | 免费额度 | 预估使用 |
|------|---------|---------|
| Firestore 读取 | 50,000次/天 | ~1,000次/天 ✅ |
| Firestore 写入 | 20,000次/天 | ~50次/天 ✅ |
| Storage | 1GB | ~50MB ✅ |
| Hosting | 10GB/月 | ~500MB/月 ✅ |

**结论**: 免费额度完全够用 💚

### 升级场景

考虑升级到Blaze计划 (按使用量付费) 当:
- 员工数 > 1000
- 日活跃用户 > 50
- 存储照片 > 1GB

## 常见问题

### Q: 如何重置密码?

A: 在登录页点击 "忘记密码"，输入邮箱后会收到重置链接。

### Q: 可以同时管理多个组织吗?

A: 目前一个账号只能加入一个组织。如需管理多个组织，请注册多个账号。

### Q: 数据会丢失吗?

A: Firebase提供99.95%可用性保证，数据自动备份。建议定期导出数据作为额外备份。

### Q: 支持企业微信登录吗?

A: 暂不支持，目前支持邮箱/密码和Google账号登录。

### Q: 如何删除组织?

A: 请联系系统管理员，组织删除需要手动操作以防误删。

## 技术支持

遇到问题?

1. 检查浏览器控制台是否有错误信息
2. 确认Firebase配置是否正确
3. 查看Firestore安全规则是否已部署
4. 检查网络连接

## 更新日志

### v2.0.0 (2025-02-12)
- 🎉 重构为云端多用户系统
- ✨ 添加Firebase身份认证
- ✨ 实现Firestore实时数据同步
- ✨ 支持多租户数据隔离
- ✨ 添加团队成员管理
- ✨ 实现角色权限控制
- 🎨 优化理想汽车设计风格

### v1.0.0 (2025-02-10)
- 🎉 首个版本发布 (localStorage版本)
- ✨ 员工管理功能
- ✨ 周年提醒功能
- ✨ 数据导入导出
- 🎨 理想汽车设计风格

## 许可证

MIT License

---

祝您使用愉快！🎉
