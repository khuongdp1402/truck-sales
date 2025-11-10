# 🚀 Hướng dẫn Deploy lên GitHub Pages

Hướng dẫn chi tiết để deploy project AutoLux lên GitHub Pages với GitHub Actions tự động.

## 📋 Mục lục

1. [Cấu hình Vite cho GitHub Pages](#1-cấu-hình-vite-cho-github-pages)
2. [Tạo GitHub Actions Workflow](#2-tạo-github-actions-workflow)
3. [Cấu hình Base Path](#3-cấu-hình-base-path)
4. [Enable GitHub Pages](#4-enable-github-pages)
5. [Deploy tự động](#5-deploy-tự-động)

---

## 1. Cấu hình Vite cho GitHub Pages

### Bước 1: Cập nhật `vite.config.js`

File `vite.config.js` cần được cấu hình với base path:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/truck-sales/', // Thay đổi theo tên repository của bạn
});
```

### Bước 2: Cập nhật `package.json`

Thêm script deploy vào `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^6.1.0"
  }
}
```

---

## 2. Tạo GitHub Actions Workflow

### Tạo file `.github/workflows/deploy.yml`

Tạo thư mục và file workflow:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          cache-dependency-path: frontend/package-lock.json

      - name: Install dependencies
        working-directory: ./frontend
        run: npm ci

      - name: Build
        working-directory: ./frontend
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './frontend/dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 3. Cấu hình Base Path

### Cập nhật React Router

Nếu sử dụng React Router, cần cấu hình `basename`:

```javascript
// src/main.jsx
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter basename="/truck-sales">
  {/* Your routes */}
</BrowserRouter>
```

---

## 4. Enable GitHub Pages

### Bước 1: Vào Settings

1. Vào repository: https://github.com/khuongdp1402/truck-sales
2. Click tab **Settings**
3. Scroll xuống phần **Pages** (bên trái)

### Bước 2: Cấu hình Source

1. Trong phần **Source**, chọn:
   - **Source**: `GitHub Actions`
2. Click **Save**

### Bước 3: Kiểm tra Deployment

1. Vào tab **Actions** trên repository
2. Bạn sẽ thấy workflow "Deploy to GitHub Pages" đang chạy
3. Đợi workflow hoàn thành (khoảng 2-3 phút)

### Bước 4: Truy cập Website

Sau khi deploy thành công, website sẽ có tại:
- **URL**: `https://khuongdp1402.github.io/truck-sales/`

---

## 5. Deploy tự động

### Cách 1: Push code (Tự động)

Mỗi khi bạn push code lên branch `main`, GitHub Actions sẽ tự động:
1. Build project
2. Deploy lên GitHub Pages
3. Cập nhật website

```bash
git add .
git commit -m "Update website"
git push origin main
```

### Cách 2: Manual Deploy

1. Vào tab **Actions** trên GitHub
2. Chọn workflow "Deploy to GitHub Pages"
3. Click **Run workflow**
4. Chọn branch `main`
5. Click **Run workflow**

---

## 🔧 Troubleshooting

### Lỗi: 404 Not Found

**Nguyên nhân**: Base path không đúng

**Giải pháp**:
1. Kiểm tra `vite.config.js` - base path phải khớp với tên repository
2. Kiểm tra `BrowserRouter` có `basename` đúng chưa
3. Rebuild và deploy lại

### Lỗi: Assets không load

**Nguyên nhân**: Đường dẫn assets sai

**Giải pháp**:
- Đảm bảo tất cả assets sử dụng relative paths
- Kiểm tra `public` folder được copy đúng chưa

### Lỗi: Build failed

**Nguyên nhân**: Dependencies hoặc syntax errors

**Giải pháp**:
1. Test build local: `cd frontend && npm run build`
2. Kiểm tra lỗi trong Actions logs
3. Fix lỗi và push lại

---

## 📝 Checklist Deploy

- [ ] Cấu hình `vite.config.js` với base path đúng
- [ ] Tạo file `.github/workflows/deploy.yml`
- [ ] Enable GitHub Pages trong Settings
- [ ] Push code lên branch `main`
- [ ] Kiểm tra workflow chạy thành công
- [ ] Truy cập website và test các tính năng

---

## 🎯 Quick Start

1. **Cấu hình Vite**:
   ```bash
   # Cập nhật vite.config.js với base: '/truck-sales/'
   ```

2. **Tạo Workflow**:
   ```bash
   # Tạo file .github/workflows/deploy.yml
   ```

3. **Enable Pages**:
   - Vào Settings → Pages → Source: GitHub Actions

4. **Push và Deploy**:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

5. **Truy cập**: `https://khuongdp1402.github.io/truck-sales/`

---

## 🔗 Links hữu ích

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**Chúc bạn deploy thành công! 🚀**

