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
      className="w-full relative min-h-[80vh] md:min-h-[60vh] text-center flex flex-col justify-center items-center"
    >
      <img
        src={hero3}
        alt="hero"
        className="absolute w-full object-right max-w-[1920px] ml-auto h-full object-cover"
      />
      <span className="absolute w-full max-w-[1920px] h-full bg-black1 opacity-50"></span>
      <section className="w-[90%] text-left max-w-[1400px] z-10 text-white h-full flex flex-col justify-center items-start gap-5">
        <h1 className="text-h2clamp leading-tight font-bold">
          Вдъхновяващи <span className="text-orange-400">решения</span> за вашия
          дом и{" "}
          <span className="relative inline-block">
            <p className="inline">градина </p>
            <img
              src={line}
              alt="title drawing"
              className="absolute top-[-5px] left-0 z-10"
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
            className="rounded-lg border-2 border-orange-400 hover:border-orange-500 mt-2 py-2 px-6 self-start font-bold duration-500  hover:bg-orange-500 bg-orange-400 text-white"
          >
            Свържете се с нас
          </button>
          <button
            onClick={downloadImage}
            className="rounded-lg mt-2 py-2 px-6 self-start font-bold duration-500 
            border-2 border-orange-400 text-white hover:bg-orange-400 bg-transparent "
          >
            Изтеглете инструкции за монтаж
          </button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
