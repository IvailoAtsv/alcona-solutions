import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./image-slider.css";
import { BsCircle } from "react-icons/bs";
import { FaRegDotCircle } from "react-icons/fa";

export function ImageSlider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  const descriptions = ["Кол (по 1 на всеки панел + 1)"];

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

  return (
    <>
      <h1 className="text-3xl text-center font-semibold">
        Какво се съдържа в комплекта
      </h1>
      <section
        aria-label="Image Slider"
        className="w-[96%] h-[50vh] sm:max-w-[700px] relative"
      >
        <div className="w-full h-full flex overflow-hidden">
          {images.map(({ url, alt, description }, index) => (
            <div className="w-full h-full shrink-0 grow-0">
              <p className="text-center text-2xl font-medium">{description}</p>
              <img
                key={url}
                src={url}
                alt={alt}
                aria-hidden={imageIndex !== index}
                className="img-slider-img"
                style={{ translate: `${-100 * imageIndex}%` }}
              />
            </div>
          ))}
        </div>
        <button
          onClick={showPrevImage}
          className="img-slider-btn"
          style={{ left: 0 }}
          aria-label="View Previous Image"
        >
          <AiOutlineArrowLeft aria-hidden />
        </button>
        <button
          onClick={showNextImage}
          className="img-slider-btn"
          style={{ right: 0 }}
          aria-label="View Next Image"
        >
          <AiOutlineArrowRight aria-hidden />
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
                <BsCircle aria-hidden />
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
