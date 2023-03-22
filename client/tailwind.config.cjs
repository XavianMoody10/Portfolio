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
      },
    },
  },
  plugins: [],
};
