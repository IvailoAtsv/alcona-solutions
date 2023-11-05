import { ImageSlider } from "./ImageSlider";
import pic1 from "../../images/plastic.jpg";
import pic2 from "../../images/bottom.jpg";
import pic3 from "../../images/kol-slice.jpg";
import pic4 from "../../images/kol.jpg";
import pic5 from "../../images/plank.jpg";
import pic6 from "../../images/top.jpg";
import pic7 from "../../images/fence2.png";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  BsCircle,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FaRegDotCircle } from "react-icons/fa";

const titles = [
  "Панел",
  "Кол ",
  "сечение на кол",
  "WPC шапка ",
  "долна алуминиева лайсна",
  "горна алуминиева лайсна",
  "Дъска",
];

const descriptions = [
  "Панел Панел Панел Панел Панел Панел Панел Панел Панел Панел Панел Панел Панел Панел Панел Панел Панел Панел Панел Панел Панел Панел Панел Панел Панел ",
  "Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол Кол ",
  "сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол сечение на кол ",
  "WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка WPC шапка ",
  "долна алуминиева лайсна долна алуминиева лайсна долна алуминиева лайсна долна алуминиева лайсна долна алуминиева лайсна долна алуминиева лайсна долна алуминиева лайсна долна алуминиева лайсна долна алуминиева лайсна долна алуминиева лайсна долна алуминиева лайсна долна алуминиева лайсна долна алуминиева лайсна долна алуминиева лайсна долна алуминиева лайсна долна алуминиева лайсна ",
  "горна алуминиева лайсна горна алуминиева лайсна горна алуминиева лайсна горна алуминиева лайсна горна алуминиева лайсна горна алуминиева лайсна горна алуминиева лайсна горна алуминиева лайсна горна алуминиева лайсна горна алуминиева лайсна горна алуминиева лайсна горна алуминиева лайсна горна алуминиева лайсна горна алуминиева лайсна ",
  "Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска Дъска ",
];

const IMAGES = [
  { url: pic7, alt: "pic Five" },
  { url: pic4, alt: "pic Four" },
  { url: pic3, alt: "pic Three" },
  { url: pic1, alt: "pic One" },
  { url: pic2, alt: "pic Two" },
  { url: pic6, alt: "pic Five" },
  { url: pic5, alt: "pic Five" },
];

export const Carosel = ({ description }) => {
  const [imageIndex, setImageIndex] = useState(0);

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

  return (
    <div className="flex w-[90%] flex-col-reverse sm:flex-row justify-between items-center max-w-[1400px]">
      <section
        aria-label="Image Slider"
        className="w-full h-[50vh]  sm:max-w-[50vh] relative"
      >
        <div className="w-full h-full flex overflow-hidden">
          {IMAGES.map((item, index) => (
            <div className="w-full h-full shrink-0 grow-0">
              <img
                loading="lazy"
                key={item.url}
                src={item.url}
                alt={item.alt}
                aria-hidden={imageIndex !== index}
                className="img-slider-img"
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
        >
          {IMAGES.map((_, index) => (
            <button
              key={index}
              className="img-slider-dot-btn"
              aria-label={`View Image ${index + 1}`}
              onClick={() => setImageIndex(index)}
            >
              {index === imageIndex ? (
                <FaRegDotCircle aria-hidden />
              ) : (
                <BsCircle className="text-white" aria-hidden />
              )}
            </button>
          ))}
        </div>
        <div id="after-image-slider-controls" />
      </section>

      <div className="sm:w-[30%] w-[80%] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold">{titles[imageIndex]}</h1>
        <p className="text-lg">{descriptions[imageIndex]}</p>
      </div>
    </div>
  );
};
