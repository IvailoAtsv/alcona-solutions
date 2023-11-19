import pic1 from "../../images/WPC Cap.png";
import pic2 from "../../images/alumBottom.png";
import pic3 from "../../images/ironFastner.png";
import pic4 from "../../images/WPC Post 100x100.png";
import pic5 from "../../images/WPC Board.png";
import pic6 from "../../images/alumTopCover.png";
import pic7 from "../../images/WPC Set.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import uniqid from "uniqid";
import { useSpring, animated } from 'react-spring';
import { useEffect, useState, useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./image-slider.css";

const premium = ["Teak", "Light Grey", "Green", "Rosewood"];

const titles = [
  "WPC Оградно пано Alcona Standard (180x180cm) Цвят Black Antracid",
  "WPC Съставна дъска Alcona (160x1800mm) ",
  "WPC Стълб Alcona (100x100mm)",
  "Meтална основа",
  "WPC Капачка ",
  "Alum Начална Лайсна Alcona ",
  "Alum TOP Завършваща Лайсна Alcona",
];
const prices = [0, 29.99, 1, 49.99, 7.99, 14.99, 17.99];

const images = [pic7, pic5, pic4, pic3, pic1, pic2, pic6];

const descriptions = [
  "Оградното пано Alcona Standard от WPC (180x180см) се предлага в четири основни и четири висококачествени цвята. Комплектът включва всичко необходимо за сглобяването на паното включиелно крепежите.",
  "WPC Дъските Alcona от WPC са налични в 8 различни дължини, вариращи от 66 до 186 сантиметра и с дебелина на дъската от 20мм. В зависимост от Вашите изисквания, можете да създадете разнообразни оградни пана с размери от 68х62 см до ВхШ 186х201.5 см.",
  "WPC оградният стълб Alcona от има квадратно сечение (100x100мм) и може да бъде изработен в дължина, която отговаря на Вашите специфични изисквания, варираща от 60 до 210 сантиметра. ",
  "Стълбът от метал е създаден с профил от 50х50 мм и височина от 750 мм, предназначен да поддържа теглото на оградата. Той разполага с по-широка основа, предназначена за монтаж директно върху бетон чрез използването на анкерни болтове.",
  "Капачката от WPC с вътрешен диаметър 100х100мм ,проектирана специално за оградните стълбове WPC Alcona, с цел подобряване на визуалния дизайн и предпазване от проникване на вода в стълба.",
  "Началната Bottom лайсна Alcona направена изцяло от алуминий е проектирана както с оглед на устойчивост към различни атмосферни условия така за лесно и качествено монтиране и предоставяйки естетично завършен вид.",
  "Alum TOP Завършваща Лайсна Alcona TOP лайсна Alcona не служи само за придаване на красив завършек на цялата оградна система, но и за предотвратяване на проникването на вода по улеите на оградата, с цел осигуряване на възможно най-дълга експлоатация.",
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

  const [itemColor, setItemColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let cartPrice;

    if (imageIndex === 2) {
      cartPrice = (prices[imageIndex] * count * kolCount).toFixed(2);
    } else {
      cartPrice = (prices[imageIndex] * count).toFixed(2);
    }

    const item = {
      itemName: titles[imageIndex],
      count: count,
      itemType: "element",
      src: images[imageIndex],
      id: uniqid(),
      price: Number(cartPrice),
      color: itemColor,
    };
    if (imageIndex == 1) {
      if (premium.includes(item.color)) {
        item.price = (cartPrice * 1.44).toFixed(2);
      }
    }
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

  const [colorValid, setColorValid] = useState(false);

  const validateItemColor = (e) => {
    if (e.target.value === "") {
      setColorValid(false);
      return false;
    } else {
      setColorValid(true);
      setItemColor(e.target.value);
      return true;
    }
  };
  useEffect(() => {
    if (imageIndex === 1) {
      setInvalid(false);
    }
    if (imageIndex === 1 && !colorValid) {
      setColorValid(false);
    } else if (count < 1) {
      setInvalid(true);
    }
  }, [imageIndex]);

  const caroselRef = useRef(null);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };

  const [isVisible, setIsVisible] = useState(false);

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // When the component enters the viewport
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (caroselRef.current) {
      observer.observe(caroselRef.current);
    }

    return () => {
      if (caroselRef.current) {
        observer.unobserve(caroselRef.current);
      }
    };
  }, [caroselRef, options]);

  const slideAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0%)' : 'translateX(-20px)',
    config: { tension: 100, friction: 20 },
    immediate: !isVisible,
  });
  return (
    <animated.div ref={caroselRef} style={{
      opacity: slideAnimation.opacity,
      transform: slideAnimation.transform,
    }} className="w-[full] max-w-[1400px] my-4 flex justify-center flex-col items-center">
      <h1 className="text-3xl w-min mt-8 text-center font-semibold border-b-4 px-4 border-footer">
        Отделни продукти
      </h1>
      <div
        id="products"
        className="flex w-[90%] bg-no-repeat bg-center bg-contain min-h-[70vh] py-4 flex-col md:flex-row justify-evenly items-center max-w-[1400px]"
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
                  className="img-slider-img bg-white shadow-md border w-full h-full rounded-xl"
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
          <p className="text-sm text-left w-full bg-cardBg p-4 rounded-md backdrop-blur-md">
            {descriptions[imageIndex]}
          </p>
          {imageIndex !== 0 ? (
            <>
              <div className="flex bg-cardBg backdrop-blur-xl p-3 rounded-md">
                {imageIndex === 1 && (
                  <>
                    {" "}
                    <label
                      className={
                        invalid ? "text-red-500 font-bold text-lg" : ""
                      }
                    >
                      Изберете цвят:{" "}
                    </label>
                    <select required onChange={(e) => validateItemColor(e)}>
                      <option disabled value=""></option>
                      <option defaultValue="Rosewood">Rosewood</option>
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
                  </>
                )}
              </div>
              <div className="flex flex-col justify-center items-center ">
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
                <div className="flex gap-2 w-full flex-wrap items-center justify-center p-4">
                  <button
                    className="rounded-lg py-2 px-2 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
                    type="button"
                    onClick={() => setKolCount(36.99)}
                  >
                    1.00 м.
                  </button>
                  <button
                    className="rounded-lg py-2 px-2 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
                    type="button"
                    onClick={() => setKolCount(69.99)}
                  >
                    1.90 м.
                  </button>
                  <button
                    className="rounded-lg py-2 px-2 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
                    type="button"
                    onClick={() => setKolCount(99.99)}
                  >
                    2.70 м.
                  </button>
                  <button
                    className="rounded-lg py-2 px-2 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
                    type="button"
                    onClick={() => setKolCount(102.99)}
                  >
                    2.80 м.
                  </button>
                </div>
              )}
              {imageIndex !== 2 && imageIndex !== 1 && (
                <h1 className="text-2xl font-semibold">
                  {(prices[imageIndex] * count).toFixed(2)} BGN
                </h1>
              )}
              {imageIndex === 2 && (
                <h1 className="text-2xl font-semibold">
                  {(prices[imageIndex] * count * kolCount).toFixed(2)} BGN
                </h1>
              )}
              {imageIndex === 1 && (
                <>
                  {premium.includes(itemColor) ? (
                    <h1 className="text-2xl font-semibold">
                      {(prices[imageIndex] * count * 1.44).toFixed(2)} BGN
                    </h1>
                  ) : (
                    <h1 className="text-2xl font-semibold">
                      {(prices[imageIndex] * count).toFixed(2)} BGN
                    </h1>
                  )}
                </>
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
    </animated.div>
  );
};
