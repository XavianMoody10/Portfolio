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

      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #ffffff 0%, #0f2027 0.01%, #203a43 48.23%, #2c5364 100%)",
      },
    },
  },
  plugins: [],
};
