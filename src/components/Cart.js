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
import { useEffect, useState } from "react";
import { UserForm } from "./UserForm";
import { BiCrown } from "react-icons/bi";

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
  black: "Black anthracite",
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

const heights = {
  62.0: 98.99,
  77.5: 103.99,
  93.0: 107.99,
  108.5: 111.99,
  124.0: 129.99,
  139.5: 129.99,
  155.0: 129.99,
  170.5: 129.99,
  186.0: 129.99,
  201.5: 153.99,
};

export const Cart = ({ cartOpen, setCartOpen, cartItems, setCartItems }) => {
  const [orderStatus, setOrderStatus] = useState("cart");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (!cartItems) {
      setCartOpen(false);
    }
  }, [cartItems]);

  const handleDelete = (id) => {
    if (cartItems.length > 1) {
      setCartItems((currentItems) => {
        if (currentItems.find((item) => item.id !== id)) {
          return currentItems.filter((item) => item.id !== id);
        }
      });
    } else {
      empty();
    }
  };

  const empty = () => {
    setCartItems([]);
  };
  console.log(cartItems);

  const getSum = (cartItems) => {
    const toSum = cartItems.filter((item) => Number(item.price));
    let finalSum;
    if (!addAdditional(cartItems)) {
      finalSum = toSum.reduce((total, item) => total + Number(item.price), 0);
    } else {
      finalSum =
        toSum.reduce((total, item) => total + Number(item.price), 0) +
        heights[
          cartItems[
            cartItems.findIndex(
              (item) => item.color && item.price && !item.perimeter,
            )
          ].height
        ];
    }
    return finalSum;
  };

  const addAdditional = (cartItems) => {
    const viable = cartItems.filter(
      (item) => item.perimeter == "" && item.width,
    );
    if (viable.length !== 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {cartOpen ? (
        <div className="w-full z-50 overflow-y-auto h-[100vh] bg-transparent fixed top-0 right-0 flex justify-between flex-col items-end  rounded-xl">
          <div className="sm:w-[60%] bg-gray-200 w-full h-auto shadow-lg rounded-md flex justify-center flex-col p-4 items-center">
            <button className="self-end" onClick={() => setCartOpen(false)}>
              <AiOutlineClose className="pt-2" size={32} />
            </button>
            {orderStatus === "cart" && (
              <h1 className="text-3xl mb-auto font-semibold ">Количка</h1>
            )}
            {/* cart */}
            {orderStatus === "cart" ? (
              <div className="flex flex-col justify-around gap-2 items-center w-full">
                {cartItems?.map((item, i) => {
                  if (item.itemType === "default") {
                    return (
                      <CartItem
                        onRemove={handleDelete}
                        setCartItems={setCartItems}
                        cartItems={cartItems}
                        price={item.price}
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
                        cartItems={cartItems}
                        onRemove={handleDelete}
                        src={item.src}
                        price={item.price}
                        id={item.id}
                        key={item.id}
                        itemName={item.itemName}
                        count={item.count}
                        color={item.color}
                      />
                    );
                  }
                })}
                {addAdditional(cartItems) && (
                  <div className="bg-white w-[90%] flex flex-col rounded-md p-4">
                    <h1 className="text-center pb-4 font-semibold text-lg">
                      Допълнителни елементи
                    </h1>

                    <div className="flex border-b-2 w-full justify-between">
                      <p>WPC Стълб Alcona</p> <p className="text-end">x1</p>
                    </div>
                    <div className="flex border-b-2 w-full justify-between">
                      <p>Метална основа</p> <p className="text-end">x1</p>
                    </div>
                    <div className="flex border-b-2 w-full justify-between">
                      <p>WPC капачка</p> <p className="text-end">x1</p>
                    </div>
                    <div className="flex border-b-2 w-full justify-between">
                      <p>Анкерни болтове</p> <p className="text-end">x4</p>
                    </div>
                    <div className="flex border-b-2 w-full justify-between">
                      <p>Крепежни ъгли и планки</p>{" "}
                      <p className="text-end">x1</p>
                    </div>
                    <p className="self-end pt-2">
                      {heights[cartItems[0].height]}
                    </p>
                  </div>
                )}
                {cartItems.length == 0 && (
                  <h1 className="py-20">Количката е празна</h1>
                )}
              </div>
            ) : (
              <UserForm
                empty={empty}
                userData={userData}
                price={getSum(cartItems)}
                setUserData={setUserData}
                cartItems={cartItems}
                orderStatus={orderStatus}
                setOrderStatus={setOrderStatus}
                total={Number(getSum(cartItems)).toFixed(2)}
              />
            )}

            {orderStatus === "cart" && cartItems.length > 0 && (
              <div className="mt-6 self-center text-end w-[90%]">
                <p className="bg-white self-end rounded-md shadow-lg px-4 py-2">
                  Oбщо: {Number(getSum(cartItems)).toFixed(2)} лв.
                </p>
              </div>
            )}
            {orderStatus === "cart" ? (
              <div className="w-[90%] flex items-center justify-between">
                {cartItems.length !== 0 && (
                  <button
                    onClick={empty}
                    className="self-end mt-6 rounded-lg py-1 px-6 border-2 font-bold duration-500 bg-white border-black hover:bg-black hover:text-white"
                  >
                    Изтрий всички
                  </button>
                )}
                {/* <p className="">
                  {cartItems.reduce((total, item) => total + item.price, 0)}
                </p> */}
                {cartItems.length !== 0 && (
                  <button
                    onClick={() => setOrderStatus("order")}
                    className="self-end mt-6 rounded-lg py-1 px-6 border-2 font-bold duration-500 bg-white border-black hover:bg-black hover:text-white"
                  >
                    Към Поръчка
                  </button>
                )}
              </div>
            ) : (
              <div className="w-[90%] flex">
                <button
                  onClick={() => setOrderStatus("cart")}
                  className="self-start mt-6 rounded-lg py-1 px-6 border-2 font-bold duration-500 bg-white border-black hover:bg-black hover:text-white"
                >
                  Обратно
                </button>
              </div>
            )}
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
  price,
  id,
  onRemove,
}) => {
  const premium = ["teak", "lightGrey", "green", "rosewood"];

  const cardStyle =
    "shadow-md p-4 bg-white w-[90%] h-auto flex-col rounded-md flex justify-center items-center";

  const premiumStyle =
    "shadow-md p-4 bg-gold w-[90%] h-auto flex-col rounded-md flex justify-center items-center";
  return (
    <div className={cardStyle}>
      <button className="self-end" onClick={() => onRemove(id)}>
        <FiTrash />
      </button>
      <div className="flex items-center justify-between w-full">
        <img className="w-16" src={colors[color]} />
        <div className="flex pl-4 w-[80%] flex-col items-center">
          {premium.includes(color) && (
            <BiCrown
              size={28}
              className="self-start"
              fill="#ffda9e"
              color="black"
            />
          )}
          <p className="text-lg self-start">
            {premium.includes(color) ? "Премиум " : "Обикновен "}
            цвят
            <br />
            {colorNames[color]}
          </p>
          {perimeter ? (
            <p className="text-md self-start">
              Проект:
              <br />
              Ширина: {perimeter} м.
              <br />
              Височина {height} см.
            </p>
          ) : (
            <p className="text-md self-start">
              {width} ш x {height} в
            </p>
          )}
        </div>
        {!perimeter && <p className="ml-auto">x {panelCount}</p>}
      </div>
      <div className="pt-2 w-full flex flex-col justify-start items-center">
        {!perimeter && (
          <>
            <p className="w-full border-b">
              WPC съставна дъска Alcona х {(height / 15.5) * panelCount}
            </p>{" "}
            <p className="w-full border-b">WPC стълб х {panelCount}</p>
            <p className="w-full border-b">Крепежни ъгли х {panelCount * 4}</p>
            <p className="w-full border-b">
              Крепежни винтове х {panelCount * 8}
            </p>
            <p className="w-full border-b">WPC капачка х {panelCount}</p>
            <p className="w-full border-b">метална основа {panelCount}</p>
            <p className="w-full border-b">анкерен болт х {panelCount * 4}</p>
            <p className="w-full border-b">
              долна алуминиева лайсна х {panelCount}
            </p>
            <p className="w-full border-b">
              горна алуминиева лайсна х {panelCount}
            </p>
          </>
        )}
        {!perimeter && <p className="ml-auto pt-2">{price} лв.</p>}
      </div>
    </div>
  );
};

const CartElement = ({ color, count, itemName, src, onRemove, id, price }) => {
  return (
    <div className="w-[90%] flex flex-col shadow-md min-h-[100px] bg-slate-100 rounded-lg">
      <div className=" p-4  w-full h-[100px] rounded-md flex justify-between items-center">
        <div className="flex justify-center w-full items-center">
          <img className="w-16" src={src} />
          <div className="pl-4 w-[60%]">
            {color && <p>цвят {color}</p>}
            <p> {itemName}</p>
          </div>

          <p className="ml-auto">x {count}</p>
        </div>
        <button className="self-start pb-4" onClick={() => onRemove(id)}>
          <FiTrash />
        </button>
      </div>
      <p className="self-end p-4">{price} лв.</p>
    </div>
  );
};
