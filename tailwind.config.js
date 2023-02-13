/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFF",
        primaryText: "#373636",
        secondary: "#FAC447",
        secondaryText: "#A10C1B",
        accent: "#A1A1A1",
        neutral: "#7ECCFF",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#A10C1B",
        error: "#FE5F60",
        backDrop: "#91951B",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        spaceMono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
