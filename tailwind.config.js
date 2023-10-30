/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/images/hero.jpeg')",
        woodBlack: "url('/src/colors/Black.png')",
        woodDarkCoffee: "url('/src/colors/DarkCoffee.png')",
        woodGreen: "url('/src/colors/Green.png')",
        woodLightCoffee: "url('/src/colors/LightCoffee.png')",
        woodLightGrey: "url('/src/colors/LightGrey.png')",
        woodMaple: "url('/src/colors/Maple.png')",
        woodReddishBrown: "url('/src/colors/ReddishBrown.png')",
        woodRosewood: "url('/src/colors/Rosewood.png')",
        woodSandyBrown: "url('/src/colors/SandyBrown.png')",
        woodTeak: "url('/src/colors/Teak.png')",
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

