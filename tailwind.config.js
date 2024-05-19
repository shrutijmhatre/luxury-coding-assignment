/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        domine: ["Domine", "sans-serif"],
      },
      transformOrigin: {
        "top-left-1/3-3/4": "33% 75%",
        "top-top": "50% 50%",
      },
    },
  },
  plugins: [],
};
