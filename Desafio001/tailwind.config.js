/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
      ,
      //aqui eu configuro como eu quero deixando entre aspas
      colors: {
        BlackGray: '#b4b4b4',

      },

      fontSize: {
        '2xs': '0.5rem',
        '3xs': '0.25rem',
        '4xs': '0.125rem',
        'extraLarge': '2.5rem',
      },
      fontFamily: {
        nototai: ['"Noto Sans Tai Le"', 'sans-serif'],
        
      }
    },
    
  },
  plugins: [],
}

