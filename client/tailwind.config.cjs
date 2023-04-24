/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        georama: ["Georama", "sans-serif"],
      },

      backgroundColor: {
        "custom-blue": "#203A43",
      },

      borderColor: {
        "custom-gray": "#5D8496",
      },
    },
  },
  plugins: [],
};
