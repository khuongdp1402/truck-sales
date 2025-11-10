/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          text: '#f1f5f9',
          accent: '#fbbf24',
        },
        light: {
          bg: '#f8fafc',
          card: '#ffffff',
          text: '#0f172a',
          accent: '#2563eb',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

