import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ceff04",
          hover: "#bce600",
          soft: "rgba(206, 255, 4, 0.1)",
        },
        accent: "#1d1c2d",
        surface: {
          light: "#FFFFFF",
          subtle: "#f8f9fa",
          border: "#E5E7EB",
        },
        text: {
          main: "#1d1c2d",
          secondary: "#6B7280",
          muted: "#9CA3AF",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(0, 0, 0, 0.05), 0 0 15px rgba(0, 0, 0, 0.03)',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-6px)' },
          '40%, 80%': { transform: 'translateX(6px)' },
        },
      },
      animation: {
        shake: 'shake 0.4s ease-in-out',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
  ],
};
