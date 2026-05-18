/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E8",
        crimson: "#8B1A1A",
        editorial: "#1a1a1a",
      },
      fontFamily: {
        mono: ["'Courier New'", "monospace"],
      },
    },
  },
  plugins: [],
}