/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "inter-font": ["Inter", "sans-serif"],
      },

      colors: {
        "unactive-link": "rgba(0, 0, 0, 0.285)",
      },

      width: {
        "w-paragraph": "500px",
        "w-card": "310px",
      },

      padding: {
        "p-card": "10px 10px 20px 10px",
      },

      boxShadow: {
        "shadow-card": "box-shadow: 0px 4px 4px rgb(0 0 0 / 0.25)",
      },

      translate: {
        "left-50": "50px",
        "right-50": -"50px",
      },
    },
  },
  plugins: [],
};
