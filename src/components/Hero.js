import { useSpring, animated } from "react-spring";
import logo from "../images/logo.png";
import hero3 from "../images/hero3.jpeg";
import line from "../images/llline2.svg";

const Hero = () => {
  const leftAnimation = useSpring({
    from: { opacity: 1, transform: "translateX(-0%)" },
    to: { opacity: 1, transform: "translateX(0%)" },
    config: { tension: 100, friction: 20 }, // Adjust these values for animation behavior
    delay: 100, // Delay for the left element animation
  });

  const rightAnimation = useSpring({
    from: { opacity: 1, transform: "translateX(0%)" },
    to: { opacity: 1, transform: "translateX(0%)" },
    config: { tension: 100, friction: 20 }, // Adjust these values for animation behavior
    delay: 100, // Delay for the right element animation
  });

  const handleContactScroll = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  //
  return (
    <main
      id="hero"
      className="w-full relative min-h-[65vh] md:min-h-[50vh] text-center flex flex-col justify-center items-center"
    >
      <img
        src={hero3}
        className="absolute w-full object-right max-w-[1920px] ml-auto h-full object-cover"
      />
      <span className="absolute w-full max-w-[1920px] h-full bg-black opacity-50"></span>
      <section className="w-[90%] text-left max-w-[1400px] z-10 text-white h-full flex flex-col justify-center items-start gap-3">
        <h1 className="text-h2clamp font-semibold">
          Перфектната <span className="text-orange-400">ограда</span> за
          мечтаната{" "}
          <span className="relative">
            <p className="inline">визия</p>
            <img src={line} className="absolute top-0 left-0 z-10" />
          </span>
        </h1>
        <h2 className="text-labelClamp text-gray-200">
          Лесно сглобяеми WPC огради
        </h2>
        <button
          onClick={handleContactScroll}
          className="rounded-lg mt-2 py-3 px-6 self-start font-bold duration-500 hover:text-orange-400 hover:bg-white bg-orange-400 text-white"
        >
          Свържете се с нас
        </button>
      </section>
    </main>
  );
};

export default Hero;
