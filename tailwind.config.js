/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#FEC544',
      },
      backgroundImage: {
        'picture': "url('/src/assets/background.jpg')",
      },
    },
  },
  plugins: [],
}
