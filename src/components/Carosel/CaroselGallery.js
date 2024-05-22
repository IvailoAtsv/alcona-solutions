import pic1 from "./gallery/1.png";
import pic4 from "./gallery/4.png";
import pic6 from "./gallery/6.png";
import pic7 from "./gallery/7.png";
import pic8 from "./gallery/8.png";
import pic9 from "./gallery/9.png";
import pic10 from "./gallery/10.png";
import pic11 from "./gallery/11.png";
import pic13 from "./gallery/13.png";
import pic14 from "./gallery/14.png";
import pic15 from "./gallery/15.png";
import pic16 from "./gallery/16.mp4";
import pic22 from "./gallery/22.png";
import pic24 from "./gallery/24.png";
import pic25 from "./gallery/25.png";
import pic30 from "./gallery/30.png";
import pic27 from "./finished/27.png";
import pic28 from "./finished/28.png";
import pic29 from "./finished/29.png";
import pic31 from "./gallery/31.png";
import pic33 from "./3d/33.png";
import pic34 from "./3d/34.png";
import pic35 from "./3d/35.png";
import pic36 from "./3d/36.png";
import pic37 from "./3d/37.png";
import pic38 from "./3d/38.png";
import pic39 from "./3d/39.png";
import pic40 from "./3d/40.png";

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { useState } from "react";

const liStyles =
  "transition duration-300 inline-flex items-center justify-between w-full px-5 py-3 text-gray-500 bg-white border-2 border-gray-600 rounded-lg cursor-pointer hover:text-gray-600 peer-checked:text-gray-100 peer-checked:bg-gray-600 hover:bg-gray-200";

const IMAGES3D = [
  { src: pic33, alt: "3d visual" },
  { src: pic34, alt: "3d visual" },
  { src: pic35, alt: "3d visual" },
  { src: pic36, alt: "3d visual" },
  { src: pic37, alt: "3d visual" },
  { src: pic38, alt: "3d visual" },
  { src: pic39, alt: "3d visual" },
  { src: pic40, alt: "3d visual" },
];

const IMAGES = [
  { src: pic16, alt: "dyska" },
  { src: pic8, alt: "dyska" },
  { src: pic9, alt: "dyska" },
  { src: pic10, alt: "dyska" },
  { src: pic11, alt: "dyska" },
  { src: pic13, alt: "dyska" },
  { src: pic4, alt: "kol" },
  { src: pic1, alt: "shapka" },
  { src: pic7, alt: "Panel" },
  { src: pic6, alt: "gorna" },
  { src: pic14, alt: "gorna" },
  { src: pic15, alt: "gorna" },
  { src: pic22, alt: "gorna" },
  { src: pic24, alt: "gorna" },
  { src: pic25, alt: "gorna" },
  { src: pic30, alt: "gorna" },
  { src: pic31, alt: "gorna" },
];
const FINISHED = [
  { src: pic27, alt: "finished product" },
  { src: pic28, alt: "finished product" },
  { src: pic29, alt: "finished product" },
];
export const CaroselGallery = () => {
  const [selected, setSelected] = useState("3D");
  return (
    <section
      id="gallery"
      className="scroll-mt-[180px] bg-gray-50 w-full py-6 h-auto flex flex-col justify-center items-center"
    >
      <div className="lg:w-full w-[90%] max-w-[1920px] mb-8 flex-col flex justify-between items-center">
        <section className="max-w-[1000px] flex flex-col justify-center items-center">
          <label class="flex border-gray-700 items-center justify-between px-5 py-3 text-gray-600">
            <div class="flex justify-center items-center flex-col text-center">
              <div class="w-full text-3xl font-semibold">Изберете Галерия</div>
              <div class="w-full text-sm">
                Различните бутони отварят различен подбор от снимки
              </div>
            </div>
          </label>
          <ul class="grid w-[95%] items-center py-4 gap-4 sm:grid-cols-3">
            <li>
              <input
                type="checkbox"
                id="3D"
                value=""
                onClick={() => setSelected("3D")}
                checked={selected === "3D"}
                class="hidden peer"
                required=""
              />
              <label for="3D" className={liStyles}>
                <div class="block">
                  <div class="w-full text-lg font-semibold peer-checked:text-orange-400">
                    3D визуализация
                  </div>
                  <div class="w-full text-sm">
                    Снимки свързани с нашата дейност.
                  </div>
                </div>
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="finished"
                value=""
                onClick={() => setSelected("finished")}
                checked={selected === "finished"}
                class="hidden peer"
                required=""
              />
              <label for="finished" class={liStyles}>
                <div class="block">
                  <div class="w-full text-lg font-semibold peer-checked:text-orange-400">
                    Готови проекти
                  </div>
                  <div class="w-full text-sm">
                    Снимки свързани с нашата дейност.
                  </div>
                </div>
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="galery"
                checked={selected === "galery"}
                value=""
                onClick={() => setSelected("galery")}
                class="hidden peer"
                required=""
              />
              <label for="galery" className={liStyles}>
                <div class="block">
                  <div class="w-full text-lg font-semibold ">Галерия</div>
                  <div class="w-full peer-checked:text-gray-100 text-sm">
                    Снимки свързани с нашата дейност.
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </section>

        {selected === "galery" && (
          <Carousel
            shouldLazyLoad={true}
            hasMediaButton={false}
            hasIndexBoard={false}
            images={IMAGES}
            style={{
              height: "75vh",
              maxHeight: "600px",
              width: "95%",
              maxWidth: "1000px",
            }}
          />
        )}
        {selected === "3D" && (
          <Carousel
            shouldLazyLoad={true}
            hasMediaButton={false}
            hasIndexBoard={false}
            images={IMAGES3D}
            style={{
              height: "75vh",
              maxHeight: "600px",
              width: "95%",
              maxWidth: "1000px",
            }}
          />
        )}
        {selected === "finished" && (
          <Carousel
            shouldLazyLoad={true}
            hasMediaButton={false}
            hasIndexBoard={false}
            images={FINISHED}
            style={{
              height: "75vh",
              maxHeight: "600px",
              width: "95%",
              maxWidth: "1000px",
            }}
          />
        )}
        <a
          className="text-gray-600 rounded-lg py-2 px-4 border-2 self-center font-bold duration-500 mt-6 border-gray-600 hover:bg-gray-600 hover:text-white"
          target="_blank"
          href="https://www.facebook.com/people/Luxury-Fences-WPC-%D0%9E%D0%B3%D1%80%D0%B0%D0%B4%D0%B8/61553632407058/"
          rel="noreferrer"
        >
          Разгледайте още на нашата facebook страница
        </a>
      </div>
    </section>
  );
};
