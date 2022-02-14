const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    colors: {
      primary: {
        main: colors.gray[800],
      },
      secondary: {
        main: colors.yellow[500],
      },
    },
  },
  fontFamily: {
    sans: ["Inter", "sans-serif"],
  },
};
