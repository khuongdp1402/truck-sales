# ⚡ Quick Deploy Guide - GitHub Pages

## 🎯 3 Bước Đơn Giản

### ✅ Bước 1: Enable GitHub Pages (Chỉ làm 1 lần)

1. Vào repository: https://github.com/khuongdp1402/truck-sales
2. Click **Settings** (tab trên cùng)
3. Scroll xuống phần **Pages** (menu bên trái)
4. Trong phần **Source**, chọn:
   - **Source**: `GitHub Actions` 
5. Click **Save**

### ✅ Bước 2: Push Code (Đã hoàn thành!)

Code đã được push với:
- ✅ GitHub Actions workflow (`.github/workflows/deploy.yml`)
- ✅ Vite config với base path `/truck-sales/`
- ✅ React Router với basename `/truck-sales`

### ✅ Bước 3: Kiểm tra Deployment

1. Vào tab **Actions** trên GitHub repository
2. Bạn sẽ thấy workflow "Deploy to GitHub Pages" đang chạy
3. Đợi 2-3 phút để build và deploy
4. Khi thấy ✅ (màu xanh) = Deploy thành công!

## 🌐 Truy cập Website

Sau khi deploy thành công, website sẽ có tại:

**https://khuongdp1402.github.io/truck-sales/**

## 🔄 Deploy Tự Động

Từ giờ, mỗi khi bạn:
```bash
git push origin main
```

GitHub sẽ tự động:
1. Build project
2. Deploy lên GitHub Pages
3. Cập nhật website

## 🐛 Troubleshooting

### Lỗi: Workflow không chạy
- Kiểm tra đã enable GitHub Pages chưa (Bước 1)
- Kiểm tra file `.github/workflows/deploy.yml` có tồn tại không

### Lỗi: 404 Not Found
- Kiểm tra base path trong `vite.config.js` phải là `/truck-sales/`
- Kiểm tra basename trong `main.jsx` phải là `/truck-sales`

### Lỗi: Build failed
- Vào tab Actions → Click vào workflow failed → Xem logs
- Thường là lỗi dependencies hoặc syntax

## 📝 Checklist

- [x] GitHub Actions workflow đã được tạo
- [x] Vite config đã được cấu hình
- [x] React Router basename đã được set
- [ ] **Bạn cần**: Enable GitHub Pages trong Settings
- [ ] **Bạn cần**: Đợi workflow chạy xong
- [ ] **Bạn cần**: Truy cập website và test

---

**Chỉ còn 1 bước nữa: Enable GitHub Pages trong Settings! 🚀**

