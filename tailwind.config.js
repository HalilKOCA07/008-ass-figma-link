const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports =  withMT({
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
	plugins: [],
  darkMode: "class"
});