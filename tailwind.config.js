module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      //custom ui related stuffs (dont delete it)
      fontFamily: {
        pop: "'Poppins',serif",
        space: "'Space Grotesk',serif",
      },
      colors: {
        mainbl: {
          300: "#121212",
          200: "#2C2F34",
          100: "#606368",
          50: "#BBBFC4",
        },
        mainpp: {
          200: "#B64FC8",
          100: "#EA80FC",
          50: "#FFB2FF",
        },
      },
    },
  },
  plugins: [],
};
