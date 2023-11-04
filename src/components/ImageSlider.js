import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./image-slider.css";
import {
  BsCircle,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FaRegDotCircle } from "react-icons/fa";

// { url: pic4, alt: "pic Four", description: "Кол (по 1 на всеки панел + 1)" },
//   { url: pic3, alt: "pic Three", description: "сечение на кол" },
//   { url: pic1, alt: "pic One", description: "WPC шапка (по 1 на кол)" },
//   { url: pic2, alt: "pic Two", description: "долна алуминиева лайсна" },
//   { url: pic6, alt: "pic Five", description: "горна алуминиева лайсна" },
//   {
//     url: pic5,
//     alt: "pic Five",
//     description: "Дъска (панела се състои от разлизен брой дъски)",
// },
export function ImageSlider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  const descriptions = [
    "Панел",
    "Кол (по 1 на всеки панел + 1)",
    "сечение на кол",
    "WPC шапка (по 1 на кол)",
    "долна алуминиева лайсна",
    "горна алуминиева лайсна",
    "Дъска (панела се състои от разлизен брой дъски)",
  ];

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  useEffect(() => {}, [imageIndex]);

  return (
    <>
      <h1 className="text-3xl text-center font-semibold">
        Какво се съдържа в комплекта
      </h1>
      <section
        aria-label="Image Slider"
        className="w-[96%] h-[60vh] sm:max-w-[60vh] relative"
      >
        <div className="w-full h-full flex overflow-hidden">
          {images.map((item, index) => (
            <div className="w-full h-full shrink-0 grow-0">
              <p className="text-center text-2xl font-medium">
                {descriptions[imageIndex]}
              </p>
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
          {images.map((_, index) => (
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
    </>
  );
}
// const ImgText = () => {
//   return (
//     <img
//       key={url}
//       src={url}
//       alt={alt}
//       aria-hidden={imageIndex !== index}
//       className="img-slider-img"
//       style={{ translate: `${-100 * imageIndex}%` }}
//     />
//   );
// };
