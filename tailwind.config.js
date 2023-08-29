/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    screens: {
      'xxs': '200px',

      'xs1': '320px',

      'xs': '375px',

      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }
      'md1': '1080px',

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}

