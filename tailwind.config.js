/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/images/hero.jpeg')"
      },
      colors: {
        cardBg: 'rgba(255,255,255,0.7)',
        background: '#35414c',
        background2: '#13294B'
      },
    },
  },
  plugins: [],
}

