/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: "rgba(175, 47, 47, 0.15)",
      },
    },
    fontFamily: {
      sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
