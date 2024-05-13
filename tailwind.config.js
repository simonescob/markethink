/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./admin/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ["Rubik", 'open sans'], 
      },
      colors: {
        'green-hero': "#395C4D",
        'green-light': "#F6FBF9",
        'green-primary': "#A3B938",
      },
    },
  },
  plugins: [],
}