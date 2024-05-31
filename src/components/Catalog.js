import { useEffect, useState } from "react";
import image from "../images/fence.png";
import { MainForm } from "./MainForm";
import { Carosel } from "./Carosel/Carosel";
import pic1 from "../images/WPC Cap.png";
import pic2 from "../images/alumBottom.png";
import pic3 from "../images/ironFastner.png";
import pic4 from "../images/WPC Post 100x100.png";
import pic5 from "../images/WPC Board.png";
import pic6 from "../images/alumTopCover.png";
import pic7 from "../images/WPC Set.png";
export const Catalog = ({
  stay,
  setStay,
  setIsPopupOpen,
  cartItems,
  setCartItems,
}) => {
  const [panoOpen, setPanoOpen] = useState(false);
  const [carouselIndex, setCarousel] = useState(null);

  useEffect(() => {
    if (carouselIndex) {
      setPanoOpen(false);
    }
  }, [panoOpen, carouselIndex]);

  return (
    <main
      id="products"
      className="w-full scroll-mt-[55px] bg-gray-100 py-4 min-h-[40vh] flex justify-start items-center flex-col"
    >
      <h2 className="text-4xl text-gray-600 font-bold mx-auto underline decoration-orange-400">
        Продукти
      </h2>
      <button className="absolute top-5 right-5">close</button>

      {panoOpen && (
        <MainForm
          panoOpen={panoOpen}
          setPanoOpen={setPanoOpen}
          stay={stay}
          setStay={setStay}
          setIsPopupOpen={setIsPopupOpen}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      )}
      {!panoOpen && carouselIndex === null && (
        <ItemList
          setCarousel={setCarousel}
          carouselIndex={carouselIndex}
          setPanoOpen={setPanoOpen}
          panoOpen={panoOpen}
        />
      )}
      {carouselIndex && (
        <Carosel
          setCarousel={setCarousel}
          carouselIndex={carouselIndex}
          setIsPopupOpen={setIsPopupOpen}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      )}
    </main>
  );
};

const ItemList = ({ setPanoOpen, setCarousel }) => {
  return (
    <section className="w-[90%] sm:p-16 justify-start items-start grid grid-flow-row my-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid-rows-auto gap-4 max-w-[1400px] ">
      <Card img={image} title={"Пано"} onClick={() => setPanoOpen(true)} />
      <Card
        img={pic3}
        title={"Meтална основа"}
        onClick={() => setCarousel(3)}
      />
      <Card
        img={pic5}
        title={"Съставна дъска"}
        onClick={() => setCarousel(1)}
      />
      <Card img={pic4} title={"WPC Стълб"} onClick={() => setCarousel(2)} />
      <Card img={pic2} title={"Долна лайстна"} onClick={() => setCarousel(5)} />
      <Card img={pic6} title={"Горна лайстна"} onClick={() => setCarousel(6)} />
      <Card img={pic1} title={"WPC Капачка"} onClick={() => setCarousel(4)} />
    </section>
  );
};
const Card = ({ img, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white hover:translate-y-[-7px] aspect-square flex p-2 group transition duration-500 cursor-pointer hover:shadow-xl rounded-md justify-center items-center flex-col"
    >
      <img
        src={img}
        alt="item"
        className="h-[70%] group-hover:scale-105 transition duration-500"
      />
      <h3 className="transition duration-500 group-hover:translate-y-[5px] text-gray-600 text-md md:text-lg font-semibold">
        {title}
      </h3>
    </div>
  );
};
