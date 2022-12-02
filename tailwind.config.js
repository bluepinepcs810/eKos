/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-light": "#FCF5FF",
        "main": "#EFDBFF",
        "main-weighted": "#C883FF",
        "main-strong": "#D2B6F7",
        "main-dark": "#5E25D9",
        "main-thick": "#4703A6",
        "second-main": '#B79ADD'
      },
    },
  },
  plugins: [],
};
