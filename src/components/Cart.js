import { AiOutlineClose } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
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
import { useEffect } from "react";

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

export const Cart = ({ cartOpen, setCartOpen, cartItems, setCartItems }) => {
  useEffect(() => {
    if (!cartItems) {
      setCartOpen(false);
    }
  }, [cartItems]);

  const handleDelete = (id) => {
    console.log("id ", id);
    console.log(
      "find",
      cartItems.find((item) => item.id === id),
    );
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id !== id)) {
        return currentItems.filter((item) => item.id !== id);
      }
    });
  };
  return (
    <>
      {cartOpen ? (
        <div className="w-full z-50 overflow-y-auto h-[90vh] bg-transparent fixed top-0 right-0 flex justify-between flex-col items-end  rounded-xl">
          <div className="sm:w-[60%] bg-gray-100 w-full h-auto shadow-lg rounded-md flex justify-evenly flex-col p-4 items-center">
            <button
              className="self-end"
              onClick={() => setCartOpen((prev) => (prev = false))}
            >
              <AiOutlineClose className="pt-2" size={32} />
            </button>
            <h1 className="text-3xl mb-auto font-semibold ">Количка</h1>
            {/* cart */}
            <div className="flex flex-col overflow-y-scroll justify-around gap-2 items-center w-full">
              {cartItems?.map((item, i) => {
                if (item.itemType === "default") {
                  return (
                    <CartItem
                      onRemove={handleDelete}
                      setCartItems={setCartItems}
                      cartItems={cartItems}
                      key={i}
                      id={item.id}
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
                      id={item.id}
                      itemName={item.itemName}
                      count={item.count}
                    />
                  );
                }
              })}
            </div>
            <div className="w-[90%] flex justify-end">
              <button className="self-end mt-6 rounded-lg py-1 px-6 border-2 font-bold duration-500 bg-white border-black hover:bg-black hover:text-white">
                Към Поръчка
              </button>
            </div>
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
  setCartItems,
  id,
  onRemove,
}) => {
  return (
    <div className="shadow-md p-4 bg-white w-[90%] h-auto flex-col rounded-md flex justify-center items-center">
      <button className="self-end" onClick={() => onRemove(id)}>
        <FiTrash />
      </button>
      <div className="flex items-center justify-between w-full">
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
      <div className=" w-full flex flex-col justify-start items-center">
        <p className="w-full border-b">WPC стълб х {panelCount + 1}</p>
        <p className="w-full border-b">WPC капачка х {panelCount + 1}</p>
        <p className="w-full border-b">iron fastener х {panelCount + 1}</p>
        <p className="w-full border-b">анкерен болт х {(panelCount + 1) * 4}</p>
        <p className="w-full border-b">
          долна алуминиева лайсна х {panelCount}
        </p>
        <p className="w-full border-b">
          горна алуминиева лайсна х {panelCount}
        </p>
        <p className="ml-auto pt-2">price $</p>
      </div>
    </div>
  );
};

const CartElement = ({ count, itemName, src }) => {
  return (
    <div className="shadow-md p-4 bg-white w-[90%] h-[100px] rounded-md flex justify-center items-center">
      <img className="w-16" src={src} />
      <p className="pl-4 w-[60%]"> {itemName}</p>
      <p className="ml-auto">x {count}</p>
    </div>
  );
};
