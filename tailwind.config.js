/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        titan: ['"Titan One"', 'cursive'], // add Titan One as "font-display"
        spartan: ['"League Spartan"', 'sans-serif'],
        sans: ['"League Spartan"', 'ui-sans-serif', 'system-ui'], // override default
      },
      animation: {
        bounce: 'bounce 1.5s infinite',
      },
      transitionTimingFunction: {
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};