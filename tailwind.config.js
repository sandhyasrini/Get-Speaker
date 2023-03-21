/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      belle: ["La Belle Aurore", "cursive"],
      calibre: ['Calibre', 'sans-serif']
    }
  },
  plugins: [],
}