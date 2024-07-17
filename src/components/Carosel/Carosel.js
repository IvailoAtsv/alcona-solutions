import pic1 from "../../images/WPC Cap.png";
import pic2 from "../../images/alumBottom.png";
import pic3 from "../../images/ironFastner.png";
import pic4 from "../../images/WPC Post 100x100.png";
import pic5 from "../../images/WPC Board.png";
import pic6 from "../../images/alumTopCover.png";
import pic7 from "../../images/WPC Set.png";
import uniqid from "uniqid";
import { useEffect, useState } from "react";
import "./image-slider.css";

const premium = ["Teak", "Light Grey", "Green", "Rosewood"];

const items = [
  {
    title: "WPC Оградно пано Alcona Standard (180x180cm) Цвят Black Antracid",
    price: 0,
    image: { url: pic7, alt: "Panel" },
    description:
      "Оградното пано Alcona Standard от WPC (180x180см) се предлага в четири основни и четири висококачествени цвята. Комплектът включва всичко необходимо за сглобяването на паното включително крепежите.",
  },
  {
    title: "WPC Съставна дъска Alcona (160x1800mm)",
    price: 29.99 / 1.2,
    image: { url: pic5, alt: "dyska" },
    description:
      "WPC Дъските Alcona от WPC са налични в 8 различни дължини, вариращи от 66 до 186 сантиметра и с дебелина на дъската от 20мм. В зависимост от Вашите изисквания, можете да създадете разнообразни оградни пана с размери от 68х62 см до ВхШ 186х201.5 см.",
  },
  {
    title: "WPC Стълб Alcona (100x100mm)",
    price: 1,
    image: { url: pic4, alt: "kol" },
    description:
      "WPC оградният стълб Alcona от има квадратно сечение (100x100мм) и може да бъде изработен в дължина, която отговаря на Вашите специфични изисквания, варираща от 60 до 210 сантиметра.",
  },
  {
    title: "Метална основа",
    price: 49.99 / 1.2,
    image: { url: pic3, alt: "osnova" },
    description:
      "Стълбът от метал е създаден с профил от 50х50 мм и височина от 750 мм, предназначен да поддържа теглото на оградата. Той разполага с по-широка основа, предназначена за монтаж директно върху бетон чрез използването на анкерни болтове.",
  },
  {
    title: "WPC Капачка",
    price: 7.99 / 1.2,
    image: { url: pic1, alt: "shapka" },
    description:
      "Капачката от WPC с вътрешен диаметър 100x100мм ,проектирана специално за оградните стълбове WPC Alcona, с цел подобряване на визуалния дизайн и предпазване от проникване на вода в стълба.",
  },
  {
    title: "Alum Начална лайстна Alcona",
    price: 26.99,
    image: { url: pic2, alt: "dolna" },
    description:
      "Началната Bottom лайстна Alcona направена изцяло от алуминий е проектирана както с оглед на устойчивост към различни атмосферни условия така за лесно и качествено монтиране и предоставяйки естетично завършен вид.",
  },
  {
    title: "Alum TOP Завършваща лайстна Alcona",
    price: 26.99,
    image: { url: pic6, alt: "gorna" },
    description:
      "Alum TOP Завършваща лайстна Alcona TOP лайстна Alcona не служи само за придаване на красив завършек на цялата оградна система, но и за предотвратяване на проникването на вода по улеите на оградата, с цел осигуряване на възможно най-дълга експлоатация.",
  },
  {
    title: "Розетка за WPC стълб 100х100мм",
    price: 9.13,
    image: { url: "path_to_image", alt: "rozeta" },
    description:
      "Завършваща розетка за WPC стълб Alcona с вътрешни размери 100х100мм.",
  },
  {
    title: "Алуминиев Дистанционер за ограда 3 см",
    price: 2.25,
    image: { url: "path_to_image", alt: "distancer" },
    description:
      "Алуминие дистанционер за ограда тип фермерски стил. Цената е за брой.",
  },
  {
    title:
      "Цвят ТИК Premium Decking Дъска Дървесна шарка /размери 2900х140х2.5 мм/",
    price: 48.78,
    image: { url: "path_to_image", alt: "decking_tik" },
    description:
      "Високо качествена Декинг дъска съставена от композит не WPC Пластмаса и Дърво с 10 години гаранция за качество. Шестте кръгли отвора я отличават от останалите декинг дъски с четири квадратни отвора на пазара, с два пъти по-голямата плътност и издръжливост. Всяка дъска е с размери 2900х140х25 мм като за един квадратен метър настилка са необходими 2.46 броя дъски.",
  },
  {
    title:
      "Цвят ЧЕРЕН АНТРАЦИД Premium Decking Дъска Дървесна шарка /размери 2900х140х2.5 мм/",
    price: 48.78,
    image: { url: "path_to_image", alt: "decking_antracid" },
    description:
      "Високо качествена Декинг дъска съставена от композит не WPC Пластмаса и Дърво с 10 години гаранция за качество. Шестте кръгли отвора я отличават от останалите декинг дъски с четири квадратни отвора на пазара, с два пъти по-голямата плътност и издръжливост. Всяка дъска е с размери 2900х140х25 мм като за един квадратен метър настилка са необходими 2.46 броя дъски.",
  },
  {
    title: "Цвят ТИК Завършващи ъгли за Decking /размери 2900х41х41 мм/",
    price: 9.2,
    image: { url: "path_to_image", alt: "angle_tik" },
    description: "Завършващи ъгли за Decking с размери 2900х41х41 мм.",
  },
  {
    title:
      "ЦВЯТ ЧЕРЕН АНТРАЦИД Завършващи ъгли за Decking /размери 2900х41х41 мм/",
    price: 9.2,
    image: { url: "path_to_image", alt: "angle_antracid" },
    description: "Завършващи ъгли за Decking с размери 2900х41х41 мм.",
  },
  {
    title: "WPC клипс и винт за Decking",
    price: 0.25,
    image: { url: "path_to_image", alt: "clip" },
    description: "WPC клипс и винт за Decking. Цена за брой (20 бр в м2).",
  },
  {
    title: "Пешеходна дворна врата с пълнеж от WPC дъски 190х90",
    price: 916.66,
    image: { url: "path_to_image", alt: "gate" },
    description:
      "С включени два стълба за монтаж, брава, патрон насрещници. Металите са поцинковани и прахово боядисани по RAL.",
  },
  {
    title: "Портална плъзгаща врата",
    price: 2916,
    image: { url: "path_to_image", alt: "sliding_gate" },
    description:
      "Портална врата с пълнеж от WPC дъски на окачен количков механизъм с включени два стълба за монтаж, планки, колички, ролки за монтаж. Металите са поцинковани и прахово боядисани по RAL - Размери Дължина 3200-4200мм / 1900мм Височина.",
  },
  {
    title: "Парапет Alcona - 110 см Височина",
    price: 108.33,
    image: { url: "path_to_image", alt: "parapet" },
    description:
      "С 4 броя хоризонтални дъски, стълб и метално перило цвят по RAL (поцинкован метал / прахово боядисан) и всички болтове необходими за монтажа.",
  },
];

