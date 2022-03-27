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
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      rose: colors.rose,
      pink: colors.pink,
      red: colors.red,
      orange: colors.orange,
      blue: colors.blue,
      teal: colors.teal,
      green: colors.green,
      purple: colors.purple,
    },
  },
  fontFamily: {
    sans: ["Inter", "sans-serif"],
  },
};
