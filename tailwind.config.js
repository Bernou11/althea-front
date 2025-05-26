/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // <--- this is most important!
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['"Comfortaa"', 'cursive']
      },
      screens: {
        'am' : {'min' : '769px', 'max' : '827px'}
      }
    }
  },
  plugins: [],
}