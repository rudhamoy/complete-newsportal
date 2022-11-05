/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futura2: ["FUTURA21"],
        proxima: ["PROXIMALIGHT"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}