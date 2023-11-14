import pic1 from "../../images/WPC Cap.png";
import pic2 from "../../images/alumBottom.png";
import pic3 from "../../images/ironFastner.png";
import pic4 from "../../images/WPC Post 100x100.png";
import pic5 from "../../images/WPC Board.png";
import pic6 from "../../images/alumTopCover.png";
import pic7 from "../../images/WPC Set.png";
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
  "Meтална основа",
  "WPC Капачка ",
  "Alum Начална Лайсна Alcona ",
  "Alum Завършваща Лайсна Alcona",
];
const prices = [0, 29.99, 1, 49.99, 7.99, 14.99, 17.99];

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
  const [imageIndex, setImageIndex] = useState(0);
  const [kolCount, setKolCount] = useState(36.99);

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

  useEffect(() => {}, [imageIndex]);

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

  const [itemColor, setItemColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let cartPrice;

    if (imageIndex === 2) {
      cartPrice = Math.ceil(prices[imageIndex] * count * kolCount);
    } else {
      cartPrice = Math.ceil(prices[imageIndex] * count);
    }

    const item = {
      itemName: titles[imageIndex],
      count: count,
      itemType: "element",
      src: images[imageIndex],
      id: uniqid(),
      price: cartPrice,
      color: itemColor,
    };
    console.log(cartItems);
    const newList = [...cartItems];
    setCartItems([...newList, item]);
    setCount(1);
    setItemColor("");
    setIsPopupOpen(true);
  };

  useEffect(() => {
    if (count > 0) {
      setInvalid(false);
    } else {
      setInvalid(true);
    }
  }, [count]);

  useEffect(() => {
    if (imageIndex === 1) {
      setInvalid(true);
    }
  }, [imageIndex]);

  const validateItemColor = (e) => {
    if (e.target.value === "") {
      setInvalid(true);
      return false;
    } else {
      setInvalid(false);
      setItemColor(e.target.value);
      return true;
    }
  };

  return (
    <div className="w-full max-w-[1400px] my-4 flex justify-center flex-col items-center">
      <h1 className="text-3xl w-min mt-8 text-center font-semibold border-b-4 px-4 border-footer">
        Отделни продукти
      </h1>
      <div
        id="products"
        className="flex w-[90%] bg-no-repeat bg-center bg-contain bg-carosel min-h-[70vh] py-4 flex-col md:flex-row justify-between items-center max-w-[1400px]"
      >
        <section
          aria-label="Image Slider"
          className="w-full h-[50vh]  sm:max-w-[50vh] relative"
        >
          <div className="w-full h-full flex overflow-hidden">
            {IMAGES.map((item, index) => (
              <div key={uniqid()} className="w-full h-full shrink-0 grow-0">
                <img
                  loading="lazy"
                  src={item.url}
                  alt={item.alt}
                  aria-hidden={imageIndex !== index}
                  className="img-slider-img backdrop-blur-sm shadow-md border w-full h-full rounded-xl"
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
              size={32}
              aria-hidden
              className="bg-black rounded-md"
            />
          </button>
          <button
            onClick={showNextImage}
            className="img-slider-btn"
            style={{ right: 0, color: "white" }}
            aria-label="View Next Image"
          >
            <AiOutlineArrowRight
              className="bg-black rounded-md"
              aria-hidden
              size={32}
            />
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

        <form className="md:w-[30%] text-center min-h-[70vh] w-[80%] flex flex-col justify-evenly items-center">
          <h1 className="text-2xl font-semibold">{titles[imageIndex]}</h1>
          <p className="text-md bg-cardBg p-4 rounded-md backdrop-blur-md">
            {descriptions[imageIndex]}
          </p>
          {imageIndex !== 0 ? (
            <>
              <div className="flex bg-cardBg backdrop-blur-xl p-3 rounded-md">
                <label className={invalid && "text-red-500 font-bold text-lg"}>
                  Изберете цвят:{" "}
                </label>
                <select required onChange={(e) => validateItemColor(e)}>
                  <option disabled selected value=""></option>
                  <option value="Rosewood">Rosewood</option>
                  <option value="Maple">Maple</option>
                  <option value="Reddish Brown">Reddish Brown</option>
                  <option value="Teak">Teak</option>
                  <option value="Sandy Brown">Sandy Brown</option>
                  <option value="Dark Coffee">Dark Coffee</option>
                  <option value="Light Coffee">Light Coffee</option>
                  <option value="Light Grey">Light Grey</option>
                  <option value="Black">Black</option>
                  <option value="Green">Green</option>
                </select>
              </div>
              <div className="flex flex-col justify-center items-center w-11/12 h-11/12">
                {invalid ? (
                  <label className="text-red-500 text-lg font-semibold">
                    {imageIndex !== 1 && "Изберете число по-голямо от 0"}
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
              {imageIndex === 2 && (
                <div className="flex gap-2 flex-wrap items-center justify-center p-4">
                  <button
                    className="rounded-lg py-2 px-6 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
                    type="button"
                    onClick={() => setKolCount(36.99)}
                  >
                    1.00 м.
                  </button>
                  <button
                    className="rounded-lg py-2 px-6 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
                    type="button"
                    onClick={() => setKolCount(69.99)}
                  >
                    1.90 м.
                  </button>
                  <button
                    className="rounded-lg py-2 px-6 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
                    type="button"
                    onClick={() => setKolCount(99.99)}
                  >
                    2.70 м.
                  </button>
                  <button
                    className="rounded-lg py-2 px-6 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
                    type="button"
                    onClick={() => setKolCount(102.99)}
                  >
                    2.80 м.
                  </button>
                </div>
              )}
              {imageIndex !== 2 ? (
                <h1 className="text-2xl font-semibold">
                  {(prices[imageIndex] * count).toFixed(2)} BGN
                </h1>
              ) : (
                <h1 className="text-2xl font-semibold">
                  {(prices[imageIndex] * count * kolCount).toFixed(2)} BGN
                </h1>
              )}
              <button
                disabled={invalid}
                onClick={handleSubmit}
                className="rounded-lg py-2 px-6 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
              >
                Добави в количка
              </button>
            </>
          ) : (
            <h1 className="text-3xl font-bold border-b-4 border-footer px-3">
              Цени от 133лв./кв.м.
            </h1>
          )}
        </form>
      </div>
    </div>
  );
};
