# GitHub Pages 404 问题修复总结

## 🎯 问题诊断

您的网站显示 404 错误的根本原因是：**单页应用（SPA）路由配置问题**

当 React 应用部署到 GitHub Pages 的子路径（如 `/octo3-club/`）时，存在以下问题：

1. **缺少 404.html 处理** - 直接访问子路由（如 `/octo3-club/about`）时，GitHub Pages 找不到对应的物理文件，返回 404
2. **Wouter 路由未配置 base path** - 前端路由不知道应用部署在子路径下
3. **缺少 TypeScript 类型定义** - `import.meta.env` 的类型未定义

---

## ✅ 已完成的修复

### 1. 添加 404.html 文件
**位置:** `public/404.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script>
      // GitHub Pages SPA 路由修复
      // 将 404 页面重定向到 index.html，同时保留路径信息
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/octo3-club/'" />
  </head>
  <body>
  </body>
</html>
```

**作用:** 当用户直接访问子路由时，GitHub Pages 会显示此 404 页面，然后自动重定向到 index.html

---

### 2. 修改 index.html
**位置:** `index.html`

添加了路由恢复脚本：

```javascript
// GitHub Pages SPA 路由修复
// 从 404.html 重定向后恢复原始 URL
(function(){
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect != location.href) {
    history.replaceState(null, null, redirect);
  }
})();
```

**作用:** 从 404.html 重定向回来后，恢复用户原本想访问的 URL

---

### 3. 配置 Wouter 路由的 base path
**位置:** `src/App.tsx`

修改前：
```tsx
function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* ... */}
    </Switch>
  );
}
```

修改后：
```tsx
import { Route, Switch, Router } from "wouter";

const basePath = import.meta.env.BASE_URL;

function App() {
  return (
    <Router base={basePath}>
      <Switch>
        <Route path="/" component={Home} />
        {/* ... */}
      </Switch>
    </Router>
  );
}
```

**作用:** 告诉 Wouter 应用部署在 `/octo3-club/` 子路径下，正确处理路由

---

### 4. 添加 Vite 类型定义
**位置:** `src/vite-env.d.ts`

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

**作用:** 为 TypeScript 提供 `import.meta.env.BASE_URL` 的类型定义

---

### 5. 修正 package.json
**位置:** `package.json`

```json
{
  "name": "octo3-club",  // 之前是 "octo3-club.github.io"
}
```

**作用:** 项目名称与仓库名保持一致

---

## 🚀 部署步骤

### 第 1 步：推送代码到 GitHub

```bash
cd /Users/dongzhilin/Downloads/hku-cs-study-group-static
git push
```

### 第 2 步：检查 GitHub Pages 设置

1. 访问 https://github.com/Dongzl-2117/octo3-club
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Pages**
4. 确认配置：
   - **Source**: 必须选择 **GitHub Actions**
   - 如果是其他选项，请改为 **GitHub Actions**

### 第 3 步：等待部署完成

1. 点击仓库的 **Actions** 标签
2. 查看最新的工作流状态
3. 等待绿色勾号✅（通常需要 1-3 分钟）

### 第 4 步：访问网站

部署成功后，访问：
```
https://Dongzl-2117.github.io/octo3-club/
```

---

## 📋 完整的配置信息

| 配置项 | 值 |
|--------|-----|
| GitHub 用户名 | `Dongzl-2117` |
| 仓库名 | `octo3-club` |
| 网站地址 | `https://Dongzl-2117.github.io/octo3-club/` |
| Base Path | `/octo3-club/` |
| 部署方式 | GitHub Actions |

---

## 🔍 验证清单

在推送代码后，请验证以下内容：

- [ ] git push 成功执行
- [ ] GitHub Actions 工作流运行成功（绿色✅）
- [ ] GitHub Pages 设置为 "GitHub Actions"
- [ ] 访问 `https://Dongzl-2117.github.io/octo3-club/` 能看到首页
- [ ] 点击导航链接（如 Presentations, Resources）能正常跳转
- [ ] 直接访问子路由（如 `https://Dongzl-2117.github.io/octo3-club/about`）不会出现 404

---

## 🛠️ 如果仍然出现问题

### 问题 1: Actions 工作流失败

**解决方案:**
1. 点击失败的工作流查看错误日志
2. 确认 `.github/workflows/deploy.yml` 文件存在且配置正确
3. 检查仓库的 Settings → Actions → General → Workflow permissions 是否允许写入

### 问题 2: 首页正常但子路由仍然 404

**解决方案:**
1. 清除浏览器缓存
2. 确认 `dist/404.html` 文件存在
3. 检查浏览器控制台是否有 JavaScript 错误

### 问题 3: CSS 或 JS 资源加载失败

**解决方案:**
1. 确认 `vite.config.ts` 中 `base: '/octo3-club/'` 配置正确
2. 重新构建：`pnpm build`
3. 检查 `dist/index.html` 中的资源路径是否正确（应为 `/octo3-club/assets/...`）

---

## 📝 技术原理

### SPA 路由在 GitHub Pages 的工作原理

1. 用户访问 `https://Dongzl-2117.github.io/octo3-club/about`
2. GitHub Pages 查找物理文件 `/octo3-club/about/index.html`（不存在）
3. GitHub Pages 返回 `404.html`
4. `404.html` 将当前 URL 保存到 `sessionStorage`，然后重定向到 `/octo3-club/`
5. 加载 `index.html`，其中的脚本从 `sessionStorage` 恢复原始 URL
6. React Router 接管，渲染正确的组件（About 页面）

---

## 📚 相关文件

修改的文件：
- ✅ `public/404.html` (新建)
- ✅ `index.html` (修改)
- ✅ `src/App.tsx` (修改)
- ✅ `src/vite-env.d.ts` (新建)
- ✅ `package.json` (修改)

未修改的配置（已正确）：
- ✅ `vite.config.ts` - base 路径配置正确
- ✅ `.github/workflows/deploy.yml` - GitHub Actions 配置正确

---

**修复完成时间:** 2025年11月4日  
**修复提交:** `Fix GitHub Pages SPA routing with 404.html and base path configuration`

现在请执行 `git push`，然后等待部署完成！🚀

