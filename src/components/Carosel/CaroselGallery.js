import pic1 from "../../images/WPC Cap.png";
import pic2 from "../../images/alumBottom.png";
import pic3 from "../../images/ironFastner.png";
import pic4 from "../../images/WPC Post 100x100.png";
import pic5 from "../../images/WPC Board.png";
import pic6 from "../../images/alumTopCover.png";
import pic7 from "../../images/WPC Set.png";
import './image-slider.css'
import uniqid from 'uniqid'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState, useRef } from "react";

const IMAGES = [
    { url: pic7, alt: "Panel" },
    { url: pic5, alt: "dyska" },
    { url: pic4, alt: "kol" },
    { url: pic3, alt: "osnova" },
    { url: pic1, alt: "shapka" },
    { url: pic2, alt: "dolna" },
    { url: pic6, alt: "gorna" },
];

export const CaroselGallery = () => {
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



    return (
        <>
            <h1 className="text-3xl text-center font-bold my-8">Готови проекти</h1>

            <div className="sm:w-full w-[90%] max-w-[1600px] my-12 sm:flex-row flex-col-reverse flex justify-between items-center">
                <section
                    id="gallery"
                    aria-label="Image Slider"
                    className="sm:w-full w-[90%] h-[60vh]  sm:max-w-[60%] relative"
                >
                    <div className="w-full h-full flex overflow-hidden">
                        {IMAGES.map((item, index) => (
                            <div key={uniqid()} className="w-full h-full shrink-0 grow-0">
                                <img
                                    loading="lazy"
                                    src={item.url}
                                    alt={item.alt}
                                    aria-hidden={imageIndex !== index}
                                    className="img-slider-img bg-white w-full h-full rounded-xl"
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
                <div className="flex flex-col items-center justify-center w-[90%] sm:w-[30%]">
                    <p className="text-[20px]"> <a className="underline text-[25px] my-12 hover:font-semibold" href="https://www.facebook.com/people/Luxury-Fences-WPC-%D0%9E%D0%B3%D1%80%D0%B0%D0%B4%D0%B8/61553632407058/">Разгледайте още</a>
                        &nbsp; готови проекти от нашите клиенти на нашата facebook страница
                    </p>
                </div>
            </div>
        </>

    )
}