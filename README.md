# Olivia Portfolio

一个使用 Vite + React + Tailwind 的个人网站，包含首页 Hero、关于我（学历/工作/创作者）全屏背景版块，以及纵向时间线样式的个人履历页面。

## 技术栈
- Vite 5
- React 18
- Tailwind CSS v4
- Framer Motion（动效）
- Lucide（图标）

## 本地开发
- 安装依赖：`npm install`
- 启动开发：`npm run dev`
- 生产构建：`npm run build`
- 本地预览：`npm run preview`

> 需要 Node.js 18+。建议使用 Volta 等工具固定 Node 版本。

## 目录与资源
- 页面入口：`src/App.jsx`
- 组件：`src/components`
- 样式：`src/index.css`
- 静态资源：`public/`
  - 首页背景：`public/olivia-hero.jpg`
  - 关于我背景：`public/about-education.jpg`、`public/about-work.jpg`、`public/about-hobby.jpg`

## 功能说明
- 首页按钮：
  - “关于我”跳转到学历版块（平滑滚动）
  - “个人履历”跳转到履历页面
  - 悬停手型与轻微放大交互，透明底色保持不变
- 关于我三段：
  - 使用整屏背景图，左到右渐变遮罩提高文本对比度
- 个人履历：
  - 左侧版块标题列（教育背景/工作经验/实习经验）
  - 右侧纵向时间线（圆点+竖线），右侧时间统一对齐

## 部署与发布
1. 构建：`npm run build`（输出到 `dist/`）
2. 静态托管：将 `dist/` 上传到任意静态托管（如 Vercel、Netlify、GitHub Pages 私有环境等）

## 推送到 GitHub
- 绑定远程：`git remote set-url origin https://github.com/oliviazhang1217/my-web.git`
- 拉取合并：`git pull --rebase origin main`
- 推送：`git push -u origin main`
- 若为私有仓库，请使用 GitHub PAT 认证（建议启用 `credential.helper osxkeychain`）

## License
仅个人使用，不开放商业授权。

