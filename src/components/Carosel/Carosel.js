import pic1 from "../../images/plastic.jpg";
import pic2 from "../../images/bottom.jpg";
import pic3 from "../../images/kol-slice.jpg";
import pic4 from "../../images/kol.jpg";
import pic5 from "../../images/plank.jpg";
import pic6 from "../../images/top.jpg";
import pic7 from "../../images/fence2.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import uniqid from "uniqid";

import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./image-slider.css";

import {
  BsCircle,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FaRegDotCircle } from "react-icons/fa";

const titles = [
  "WPC Оградно пано Alcona Standard (180x180cm)",
  "WPC Съставна дъска Alcona (160x1800mm) ",
  "WPC Стълб Alcona (100x100mm)",
  "сечение на кол",
  "WPC Капачка ",
  "Alum Начална Лайсна Alcona ",
  "Alum Завършваща Лайсна Alcona",
];

const images = [pic7, pic5, pic4, pic3, pic1, pic2, pic6];

const descriptions = [
  "Оградното пано Alcona Standard от WPC (180x180см) се предлага в четири основни и четири висококачествени цвята.",
  "WPC Дъските Alcona от WPC са налични в шест различни дължини, вариращи от 30 до 180 сантиметра. В зависимост от Вашите изисквания, можете да създадете разнообразни оградни пана с размери от 60х60 см до ВхШ 180х210 см.",
  "WPC оградният стълб Alcona от има квадратно сечение (100x100мм) и може да бъде изработен в дължина, която отговаря на Вашите специфични изисквания, варираща от 60 до 400 сантиметра.",
  "сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол ",
  "Капачката от WPC с вътрешен диаметър ,проектиран специално за оградните стълбове WPC Alcona, с цел подобряване на визуалния дизайн и предпазване от проникване на вода в стълба.",
  "Началната лайсна Alcona направена изцяло от алуминий е проектирана както с оглед на устойчивост към различни атмосферни условия така за лесно и качествено монтиране и предоставяйки естетично завършен вид.",
  "Завършната лайсна Alcona не служи само за придаване на красив завършек на цялата оградна система, но и за предотвратяване на проникването на вода по улеите на оградата, с цел осигуряване на възможно най-дълга експлоатация.",
];

const IMAGES = [
  { url: pic7, alt: "Panel" },
  { url: pic5, alt: "dyska" },
  { url: pic4, alt: "kol" },
  { url: pic3, alt: "osnova" },
  { url: pic1, alt: "shapka" },
  { url: pic2, alt: "dolna" },
  { url: pic6, alt: "gorna" },
];

export const Carosel = ({ cartItems, setCartItems, setIsPopupOpen }) => {
  const [imageIndex, setImageIndex] = useState(1);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === IMAGES.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return IMAGES.length - 1;
      return index - 1;
    });
  }

  useEffect(() => { }, [imageIndex]);

  const [count, setCount] = useState(1);
  const [invalid, setInvalid] = useState(false);

  const increment = (e) => {
    e.preventDefault();
    setCount((count) => Number(count) + 1);
  };
  const decrement = (e) => {
    e.preventDefault();
    setCount((count) => Number(count) - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      itemName: titles[imageIndex],
      count: count,
      itemType: "element",
      src: images[imageIndex],
      id: uniqid(),
    };
    console.log(cartItems);
    const newList = [...cartItems];
    setCartItems([...newList, item]);
    setCount(1);
    setIsPopupOpen(true);
  };

  useEffect(() => {
    if (count > 0) {
      setInvalid(false);
    } else {
      setInvalid(true);
    }
  }, [count]);

  return (
    <div
      id="products"
      className="flex w-[90%] min-h-[60vh] py-4 flex-col md:flex-row justify-between items-center max-w-[1400px]"
    >
      <section
        aria-label="Image Slider"
        className="w-full h-[50vh]  sm:max-w-[50vh] relative"
      >
        <div className="w-full h-full flex overflow-hidden">
          {IMAGES.map((item, index) => (
            <div className="w-full h-full shrink-0 grow-0">
              <img
                loading="lazy"
                key={images[imageIndex + 1]}
                src={item.url}
                alt={item.alt}
                aria-hidden={imageIndex !== index}
                className="img-slider-img rounded-xl"
                style={{ translate: `${-100 * imageIndex}%` }}
              />
            </div>
          ))}
        </div>
        <button
          onClick={showPrevImage}
          className="img-slider-btn text-white"
          style={{ left: 0 }}
          aria-label="View Previous Image"
        >
          <AiOutlineArrowLeft
            className="bg-cardBg rounded-full"
            size={28}
            aria-hidden
          />
        </button>
        <button
          onClick={showNextImage}
          className="img-slider-btn"
          style={{ right: 0, color: "white" }}
          aria-label="View Next Image"
        >
          <AiOutlineArrowRight className="bg-cardBg rounded-full" aria-hidden />
        </button>
        <div
          style={{
            position: "absolute",
            bottom: ".5rem",
            left: "50%",
            translate: "-50%",
            display: "flex",
            gap: ".25rem",
          }}
        ></div>
        <div id="after-image-slider-controls" />
      </section>

      <form className="md:w-[30%] text-center min-h-[50vh] w-[80%] flex flex-col justify-evenly items-center">
        <h1 className="text-2xl font-semibold">{titles[imageIndex]}</h1>
        <p className="text-md">{descriptions[imageIndex]}</p>

        <div className="flex flex-col justify-center items-center w-11/12 h-11/12">
          {invalid ? (
            <label className="text-red-500 text-lg font-semibold">
              Изберете число по-голямо от 0
            </label>
          ) : (
            <label className="text-lg font-semibold">Брой:</label>
          )}
          <div className="flex w-full items-center justify-center gap-4">
            <button onClick={(e) => decrement(e)}>
              <AiOutlineMinus size={24} />
            </button>
            <input
              name={titles[imageIndex]}
              value={count}
              onChange={(e) => setCount(e.target.value)}
              required
              className="min-w-[50px] w-[60px] h-[30px] bg-gray-200 text-xl text-center rounded-md px-2 py-1"
            />
            <button onClick={(e) => increment(e)}>
              <AiOutlinePlus size={24} />
            </button>
          </div>
        </div>

        <button
          disabled={invalid}
          onClick={handleSubmit}
          className="rounded-lg py-2 px-6 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
        >
          Добави в количка
        </button>
      </form>
    </div>
  );
};
