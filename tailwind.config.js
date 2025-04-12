/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: ["./src/**/*.{astro,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          slideInRight: {
            '0%': { opacity: '0', transform: 'translateX(50px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          slideInLeft: {
            '0%': { opacity: '0', transform: 'translateX(-50px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
        },
        animation: {
          fadeIn: 'fadeIn 1s ease-out forwards',
          slideInRight: 'slideInRight 1s ease-out forwards',
          slideInLeft: 'slideInLeft 1s ease-out forwards',
        },
      },
    },
    plugins: [],
  }
  