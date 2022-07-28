/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Helvetica Neue"],
      },
      colors: {
        "highlight-inactive": "#96989D",
        "highlight-active": "#42454C",
        "shade-lightest": "#42454C",
        "shade-lighter": "#36393F",
        "shade-base": "#2F3136",
        "shade-darker": "#292B2F",
        "shade-darkest": "#202225",
      },
    },
  },
  plugins: [],
};
