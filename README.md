# AutoLux - Car Dealership Website

A modern, elegant ReactJS car dealership website demo with dark/light theme support, built with Vite, TailwindCSS, Framer Motion, and SwiperJS.

## 🚀 Features

- **Dark/Light Theme Toggle** - Seamless theme switching with localStorage persistence
- **360° Car View** - Interactive car viewing experience
- **Image Gallery** - Beautiful grid gallery with hover effects
- **Car Specifications Tabs** - Detailed car information with smooth animations
- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Powered by Framer Motion
- **Brand Carousel** - Showcase partner brands
- **Admin Panel** - Manage cars and contacts (UI only)

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **SwiperJS** - Touch slider
- **React Router DOM** - Routing
- **React Icons** - Icon library

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
│   │   └── ...
│   ├── pages/           # Page components
│   │   └── admin/       # Admin pages
│   ├── contexts/        # React contexts
│   │   └── ThemeContext.jsx
│   ├── styles/          # Global styles
│   ├── mock/            # Mock data
│   ├── App.jsx
│   └── main.jsx
└── public/
    └── demo-images/     # Car images and brand logos
```

## 🎨 Theme System

The project supports two themes:

- **Dark Elegant**: Background #0f172a, Text #f1f5f9, Accent #fbbf24
- **Light Minimal**: Background #f8fafc, Text #0f172a, Accent #2563eb

Theme preference is saved in localStorage and persists across sessions.

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

## 📸 Adding Images

Place car images in `public/demo-images/` and brand logos in `public/demo-images/brands/`. See `public/demo-images/README.md` for naming conventions.

## 🧰 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 License

© 2025 LuxCar. All rights reserved.

---

Built with ❤️ for AutoLux

