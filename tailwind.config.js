/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'card-symbol': ['"Azeret Mono"', 'ui-monospace'],
      }
    },
  },
  plugins: [],
  darkMode: "class",
}
