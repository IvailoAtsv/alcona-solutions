import { AiOutlineClose } from "react-icons/ai";

import black from "../components/Colors/black.png";
import darkCoffee from "../components/Colors/darkCoffee.png";
import green from "../components/Colors/green.png";
import lightCoffee from "../components/Colors/lightCoffee.png";
import lightGrey from "../components/Colors/lightGrey.png";
import maple from "../components/Colors/maple.png";
import sandyBrown from "../components/Colors/sandyBrown.png";
import teak from "../components/Colors/teak.png";
import rosewood from "../components/Colors/rosewood.png";
import reddishBrown from "../components/Colors/reddishBrown.png";

import pic1 from "../images/plastic.jpg";
import pic2 from "../images/bottom.jpg";
import pic3 from "../images/kol-slice.jpg";
import kol from "../images/kol.jpg";
import pic5 from "../images/plank.jpg";
import pic6 from "../images/top.jpg";
import pano from "../images/fence2.png";

const IMAGES = [
  { pano: "WPC Оградно пано Alcona Standard (180x180cm)" },
  { dyska: "WPC Съставна дъска Alcona (160x1800mm) " },
  { kol: "WPC Стълб Alcona (100x100mm)" },
  { sechenie: "сечение на кол" },
  { kapachka: "WPC Капачка " },
  { bottom: "Alum Начална Лайсна Alcona " },
  { top: "Alum Завършваща Лайсна Alcona" },
];

const colors = {
  black: black,
  darkCoffee: darkCoffee,
  green: green,
  lightCoffee: lightCoffee,
  lightGrey: lightGrey,
  maple: maple,
  sandyBrown: sandyBrown,
  teak: teak,
  rosewood: rosewood,
  reddishBrown: reddishBrown,
};
const colorNames = {
  black: "Black",
  darkCoffee: "Dark Coffee",
  green: "Green",
  lightCoffee: "Light Coffee",
  lightGrey: "Light Grey",
  maple: "Maple",
  sandyBrown: "Sandy Brown",
  teak: "Teak",
  rosewood: "Rosewood",
  reddishBrown: "Reddish Brown",
};

export const Cart = ({ cartOpen, setCartOpen, cartItems }) => {
  console.log(cartItems);
  return (
    <>
      {cartOpen ? (
        <div className="w-full z-50 h-screen bg-transparent fixed top-0 right-0 flex justify-between flex-col items-end shadow-lg rounded-l-md">
          <div className="sm:w-[60%] overflow-y-auto bg-gray-100 w-full sm:h-[80%] h-screen shadow-lg rounded-md flex justify-between flex-col p-4 items-center">
            <button
              className="self-end"
              onClick={() => setCartOpen((prev) => (prev = false))}
            >
              <AiOutlineClose size={32} />
            </button>
            <h1 className="text-3xl  font-semibold pt-3">Количка</h1>
            {/* cart */}
            <div className="flex flex-col min-h-min justify-evenly gap-2 items-center w-full h-full">
              {cartItems.map((item, i) => {
                if (item.itemType === "default") {
                  return (
                    <CartItem
                      key={i}
                      panelCount={item.panelCount}
                      color={item.color}
                      width={item.width}
                      height={item.height}
                      perimeter={item.perimeter}
                      isProject={item.isProject}
                      itemType={item.itemType}
                    />
                  );
                } else {
                  return (
                    <CartElement
                      src={item.src}
                      itemName={item.itemName}
                      count={item.count}
                    />
                  );
                }
              })}
            </div>
            <button className="self-end mr-4 mt-2 rounded-lg py-1 px-6 border-2 font-bold duration-500 bg-white border-black hover:bg-black hover:text-white">
              Към Поръчка
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

const CartItem = ({
  panelCount,
  color,
  width,
  height,
  isProject,
  perimeter,
  itemType,
}) => {
  console.log(isProject);
  return (
    <div className="shadow-md p-4 bg-white w-[90%] h-[100px] rounded-md flex justify-center items-center">
      <img className="w-16" src={colors[color]} />
      <div className="flex pl-4 flex-col items-center">
        <p className="text-lg">цвят {colorNames[color]}</p>
        {perimeter ? (
          <p className="text-md self-start">Проект: {perimeter} м.</p>
        ) : (
          <p className="text-md self-start">
            {width} x {height}
          </p>
        )}
      </div>
      <p className="ml-auto ">x {panelCount}</p>
    </div>
  );
};

const CartElement = ({ count, itemName, src }) => {
  console.log(IMAGES[itemName]);
  return (
    <div className="shadow-md p-4 bg-white w-[90%] h-[100px] rounded-md flex justify-center items-center">
      <img className="w-16" src={src} />
      <p className="pl-4 w-[60%]"> {itemName}</p>
      <p className="ml-auto">x {count}</p>
    </div>
  );
};
// color: "",
//   width: 0,
//   height: 0,
//   panelCount: 1,
//   ledCaps: 0,
//   solarCaps: 0,
//   plasticCaps: 0,
//   phone: "",
//   name: "",
//   city: "",
//   area: "",
//   pickUp: false,
//   isProject: "",
//   perimeter: "",
