/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px",
        md: "0 2px 4px",
        lg: "0 8px 16px",
      },
      backgroundImage: {
        hero3: "url('/src/images/hero3.jpeg')",
        woodBlack: "url('/src/colors/Black.png')",
        woodDarkCoffee: "url('/src/colors/DarkCoffee.png')",
        woodGreen: "url('/src/colors/Green.png')",
        woodLightCoffee: "url('/src/colors/LightCoffee.png')",
        woodLightGrey: "url('/src/colors/LightGrey.png')",
        woodMaple: "url('/src/colors/Maple.png')",
        woodReddishBrown: "url('/src/colors/ReddishBrown.png')",
        woodRosewood: "url('/src/colors/Rosewood.png')",
        woodSandyBrown: "url('/src/colors/SandyBrown.png')",
        aboutBg: "url('/src/images/about.jpeg')",
        woodTeak: "url('/src/colors/Teak.png')",
      },
      colors: {
        cardBg: "rgba(255,255,255,0.7)",
        cardBg2: "rgba(0,0,0,0.7)",
        cardBg3: "rgba(0,0,0,0.55)",
        bgShape: "linear-gradient(45deg,pink,puple)",
        background: "#35414c",
        background2: "#13294B",
      },
    },
  },
  plugins: [],
};
