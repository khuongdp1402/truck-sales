# AutoLux - Car Dealership Website Demo

A modern, elegant ReactJS car dealership website demo with a dark theme, built with Vite.

## 🚀 Features

- **Dark Elegant Theme** - Beautiful dark UI with gold accents
- **Responsive Design** - Works on all devices
- **Smooth Animations** - Powered by Framer Motion
- **Car Listings** - Browse and filter cars by brand and price
- **Car Details** - Detailed view with image gallery
- **Contact Form** - Customer inquiry form
- **Admin Panel** - Manage cars and contacts (UI only)
- **Mock Data** - No backend required for demo

## 📦 Installation

```bash
cd frontend
npm install
```

## 🏃 Running the Project

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/           # Page components
│   │   └── admin/       # Admin pages
│   ├── styles/          # Global styles
│   ├── mock/            # Mock data
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── public/
│   └── demo-images/     # Car images and brand logos
└── package.json
```

## 🎨 Design System

- **Background**: #0F1115
- **Card Background**: #1B1E24
- **Primary Text**: #E5E7EB
- **Secondary Text**: #9CA3AF
- **Accent Gold**: #FBBF24
- **Fonts**: Poppins (headings), Inter (body)

## 🛣️ Routes

- `/` - Home page
- `/cars` - Car listings
- `/cars/:id` - Car detail page
- `/admin/login` - Admin login
- `/admin/cars` - Manage cars
- `/admin/contacts` - Manage contacts

## 📝 Notes

- This is a **UI/UX demo only** - no backend connection
- All data is mock data stored in `src/mock/`
- Forms show alerts for demo purposes
- Images use Unsplash placeholders if local images are not available

## 🧰 Technologies Used

- React 18
- React Router DOM
- Vite
- Framer Motion
- Swiper
- React Icons

## 📸 Adding Images

Place car images in `public/demo-images/` and brand logos in `public/demo-images/brands/`. See `public/demo-images/README.md` for naming conventions.

---

Built with ❤️ for AutoLux

