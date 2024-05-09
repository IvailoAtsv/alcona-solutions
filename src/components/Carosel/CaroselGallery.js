import pic1 from "./gallery/1_16x9.png";
import pic2 from "./gallery/2_16x9.png";
import pic3 from "./gallery/3_16x9.png";
import pic4 from "./gallery/4_16x9.png";
import pic5 from "./gallery/5_16x9.png";
import pic6 from "./gallery/6_16x9.png";
import pic7 from "./gallery/7_16x9.png";
import pic8 from "./gallery/1st.png";
import pic9 from "./gallery/2nd.png";
import pic10 from "./gallery/3rd.png";
import pic11 from "./gallery/any1.png";
import pic12 from "./gallery/any2.png";
import pic13 from "./gallery/any3.png";
import uniqid from "uniqid";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const IMAGES = [
  { src: pic8, alt: "dyska" },
  { src: pic9, alt: "dyska" },
  { src: pic10, alt: "dyska" },
  { src: pic11, alt: "dyska" },
  { src: pic12, alt: "dyska" },
  { src: pic13, alt: "dyska" },
  { src: pic5, alt: "dyska" },
  { src: pic4, alt: "kol" },
  { src: pic3, alt: "osnova" },
  { src: pic1, alt: "shapka" },
  { src: pic2, alt: "dolna" },
  { src: pic7, alt: "Panel" },
  { src: pic6, alt: "gorna" },
];
const responsive = {
  desktop: {
    breakpoint: { max: 11024, min: 1000 },
    items: 3,
    partialVisibilityGutter: 100,
  },
  mobile: {
    breakpoint: { max: 1000, min: 0 },
    items: 1,
    partialVisibilityGutter: 100,
  },
};

export const CaroselGallery = () => {
  return (
    <>
      <h1 className="text-3xl my-8 min-w-min text-center font-semibold border-b-4 px-2 border-footer">
        Готови проекти
      </h1>

      <div
        id="gallery"
        className="lg:w-full w-[90%] max-w-[1920px] mb-8 flex-col flex justify-between items-center"
      >
        {/* <Carousel
          containerClass="w-full mx-auto overflow-auto"
          slidesToSlide={1}
          responsive={responsive}
          className="w-full"
          swipeable={true}
        >
          {IMAGES.map((img) => {
            return <ImageElem key={uniqid()} src={img.src} alt={img.alt} />;
          })}
        </Carousel> */}
        <Carousel
          hasMediaButton={false}
          hasIndexBoard={false}
          images={IMAGES}
          style={{
            height: "70vh",
            width: "95%",
            maxWidth: "1100px",
          }}
        />
        <a
          className="rounded-lg py-2 px-4 border-2 self-center font-bold duration-500 mt-6 border-black hover:bg-black hover:text-white"
          target="_blank"
          href="https://www.facebook.com/people/Luxury-Fences-WPC-%D0%9E%D0%B3%D1%80%D0%B0%D0%B4%D0%B8/61553632407058/"
        >
          Разгледайте още на нашата facebook страница
        </a>
      </div>
    </>
  );
};

const ImageElem = (data) => {
  return (
    <img
      src={data.src}
      alt={data.alt}
      className="w-[90%] mx-auto hover:scale-[1.02] duration-300"
    />
  );
};
