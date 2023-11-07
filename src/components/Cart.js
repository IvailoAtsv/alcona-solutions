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
          <div className="sm:w-[50%] bg-gray-100 w-full sm:h-[80%] h-screen shadow-lg rounded-md flex justify-between flex-col p-4 items-center">
            <button
              className="self-end"
              onClick={() => setCartOpen((prev) => (prev = false))}
            >
              <AiOutlineClose size={32} />
            </button>
            <h1 className="text-3xl  font-semibold pt-3">Количка</h1>
            {/* cart */}
            <div className="flex flex-col min-h-min justify-evenly items-center w-full h-full">
              {cartItems.map((item, i) => {
                return (
                  <CartItem
                    key={i}
                    panelCount={item.panelCount}
                    color={item.color}
                    width={item.width}
                    height={item.height}
                    perimeter={item.perimeter}
                    isProject={item.isProject}
                  />
                );
              })}
            </div>
            <button className="self-end mr-4 rounded-lg py-1 px-6 border-2 font-bold duration-500 border-black hover:bg-black hover:text-white">
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
}) => {
  console.log(isProject);
  return (
    <div className="shadow-md p-4 bg-white w-[90%] h-[100px] rounded-md flex justify-center items-center">
      <img className="w-20" src={colors[color]} />
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
