/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        app: "auto 1fr auto",
      },
    },
    fontFamily: {
      Montserrat: ["montserrat", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
