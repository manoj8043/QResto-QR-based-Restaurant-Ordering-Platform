import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        saffron: "#FF9933",
        "saffron-dark": "#FF8C00",
        "indian-red": "#CD5C5C",
        "indian-gold": "#FFD700",
        "indian-green": "#138808",
        "indian-white": "#FFFFFF",
        "indian-blue": "#000080",
        maroon: "#800000",
        cream: "#FFF8DC",
        "spice-orange": "#FF7F50",
        turmeric: "#FFC107",
        cardamom: "#8FBC8F",
        cinnamon: "#D2691E",
      },
      fontFamily: {
        telugu: ["Noto Sans Telugu", "sans-serif"],
        elegant: ["Playfair Display", "serif"],
        modern: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "indian-pattern":
          'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFD700" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
        mandala:
          'url(\'data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFD700" fill-opacity="0.05"%3E%3Cpath d="M50 50c0-27.614-22.386-50-50-50v100c27.614 0 50-22.386 50-50z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FF9933",
          secondary: "#138808",
          accent: "#FFD700",
          neutral: "#1f2937",
          "base-100": "#FFFFFF",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
          info: "#3b82f6",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
        dark: {
          primary: "#FF8C00",
          secondary: "#22c55e",
          accent: "#FFD700",
          neutral: "#374151",
          "base-100": "#1f2937",
          "base-200": "#374151",
          "base-300": "#4b5563",
          info: "#60a5fa",
          success: "#34d399",
          warning: "#fbbf24",
          error: "#f87171",
        },
      },
    ],
  },
};
