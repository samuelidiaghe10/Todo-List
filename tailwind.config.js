/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {                           
        'Orange': 'hsl(25, 97%, 53%)',
        'Light-Grey': 'hsl(217, 12%, 63%)',
        'Dark-Blue': 'hsl(213, 19%, 18%)',
        'light-dark-blue': '#333e4d',
        'Very-Dark-Blue': 'hsl(216, 12%, 8%)',
      },

  },
  plugins: [],
}}