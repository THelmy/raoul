/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        zinc: {
          800: '#27272a',
          900: '#18181b',
        },
      },
      minWidth: {
        screen: '320px', // Minimum width for typical mobile phones
      },
    },
  },
  plugins: [],
};