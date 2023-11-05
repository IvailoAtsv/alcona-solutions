import pic1 from "../../images/plastic.jpg";
import pic2 from "../../images/bottom.jpg";
import pic3 from "../../images/kol-slice.jpg";
import pic4 from "../../images/kol.jpg";
import pic5 from "../../images/plank.jpg";
import pic6 from "../../images/top.jpg";
import pic7 from "../../images/fence2.png";
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

export const Carosel = () => {
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

    useEffect(() => { }, [imageIndex]);

    return (
        <div className="flex w-[90%] h-full py-4 flex-col-reverse sm:flex-row justify-between items-center max-w-[1400px]">
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

            <div className="sm:w-[30%] min-h-[50vh] w-[80%] flex flex-col justify-evenly items-center">
                <h1 className="text-3xl font-semibold">{titles[imageIndex]}</h1>
                <p className="text-lg">{descriptions[imageIndex]}</p>
            </div>
        </div>
    );
};
