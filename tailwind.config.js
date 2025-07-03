// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/js/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ECD4EA",
        secondary: "#A987A8",
        accent: "#693B69",
        deep: "#511F52",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")], 
};
