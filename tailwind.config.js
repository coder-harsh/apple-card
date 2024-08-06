/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'cardshad': '2px 4px 12px #00000014',
      },
      backgroundColor: {
        'backgr': '#f5f5f7',
      },
      borderRadius: {
        'bordercard': '18px'
      }
    },
  },
  plugins: [

  ],
}

