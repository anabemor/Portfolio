/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./Portfolio/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        base: 'rgba(31,41,55,0.8)', // gris oscuro translúcido
        accent: '#2563eb',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}
