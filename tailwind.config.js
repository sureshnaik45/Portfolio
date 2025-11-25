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
        primary: "#06b6d4", // Cyan-500 (Matches modern dark themes)
        dark: "#0f172a",    // Slate-950
        light: "#f8fafc",
      }
    },
  },
  plugins: [],
}