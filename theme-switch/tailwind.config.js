/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        custom_green: "#75AF22",
        custom_green_hover: "#8AD128",
        customLightGray: '#353535',
        customDarkGray: '#202124',
        customBlack: '#171717',
        rolexGreen: '#1E784B',
      },
    },

  },
  plugins: [],
}

