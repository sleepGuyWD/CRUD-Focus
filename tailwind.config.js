/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.js",
    './views/*.ejs',
    './*.html',

],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
