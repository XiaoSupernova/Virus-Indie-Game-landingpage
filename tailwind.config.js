/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html,jsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        currentColor: "currentColor",
        primaryColor: {
          100: "#E5D2FB",
          200: "#C7A6EE",
          300: "#B88EEA",
          400: "#A571E4",
          500: "#9659E0",
          600: "#833BDA",
          700: "#7428D2",
          800: "#6422B4",
          900: "#51139D",
        },
        secondaryColor: {
          100: "#FFB2CE",
          200: "#FA82AD",
          300: "#FF6FA3",
          400: "#FC5B95",
          500: "#EF4683",
          600: "#E12A6C",
          700: "#CD1B5B",
          800: "#BD1250",
          900: "#AF0A46",
        },
        yellow: {
          100: "#F7E7BD",
          200: "#F5E0AA",
          300: "#F3D894",
          400: "#F0D080",
          500: "#EDC767",
          600: "#EBBF51",
          700: "#E9B83E",
          800: "#E6B028",
          900: "#E2A509",
        },
        white: "rgba(255, 255, 255)",
        dimWhite: "rgba(255, 255, 2550, 0.6)",
      },
      animation: {
        spin: "spin 3s linear infinite",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  plugins: [],
};
