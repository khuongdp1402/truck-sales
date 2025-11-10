# 🎉 Release v1.0.0 - AutoLux Car Dealership Website

## ✨ Features

### 🌓 Theme System
- **Dark/Light Mode Toggle** với localStorage persistence
- Dark Elegant theme: Background #0f172a, Text #f1f5f9, Accent #fbbf24
- Light Minimal theme: Background #f8fafc, Text #0f172a, Accent #2563eb
- Smooth theme transitions (0.5s)

### 🎥 360° Car View
- Interactive car viewing experience
- Rotating icon animation
- Hover effects với scale animation
- "Kéo để xem quanh xe" instruction text

### 🖼️ Image Gallery
- Beautiful grid layout (3 columns desktop, responsive)
- Hover overlay effects với fade-in animation
- "Xem chi tiết" button on hover
- Image scale effect on hover

### 📊 Car Specifications Tabs
- 3 interactive tabs:
  - **Thông số kỹ thuật**: Công suất, động cơ, tốc độ, dung tích...
  - **Màu sắc**: Color picker với 6 màu options
  - **Dòng xe**: Luxury, Sport, Hybrid, Performance variants
- Smooth fade/slide animations khi chuyển tab
- 2-column layout: Image left, Tabs right

### 🎨 UI/UX Features
- Fully responsive design (mobile, tablet, desktop)
- Smooth scroll animations với Framer Motion
- Brand carousel với SwiperJS
- Car listings với filter (brand, price range)
- Car detail pages với image gallery
- Contact form với modal support
- Admin panel (UI only) - Cars & Contacts management

## 🛠️ Tech Stack

- **React 18.3.1** - UI library
- **Vite 7.2.2** - Build tool
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion 12.23.24** - Animation library
- **SwiperJS 12.0.3** - Touch slider
- **React Router DOM 7.9.5** - Routing
- **React Icons 5.5.0** - Icon library

## 📦 Installation

```bash
cd frontend
npm install
```

## 🏃 Running the Project

```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build for Production

```bash
cd frontend
npm run build
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Car360View.jsx
│   │   ├── CarGallery.jsx
│   │   ├── CarSpecsTabs.jsx
│   │   ├── Navbar.jsx (with theme toggle)
│   │   └── ...
│   ├── pages/           # Page components
│   ├── contexts/        # React contexts
│   │   └── ThemeContext.jsx
│   ├── styles/          # Global styles
│   ├── mock/            # Mock data
│   └── ...
└── public/
    └── demo-images/     # Car images and brand logos
```

## 🛣️ Routes

- `/` - Home page
- `/cars` - Car listings với filters
- `/cars/:id` - Car detail page
- `/admin/login` - Admin login
- `/admin/cars` - Manage cars
- `/admin/contacts` - Manage contacts

## 🎯 Key Highlights

- ✅ **55 files** committed
- ✅ **4000+ lines** of code
- ✅ **Fully responsive** design
- ✅ **Dark/Light theme** support
- ✅ **Smooth animations** throughout
- ✅ **Mock data** ready (no backend required)
- ✅ **Production ready** build

## 📝 Notes

- This is a **UI/UX demo only** - no backend connection
- All data is mock data stored in `src/mock/`
- Forms show alerts for demo purposes
- Images use Unsplash placeholders if local images are not available

## 🔗 Links

- **Repository**: https://github.com/khuongdp1402/truck-sales
- **Live Demo**: (Add your deployment link here)

## 📄 License

© 2025 LuxCar. All rights reserved.

---

**Built with ❤️ for AutoLux**

