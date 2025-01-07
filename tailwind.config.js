/** @type {import('tailwindcss').Config} */
import lineCamp from '@tailwindcss/line-clamp'
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'addCampbg': "url('./src/assets/b4.jpg')",
        'login-bg': "url('/src/assets/login.svg')",
      }
    },
  },
   plugins: [
    daisyui,
    lineCamp
   ,
  ],
  daisyui: {
    themes: ["light", "dark"], // Default themes
  },
}