export const Carosel = ({
  cartItems,
  setCartItems,
  setIsPopupOpen,
  carouselIndex,
  setCarousel,
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [kolCount, setKolCount] = useState(36.99 / 1.2);

  useEffect(() => {}, [imageIndex]);

  const [count, setCount] = useState(1);
  const [invalid, setInvalid] = useState(false);
  const [itemColor, setItemColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let cartPrice;

    if (imageIndex === 2) {
      cartPrice = (items[imageIndex].price * count * kolCount).toFixed(2);
    } else {
      cartPrice = (items[imageIndex].price * count).toFixed(2);
    }

    const item = {
      itemName: items[imageIndex].title,
      count: count,
      itemType: "element",
      src: items[imageIndex].image.url,
      id: uniqid(),
      price: Number(cartPrice),
      color: itemColor,
    };
    if (imageIndex === 1) {
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

  useEffect(() => {
    setImageIndex(carouselIndex);
  }, []);

  return (
    <div className="w-[90%] max-w-[1400px] bg-white rounded-md relative py-4 my-4 flex justify-center flex-col items-center">
      <button
        onClick={() => setCarousel(null)}
        className="absolute underline top-[10px] left-[10px]"
      >
        Назад към каталог
      </button>

      <div
        id="products"
        className="flex w-[95%] gap-2 bg-no-repeat bg-center bg-contain min-h-[70vh] md:flex-row justify-evenly items-center max-w-[1400px]"
      >
        <section
          aria-label="Image Slider"
          className="w-full h-[50vh] sm:max-w-[50vh] relative"
        >
          <div className="w-full h-full flex overflow-hidden">
            {items.map((item, index) => (
              <div key={uniqid()} className="w-full h-full shrink-0 grow-0">
                <img
                  loading="lazy"
                  src={item.image.url}
                  alt={item.image.alt}
                  aria-hidden={imageIndex !== index}
                  className="img-slider-img bg-white w-full h-full rounded-xl"
                  style={{ translate: `${-100 * imageIndex}%` }}
                />
              </div>
            ))}
          </div>
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

        <form className="md:w-[30%] gap-2 text-center min-h-[70vh] w-[80%] flex flex-col justify-center lg:justify-evenly items-center">
          <h1 className="text-xl w-full font-semibold">
            {items[imageIndex].title}
          </h1>
          <p className="text-sm text-left w-[90%] bg-cardBg rounded-md backdrop-blur-md">
            {items[imageIndex].description}
          </p>
          {imageIndex !== 0 ? (
            <>
              <div className="flex justify-center gap-2 items-center flex-wrap bg-cardBg backdrop-blur-xl p-3 rounded-md">
                {imageIndex === 1 && (
                  <>
                    {" "}
                    <label
                      className={invalid ? "text-red-500 text-sm" : "text-sm"}
                    >
                      Изберете цвят:{" "}
                    </label>
                    <select
                      className="border-2 p-2 rounded-md"
                      required
                      onChange={(e) => validateItemColor(e)}
                    >
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
              <div className="flex flex-col justify-center gap-2 items-center ">
                {invalid ? (
                  <label className="text-red-500 text-lg font-semibold">
                    {imageIndex !== 1 ? "Изберете число по-голямо от 0" : ""}
                  </label>
                ) : (
                  <label className="text-lg font-semibold">Брой:</label>
                )}
                <input
                  type="number"
                  name={items[imageIndex].title}
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  required
                  className="min-w-[50px] w-[60px] h-[30px] bg-gray-200 text-xl text-center rounded-md px-2 py-1"
                />
              </div>
              {imageIndex === 2 && (
                <div className="flex gap-2 w-full flex-wrap items-center justify-center pt-2">
                  <button
                    className="rounded-lg p-1 border-2 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
                    type="button"
                    onClick={() => setKolCount(36.99 / 1.2)}
                  >
                    1.00 м.
                  </button>
                  <button
                    className="rounded-lg p-1 border-2 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
                    type="button"
                    onClick={() => setKolCount(69.99 / 1.2)}
                  >
                    1.90 м.
                  </button>
                  <button
                    className="rounded-lg p-1 border-2 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
                    type="button"
                    onClick={() => setKolCount(99.99 / 1.2)}
                  >
                    2.70 м.
                  </button>
                  <button
                    className="rounded-lg p-1 border-2 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
                    type="button"
                    onClick={() => setKolCount(102.99 / 1.2)}
                  >
                    2.80 м.
                  </button>
                </div>
              )}
              {imageIndex !== 2 && imageIndex !== 1 && (
                <>
                  <h1 className="text-2xl font-semibold">
                    {(items[imageIndex].price * count).toFixed(2)} BGN
                    <p className="text-sm opacity-35 font-extralight">
                      цена без ДДС
                    </p>
                  </h1>
                </>
              )}
              {imageIndex === 2 && (
                <h1 className="text-2xl font-semibold">
                  {(items[imageIndex].price * count * kolCount).toFixed(2)} BGN
                  <p className="text-sm opacity-35 font-extralight">
                    цена без ДДС
                  </p>
                </h1>
              )}
              {imageIndex === 1 && (
                <>
                  {premium.includes(itemColor) ? (
                    <h1 className="text-2xl font-semibold">
                      {(items[imageIndex].price * count * 1.44).toFixed(2)} BGN
                      <p className="text-sm opacity-35 font-extralight">
                        цена без ДДС
                      </p>
                    </h1>
                  ) : (
                    <h1 className="text-2xl font-semibold">
                      {(items[imageIndex].price * count).toFixed(2)} BGN
                      <p className="text-sm opacity-35 font-extralight">
                        цена без ДДС
                      </p>
                    </h1>
                  )}
                </>
              )}
              <button
                disabled={invalid}
                onClick={handleSubmit}
                className="rounded-lg text-sm py-2 px-4 border-2 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
              >
                Добави в количка
              </button>
            </>
          ) : (
            <h1 className="text-3xl font-bold border-footer p-3">
              Цени от {133 / 1.2}лв./кв.м.
            </h1>
          )}
        </form>
      </div>
    </div>
  );
};
