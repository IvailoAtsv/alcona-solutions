import { useEffect, useState } from "react";
import image from "../images/fence.webp";
import decking from "../images/decking.PNG";
import vrata from "../images/vrata.JPG";
import vrata2 from "../images/vrata2.JPG";
import vrataXl from "../images/vrataXl.JPG";
import parapet from "../images/parapet.JPG";
import parapet1 from "../images/parapet1.PNG";
import cherniYgli from "../images/cherniYgli.PNG";
import clips from "../images/clips.PNG";
import teakDeck from "../images/teakDeck.JPG";
import teakYgli from "../images/teakYgli.PNG";
import { MainForm } from "./MainForm";
import { Carosel } from "./Carosel/Carosel";
import pic1 from "../images/WPC Cap.webp";
import pic2 from "../images/alumBottom.webp";
import pic3 from "../images/ironFastner.webp";
import pic4 from "../images/WPC Post 100x100.webp";
import pic5 from "../images/WPC Board.webp";
import pic6 from "../images/alumTopCover.webp";
import pic7 from "../images/WPC Set.webp";
import { CatalogCard } from "./CatalogCategory";
import { FaArrowLeft } from "react-icons/fa";
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
      className=" w-full scroll-mt-[55px] bg-gray-100 py-6 min-h-[40vh] flex justify-start items-center flex-col"
    >
      <h2 className="text-3xl text-gray-600 font-bold mx-auto underline decoration-orange-400">
        Продукти
      </h2>
      <div className="relative py-4 w-full max-w-7xl">
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
      </div>
    </main>
  );
};
// ogradni sistemi, decking podovi nastilki, parapetni sistemi, vrati i portali
// + rozetka za 1, aluminiev distancer

// decking : decking dyski, yglovi pervazi, pvc klipci
// parapetni: parapet, stylb, wpc stylb, shapka, rozetka, dyska
// vrati i portali: vrati, portali, 2krila dovrna vrata, po zapitvane

const ItemList = ({ setPanoOpen, setCarousel }) => {
  const [category, setCategory] = useState(null);

  return (
    <>
      {category === null && (
        <h3 className="text-2xl text-center text-gray-600 font-bold mx-auto ">
          Изберете Категория
        </h3>
      )}
      <section className="w-full min-h-[300px] sm:p-2 justify-center items-center grid grid-flow-row my-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid-rows-auto gap-2 max-w-7xl ">
        {category !== null && (
          <button
            className="absolute top-0 flex justify-center items-center gap-1 left-2 text-orange-400 underline"
            onClick={() => setCategory(null)}
          >
            <FaArrowLeft size={12} />
            обратно
          </button>
        )}
        {category === null && (
          <>
            <CatalogCard
              title="Оградни Системи"
              img={image}
              onClick={() => setCategory("ogradi")}
            />
            <CatalogCard
              title="Декинг Подови Настилки"
              img={decking}
              onClick={() => setCategory("decking")}
            />
            <CatalogCard
              title="Парапетни Системи"
              img={parapet}
              onClick={() => setCategory("parapeti")}
            />
            <CatalogCard
              title="Врати и Портали"
              img={vrata}
              onClick={() => setCategory("portali")}
            />
          </>
        )}
        {category === "ogradi" && (
          <>
            {" "}
            <Card
              img={image}
              main={true}
              title={"Оградно Пано (Конфигурирай) "}
              onClick={() => setPanoOpen(true)}
            />
            <Card
              img={pic3}
              title={"Метална основа"}
              onClick={() => setCarousel(3)}
            />
            <Card
              img={pic5}
              title={"Съставна дъска"}
              onClick={() => setCarousel(1)}
            />
            <Card
              img={pic4}
              title={"WPC Стълб"}
              onClick={() => setCarousel(2)}
            />
            <Card
              img={pic2}
              title={"Долна лайстна"}
              onClick={() => setCarousel(5)}
            />
            <Card
              img={pic6}
              title={"Горна лайстна"}
              onClick={() => setCarousel(6)}
            />
            <Card
              img={pic1}
              title={"WPC Капачка"}
              onClick={() => setCarousel(4)}
            />
            <Card
              img={"path_to_image"}
              title={"Розетка за WPC стълб"}
              onClick={() => setCarousel(7)}
            />
            <Card
              img={"path_to_image"}
              title={"Алуминиев Дистанционер"}
              onClick={() => setCarousel(8)}
            />
          </>
        )}
        {category === "decking" && (
          <>
            <Card
              img={teakDeck}
              title={"Premium Decking ТИК"}
              onClick={() => setCarousel(9)}
            />
            <Card
              img={decking}
              title={"Premium Decking ЧЕРЕН АНТРАЦИД"}
              onClick={() => setCarousel(10)}
            />
            <Card
              img={teakYgli}
              title={"Завършващи ъгли ТИК"}
              onClick={() => setCarousel(11)}
            />
            <Card
              img={cherniYgli}
              title={"Завършващи ъгли ЧЕРЕН АНТРАЦИД"}
              onClick={() => setCarousel(12)}
            />
            <Card
              img={clips}
              title={"WPC клипс и винт"}
              onClick={() => setCarousel(13)}
            />
          </>
        )}
        {/* stylb, wpc stylb */}
        {category === "parapeti" && (
          <>
            {" "}
            <Card
              img={parapet}
              title={"Парапет Alcona"}
              onClick={() => setCarousel(16)}
            />
            <Card
              img={pic5}
              title={"Съставна дъска"}
              onClick={() => setCarousel(1)}
            />
            <Card
              img={pic4}
              title={"WPC Стълб"}
              onClick={() => setCarousel(2)}
            />
            <Card
              img={pic3}
              title={"Метална основа"}
              onClick={() => setCarousel(3)}
            />
            <Card
              img={pic1}
              title={"WPC Капачка"}
              onClick={() => setCarousel(4)}
            />
            <Card
              img={"path_to_image"}
              title={"Розетка за WPC стълб"}
              onClick={() => setCarousel(7)}
            />
          </>
        )}
        {category === "portali" && (
          <>
            {" "}
            <Card
              img={vrata2}
              title={"Пешеходна дворна врата"}
              onClick={() => setCarousel(14)}
            />
            <Card
              img={vrataXl}
              title={"Портална плъзгаща врата"}
              onClick={() => setCarousel(15)}
            />
            <Card
              img={parapet1}
              title={"Парапет Alcona"}
              onClick={() => setCarousel(16)}
            />
          </>
        )}
      </section>
    </>
  );
};
const Card = ({ img, title, onClick, main }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        main ? "bg-black bg-opacity-10" : "bg-white"
      } hover:translate-y-[-7px] aspect-square flex p-2 group transition duration-500 cursor-pointer hover:shadow-xl rounded-md justify-center items-center flex-col`}
    >
      <img
        src={img}
        alt="item"
        className="h-[70%] rounded-md group-hover:scale-105 transition duration-500"
      />
      <h3 className="transition text-center mt-4 duration-500 group-hover:translate-y-[5px] text-gray-700 text-sm md:text-md font-normal">
        {title}
      </h3>
    </div>
  );
};
