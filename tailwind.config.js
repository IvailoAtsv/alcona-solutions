/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      display: ["group-hover"],
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
        pen: "url('/src/images/pen.jpg')",
      },
      colors: {
        gold: "#ffda9e",
        cardBg: "rgba(255,255,255,0.7)",
        cardBg22: "rgba(255,255,255,0.4)",
        cardBg2: "rgba(0,0,0,0.4)",
        popupBg: "rgba(0,0,0,0.2)",
        cardBg3: "rgba(0,0,0,0.4)",
        cardBg4: "rgba(0,0,0,0.7)",
        bgShape: "linear-gradient(45deg,pink,puple)",
        background: "#202A44",
        footer: "#342E37",
        background2: "#FFE4C4",
      },
    },
  },
  plugins: [],
};

//office@alcona-solutions.com
