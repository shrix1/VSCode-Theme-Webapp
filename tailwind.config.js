module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
          200: "#1D9B",
          100: "#57ddb0bb",
          50: "#FFB2FF",
          // #B64FC8 #EA80FC
        },
      },
    },
  },
  plugins: [],
};
