import { useSpring, animated } from 'react-spring';
import logo from "../images/logo.png";
import logoFull from "../images/fullLogo.png";

const Hero = () => {
  const leftAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-10%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    config: { tension: 100, friction: 20 }, // Adjust these values for animation behavior
    delay: 100, // Delay for the left element animation
  });

  const rightAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(10%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    config: { tension: 100, friction: 20 }, // Adjust these values for animation behavior
    delay: 100, // Delay for the right element animation
  });

  const handleContactScroll = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="hero" className="w-full text-center flex bg-no-repeat bg-right-bottom sm:mt-0 my-10 bg-fixed bg-cover justify-center items-center bg-hero3 h-[80vh]">
      <div className="w-full max-w-[1400px] sm:w-[90%] h-full sm:h-11/12 sm:flex-row flex flex-col-reverse md:justify-between justify-evenly items-center gap-4">
        <animated.div
          className="flex backdrop-blur-md min-w-[250px] text-start sm:w-[30%] w-[90%] sm:max-w-[450px] h-auto min-h-[60%] gap-2 rounded-xl items-start p-4 bg-cardBg flex-col justify-evenly"
          style={leftAnimation}
        >
          <img className="w-24" src={logo} alt="Logo" />
          <h1 className="text-2xl font-bold">
            Вдъхновяващи решения за вашия дом и градина
          </h1>
          <p>
            Добре дошли в Alcona Solutions, вашата врата към изисканите парапети и огради от луксозен материал. Подобрете вашия екстериор с нашата премиум колекция.
          </p>
          <button
            onClick={handleContactScroll}
            className="rounded-lg py-2 px-6 border-4 self-start font-bold duration-500 border-black hover:bg-black hover:text-white"
          >
            Contact us
          </button>
        </animated.div>
        <animated.img
          src={logoFull}
          className="sm:w-[50%] w-[90%] sm:mb-36 sm:mt-0 sm:pb-0 sm:pr-0 md:max-w-[450px] max-h-[250px]"
          alt="Full Logo"
          style={rightAnimation}
        />
      </div>
    </div>
  );
};

export default Hero;