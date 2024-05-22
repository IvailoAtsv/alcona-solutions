/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      display: ["group-hover"],
      textShadow: {
        sm: "0 1px 2px",
        md: "0 2px 4px",
        lg: "0 8px 16px",
      },
      fontSize: {
        h1clamp: "clamp(2.5rem, 5.2vw, 6rem)",
        h2clamp: "clamp(2rem, 4.5vw, 4rem)",
        h3clamp: "clamp(1.5rem, 3vw, 3rem)",
        labelClamp: "clamp(1.3rem, 1.8vw, 2.3rem)",
        iconClamp: "clamp(4em, 10vw, 13rem)",
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
        carosel: "url('/src/images/fullLogo.png')",
      },
      colors: {
        black1: "#000",
        black: "rgb(75 85 99)",
        accent: "#e88504",
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
