import pic1 from "./gallery/1.webp";
import pic4 from "./gallery/4.webp";
import pic6 from "./gallery/6.webp";
import pic7 from "./gallery/7.webp";
import pic8 from "./gallery/8.webp";
import pic9 from "./gallery/9.webp";
import pic10 from "./gallery/10.webp";
import pic11 from "./gallery/11.webp";
import pic13 from "./gallery/13.webp";
import pic14 from "./gallery/14.webp";
import pic15 from "./gallery/15.webp";
import pic22 from "./gallery/22.webp";
import pic24 from "./gallery/24.webp";
import pic25 from "./gallery/25.webp";
import pic30 from "./gallery/30.webp";
import pic27 from "./finished/27.webp";
import pic28 from "./finished/28.webp";
import pic29 from "./finished/29.webp";
import pic31 from "./gallery/31.webp";
import pic21 from "./gallery/21.webp";
import pic16 from "./gallery/16.webp";
import pic58 from "./gallery/58.webp";
import pic57 from "./gallery/57.webp";
import pic61 from "./gallery/61.webp";
import pic73 from "./gallery/73.webp";
import pic60 from "./gallery/60.webp";
import pic47 from "./gallery/47.webp";
import pic46 from "./gallery/46.webp";
import pic302 from "./gallery/302.webp";
import pic242 from "./gallery/242.webp";
import pic33 from "./3d/33.webp";
import pic34 from "./3d/34.webp";
import pic35 from "./3d/35.webp";
import pic36 from "./3d/36.webp";
import pic37 from "./3d/37.webp";
import pic38 from "./3d/38.webp";
import pic39 from "./3d/39.webp";
import pic40 from "./3d/40.webp";

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { useState } from "react";

const liStyles =
  "transition duration-300 inline-flex items-center justify-between w-full px-5 py-3 text-gray-500 bg-white border-2 border-gray-600 rounded-lg cursor-pointer hover:text-gray-600 peer-checked:text-gray-100 peer-checked:bg-gray-600 hover:bg-gray-200";

const IMAGES3D = [
  { src: pic33, alt: "3d visual 1" },
  { src: pic34, alt: "3d visual 2" },
  { src: pic35, alt: "3d visual 3" },
  { src: pic36, alt: "3d visual 4" },
  { src: pic37, alt: "3d visual 5" },
  { src: pic38, alt: "3d visual 6" },
  { src: pic39, alt: "3d visual 7" },
  { src: pic40, alt: "3d visual 8" },
];

const IMAGES = [
  // { src: pic16, alt: "dyska" },
  { src: pic21, alt: "dyska" },
  { src: pic16, alt: "dyska" },
  { src: pic242, alt: "dyska" },
  { src: pic58, alt: "dyska" },
  { src: pic57, alt: "dyska" },
  { src: pic61, alt: "dyska" },
  { src: pic73, alt: "dyska" },
  { src: pic60, alt: "dyska" },
  { src: pic47, alt: "dyska" },
  { src: pic46, alt: "dyska" },
  { src: pic302, alt: "dyska" },
  { src: pic8, alt: "dyska" },

  { src: pic9, alt: "dyska" },
  // { src: pic10, alt: "dyska" },
  { src: pic11, alt: "dyska" },
  // { src: pic13, alt: "dyska" },
  { src: pic4, alt: "kol" },
  { src: pic1, alt: "shapka" },
  { src: pic7, alt: "Panel" },
  // { src: pic6, alt: "gorna" },
  { src: pic14, alt: "gorna" },
  { src: pic15, alt: "gorna" },
  // { src: pic22, alt: "gorna" },
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
  const [selected, setSelected] = useState("galery");
  return (
    <section
      id="gallery"
      className="scroll-mt-[450px] sm:scroll-mt-[180px] bg-gray-50 w-full pt-6 h-auto flex flex-col justify-center items-center"
    >
      <div className="lg:w-full w-[90%] max-w-[1920px] mb-8 flex-col flex justify-between items-center">
        <section className="max-w-7xl flex flex-col justify-center items-center">
          <label class="flex border-gray-700 items-center justify-between px-5 py-3 text-gray-600">
            <div class="flex justify-center items-center flex-col text-center">
              <div class="w-full text-3xl font-semibold">Изберете Галерия</div>
              <div class="w-full text-orange-400 text-sm">
                Различните бутони отварят различен подбор от снимки
              </div>
            </div>
          </label>
          <ul class="grid w-full items-center pb-4 gap-4 sm:grid-cols-3">
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
          </ul>
        </section>

        {selected === "galery" && (
          <Carousel
            shouldLazyLoad={true}
            hasMediaButton={false}
            // hasIndexBoard={false}
            hasThumbnails={false}
            images={IMAGES}
            style={{
              height: "75vh",
              maxHeight: "700px",
              width: "95%",
              maxWidth: "1280px",
            }}
          />
        )}
        {selected === "3D" && (
          <Carousel
            shouldLazyLoad={true}
            hasMediaButton={false}
            // hasIndexBoard={false}
            hasThumbnails={false}
            images={IMAGES3D}
            style={{
              height: "75vh",
              maxHeight: "700px",
              width: "95%",
              maxWidth: "1280px",
            }}
          />
        )}
        {selected === "finished" && (
          <Carousel
            shouldLazyLoad={true}
            hasMediaButton={false}
            // hasIndexBoard={false}
            hasThumbnails={false}
            images={FINISHED}
            style={{
              height: "75vh",
              maxHeight: "700px",
              width: "95%",
              maxWidth: "1280px",
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
