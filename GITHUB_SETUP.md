# Hướng dẫn Push Project lên GitHub và Tạo Release

## 📋 Các bước đã hoàn thành

✅ Git repository đã được khởi tạo
✅ Tất cả files đã được commit
✅ Release tag v1.0.0 đã được tạo

## 🚀 Các bước tiếp theo để push lên GitHub

### 1. Tạo Repository trên GitHub

1. Đăng nhập vào [GitHub](https://github.com)
2. Click vào dấu **+** ở góc trên bên phải → **New repository**
3. Đặt tên repository (ví dụ: `autolux-car-dealership`)
4. Chọn **Public** hoặc **Private**
5. **KHÔNG** tích vào "Initialize with README" (vì đã có code local)
6. Click **Create repository**

### 2. Kết nối Local Repository với GitHub

Chạy các lệnh sau (thay `YOUR_USERNAME` và `YOUR_REPO_NAME` bằng thông tin của bạn):

```bash
# Thêm remote origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Đổi tên branch thành main (nếu cần)
git branch -M main

# Push code lên GitHub
git push -u origin main

# Push tags lên GitHub
git push origin v1.0.0
```

### 3. Tạo Release trên GitHub

1. Vào repository trên GitHub
2. Click vào **Releases** (bên phải)
3. Click **Create a new release**
4. Chọn tag **v1.0.0** từ dropdown
5. Đặt tiêu đề: **v1.0.0 - AutoLux Car Dealership Website**
6. Mô tả release:

```markdown
## 🎉 Release v1.0.0 - AutoLux Car Dealership Website

### ✨ Features

- 🌓 Dark/Light Theme Toggle với localStorage persistence
- 🎥 360° Car View Section với animation
- 🖼️ Image Gallery với hover effects
- 📊 Car Specifications Tabs với smooth animations
- 📱 Fully Responsive Design
- 🎨 Elegant UI với Framer Motion animations
- 🚗 Car listings và detail pages
- 👨‍💼 Admin panel (UI only)

### 🛠️ Tech Stack

- React 18 + Vite
- TailwindCSS
- Framer Motion
- SwiperJS
- React Router DOM

### 📦 Installation

```bash
cd frontend
npm install
npm run dev
```

### 🎯 Demo

Truy cập `http://localhost:5173` sau khi chạy `npm run dev`
```

7. Click **Publish release**

## 🔄 Các lệnh Git hữu ích

```bash
# Xem trạng thái
git status

# Xem các commit
git log --oneline

# Xem các tags
git tag

# Tạo tag mới
git tag -a v1.0.1 -m "Release v1.0.1"

# Push tag mới
git push origin v1.0.1

# Xem remote
git remote -v
```

## 📝 Lưu ý

- Đảm bảo bạn đã cài đặt Git và đã cấu hình user name/email:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

- Nếu gặp lỗi authentication, bạn có thể cần:
  - Sử dụng Personal Access Token thay vì password
  - Hoặc cấu hình SSH keys

## 🎯 Quick Start Commands

Sau khi tạo repository trên GitHub, chạy:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
git push origin v1.0.0
```

---

**Chúc bạn thành công! 🚀**

