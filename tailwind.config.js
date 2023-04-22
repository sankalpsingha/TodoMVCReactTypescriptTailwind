/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: "rgba(175, 47, 47, 0.15)",
        cream: "#f5f5f5",
      },
    },
    fontFamily: {
      sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
