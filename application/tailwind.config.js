/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        '1000': '1000px'
      },
      lineHeight: {
        '18': '18px',
      },
      opacity: {
        '54': '.54'
      },
      colors: {
        grey: {
          100: "#141414",
          90: "#191919",
          80: "#1E1E1E",
          70: "#232323",
          60: "#282828",
          50: "#2D2D2D",
          40: "#323232",
          30: "#373737",
          20: "#3C3C3C",
          10: "#414141",
        },
      },
      fontFamily: {
        Glysa: ['Glysa', 'sans-serif'],
        Lexend: ['Lexend', 'serif'],
      },
    },
  },
  plugins: [],
}
