import { downloadImage } from "../components/About";
import hero3 from "../images/hero3.jpeg";
import line from "../images/llline2.svg";

const Hero = () => {
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
      className="w-full scroll-mt-[20px] mt-[15px] relative min-h-[60vh] text-center flex flex-col justify-center items-center"
    >
      <img
        src={hero3}
        alt="hero"
        className="absolute blur-sm w-full object-right max-w-[2560px] ml-auto h-full object-cover"
      />
      <span className="absolute w-full max-w-[2560px] h-full bg-black1 opacity-50"></span>
      <section className="w-[90%] text-left max-w-[1400px] z-40 text-white h-full flex flex-col justify-center items-start gap-5">
        <h1 className="text-h2clamp leading-tight font-bold">
          Вдъхновяващи <span className="text-orange-400">решения</span> за вашия
          дом и{" "}
          <span className="z-30 relative inline-block">
            <p className="inline">градина </p>
            <img
              src={line}
              alt="title drawing"
              className="absolute top-[-5px] md:top-[-15px] left-0 z-0"
            />
          </span>
        </h1>
        <h2 className="text-labelClamp md:mt-5 md:w-[60%] text-gray-200">
          Добре дошли в Alcona Solutions, вашата врата към изисканите парапети и
          огради от луксозен материал. Подобрете вашия екстериор с нашата
          премиум колекция.
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <button
            onClick={handleContactScroll}
            className="flex-1 w-full rounded-lg border-2 border-orange-400 hover:border-orange-500 mt-2 py-2 px-6 self-start font-bold duration-500 text-lg hover:bg-orange-500 bg-orange-400 text-white"
          >
            Свържете се с нас
          </button>
          <button
            onClick={downloadImage}
            className="flex-1 w-full whitespace-nowrap rounded-lg text-lg mt-2 py-2 px-6 self-start font-bold duration-500 
            border-2 border-orange-400 text-white hover:bg-orange-400 bg-transparent "
          >
            Инструкции за монтаж
          </button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
