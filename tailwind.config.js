/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx} ",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#A0A7D2",
          100: "#8D96C8",
          200: "#7A84BE",
          300: "#6862B4",
          400: "#5550AA",
          500: "#4A57B3",
          600: "#404E9E",
          700: "#36468A",
          800: "#2C3D75",
          900: "#223561",
        },
      },
    },
  },
  plugins: [],
};
