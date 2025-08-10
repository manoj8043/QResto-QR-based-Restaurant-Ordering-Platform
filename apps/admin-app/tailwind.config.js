/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // adjust according to your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // add daisyUI plugin here
};
