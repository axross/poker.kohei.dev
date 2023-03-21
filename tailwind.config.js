/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.mdx",
    "./.storybook/globals.css",
  ],
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
