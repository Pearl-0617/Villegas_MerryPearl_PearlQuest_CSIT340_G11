export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        pearl: { 50: '#f5fcff', 100: '#e8f7ff', 200: '#cceeff', 300: '#9edcff', 400: '#69c5f3', 500: '#329fd9', 600: '#217db5', 700: '#205f8b', 800: '#214d70', 900: '#203f5c' },
        ocean: '#153e63',
        gold: '#e8bd72'
      },
      boxShadow: {
        pearl: '0 18px 55px rgba(45, 130, 177, .13)',
        soft: '0 8px 28px rgba(30, 90, 130, .08)'
      }
    }
  },
  plugins: [],
}