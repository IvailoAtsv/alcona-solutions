import { useEffect, useState } from "react";
import "../dimentions.css";
import fence from "../../images/fence.webp";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import black from "../Colors/black.webp";
import darkCoffee from "../Colors/darkCoffee.webp";
import green from "../Colors/green.webp";
import lightCoffee from "../Colors/lightCoffee.webp";
import lightGrey from "../Colors/lightGrey.webp";
import maple from "../Colors/maple.webp";
import sandyBrown from "../Colors/sandyBrown.webp";
import teak from "../Colors/teak.webp";
import rosewood from "../Colors/rosewood.webp";
import reddishBrown from "../Colors/reddishBrown.webp";
import BlackSquare from "../../colors/Black.webp";
import DarkCoffeeSquare from "../../colors/DarkCoffee.webp";
import GreenSquare from "../../colors/Green.webp";
import LightCoffeeSquare from "../../colors/LightCoffee.webp";
import LightGreySquare from "../../colors/LightGrey.webp";
import MapleSquare from "../../colors/Maple.webp";
import ReddishBrownSquare from "../../colors/ReddishBrown.webp";
import RosewoodSquare from "../../colors/Rosewood.webp";
import SandyBrownSquare from "../../colors/SandyBrown.webp";
import TeakSquare from "../../colors/Teak.webp";

const colorSquares = {
  black: BlackSquare,
  darkCoffee: DarkCoffeeSquare,
  green: GreenSquare,
  lightCoffee: LightCoffeeSquare,
  lightGrey: LightGreySquare,
  maple: MapleSquare,
  sandyBrown: SandyBrownSquare,
  teak: TeakSquare,
  rosewood: RosewoodSquare,
  reddishBrown: ReddishBrownSquare,
};

const premium = ["teak", "lightGrey", "green", "rosewood"];

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

export const DefaultSize = ({ color, updateFields, isValid, setIsValid }) => {
  const [height, setHeight] = useState(186);
  const [width, setWidth] = useState(186);
  const [panelCount, setPanelCount] = useState(1);
  const [price, setPrice] = useState(0);

  const increment = (e) => {
    e.preventDefault();
    setPanelCount((count) => count + 1);
  };
  const decrement = (e) => {
    e.preventDefault();
    setPanelCount((count) => count - 1);
  };
  useEffect(() => {
    if (panelCount <= 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    let price;
    if (premium.includes(color)) {
      price = 660;
    } else {
      price = 460;
    }
    const total = price * panelCount;
    updateFields({ price: total });
    updateFields({ panelCount: panelCount });
    updateFields({ height: height });
    updateFields({ width: width });
  }, [panelCount]);

  const inputStyle =
    "border-2 px-9 py-2 lg:w-[40%] w-[90%] rounded-md text-black foucs:border-orange-300 focus:ring-0 focus:outline-orange-300";

  return (
    <div className="flex items-center flex-col justify-between w-full">
      <div className="w-full flex flex-col justify-evenly gap-3 items-center">
        <div className="flex w-full flex-col justify-evenly lg:flex-row h-full items-center lg:justify-center">
          {/* <div className="flex flex-col w-[20%] mb-5 lg:self-end items-center">
            <p className="font-bold">
              {premium.includes(color) ? "Premium" : "Standard"}
            </p>

            <img src={colorSquares[color]} className="w-20 h-20  rounded-md" />
            <p>{color}</p>
          </div> */}
          <img
            alt="panel"
            src={colors[color]}
            style={{
              width: `${width * 2}px`,
              height: `${height * 1.5}px`,
              position: "relative",
            }}
          />
          <p className="text-[10px] absolute lg:self-end text-center top-[53%] translate-x-[-50%] left-[50%] w-[95%] lg:w-[20%]">
            Показаният цвят на оградата е с илюстративна цел.
          </p>
        </div>

        <input
          name="width"
          className={inputStyle}
          placeholder="186 см Ширина"
          readOnly
        />
        <input
          name="height"
          className={inputStyle}
          placeholder="186 см Височина"
          readOnly
        />
        <div className="flex flex-col justify-center items-center w-11/12 h-11/12">
          <label className="text-lg font-semibold">Брой:</label>
          <div className="flex w-full items-center justify-center gap-4">
            <button onClick={(e) => decrement(e)}>
              <AiOutlineMinus size={24} />
            </button>
            <input
              value={panelCount}
              onChange={(e) => setPanelCount(e.target.value)}
              required
              className="w-[150px] h-[30px] bg-gray-200 text-xl text-center rounded-md px-2 py-1"
            />
            <button onClick={(e) => increment(e)}>
              <AiOutlinePlus size={24} />
            </button>
          </div>
          <p className="text-center text-lg py-2">
            {premium.includes(color)
              ? ((660 / 1.2) * panelCount).toFixed(2)
              : ((460 / 1.2) * panelCount).toFixed(2)}{" "}
            лв.
            <p className="text-sm opacity-35 font-extralight">цена без ДДС</p>
          </p>
        </div>
        <p className="text-2xl text-center mt-4 text-red-600 font-bold">
          {!isValid ? "Броят на панелите трябва да бъде по-голям от 0!" : ""}
        </p>
      </div>
    </div>
  );
};
