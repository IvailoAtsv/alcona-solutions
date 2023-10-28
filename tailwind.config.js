/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/images/hero.jpg')"
      },
      colors: {
        background: '#35414c',
        background2: '#13294B'
      },
    },
  },
  plugins: [],
}

