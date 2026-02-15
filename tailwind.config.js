/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1e293b", // Slate 800
        "background-light": "#f8f9fa", // Very light gray/white
        "background-dark": "#0f172a", // Slate 900
        "accent-light": "#cbd5e1", // Slate 300
        "accent-dark": "#334155", // Slate 700
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      borderRadius: {
        DEFAULT: "4px",
      },
    },
  },
  plugins: [],
}
