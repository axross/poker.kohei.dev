/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{ts,tsx}", "./pages/**/*.mdx"],
  theme: {
    extend: {
      fontFamily: {
        "card-symbol": ["var(--font-azeret-mono)", "ui-monospace"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
