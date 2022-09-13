/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.tsx',
    './containers/**/*.tsx',
    './pages/**/*.tsx',
    './features/**/*.tsx'
  ],
  theme: {
    container: {
      screens: {
        sm: '320px',
        md: '640px',
        lg: '768px',
        xl: '984px',
        '2xl': '1024px'
      }
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        mindaro: '#DBFE87',
        jasmine: '#FFE381',
        misty: '#CEC288',
        gray: '#6F8695',
        blue: '#1C448E',
      }
    }
  },
  plugins: []
};
