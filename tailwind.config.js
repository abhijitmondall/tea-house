/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FF0000",
        secondaryColor: "#FF8938",
        greyColor: "#F4F4F4",
        darkColor: "#1C1C1C",
        yellowColor: "#FFC850",
        lightYellowColor: "rgba(230, 166, 35, 0.1)",
      },
    },
  },
  plugins: [],
};
