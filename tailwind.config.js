/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      darkBlue: " hsl(233, 26%, 24%)",
      limeGreen: " hsl(136, 65%, 51%)",
      brightCyan: " hsl(192, 70%, 51%)",
      grayishBlue: "hsl(233, 8%, 62%)",
      lightGrayishBlue: "hsl(220, 16%, 96%)",
      veryLightGray: " hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      sans: ["Public sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
