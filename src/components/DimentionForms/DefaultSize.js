import { useEffect, useState } from "react";
import "../dimentions.css";
import fence from "../../images/fence.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import black from "../Colors/black.png";
import darkCoffee from "../Colors/darkCoffee.png";
import green from "../Colors/green.png";
import lightCoffee from "../Colors/lightCoffee.png";
import lightGrey from "../Colors/lightGrey.png";
import maple from "../Colors/maple.png";
import sandyBrown from "../Colors/sandyBrown.png";
import teak from "../Colors/teak.png";
import rosewood from "../Colors/rosewood.png";
import reddishBrown from "../Colors/reddishBrown.png";

import BlackSquare from "../../colors/Black.png";
import DarkCoffeeSquare from "../../colors/DarkCoffee.png";
import GreenSquare from "../../colors/Green.png";
import LightCoffeeSquare from "../../colors/LightCoffee.png";
import LightGreySquare from "../../colors/LightGrey.png";
import MapleSquare from "../../colors/Maple.png";
import ReddishBrownSquare from "../../colors/ReddishBrown.png";
import RosewoodSquare from "../../colors/Rosewood.png";
import SandyBrownSquare from "../../colors/SandyBrown.png";
import TeakSquare from "../../colors/Teak.png";

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
  const [height, setHeight] = useState(180);
  const [width, setWidth] = useState(180);
  const [panelCount, setPanelCount] = useState(1);

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
    updateFields({ panelCount: panelCount });
    updateFields({ height: height });
    updateFields({ width: width });
  }, [panelCount]);

  const inputStyle =
    "border-2 px-9 py-2 sm:w-[40%] w-[90%] rounded-md text-black foucs:border-orange-300 focus:ring-0 focus:outline-orange-300";

  return (
    <div className="flex items-center flex-col justify-between w-full">
      <div className="w-full flex flex-col justify-evenly gap-3 items-center">
        <div className="flex w-full flex-col justify-evenly sm:flex-row h-full items-center sm:justify-center">
          <div className="flex flex-col w-[20%] mb-5 sm:self-end items-center">
            <img src={colorSquares[color]} className="w-20 h-20  rounded-md" />
            <p>{color}</p>
          </div>
          <img
            src={colors[color]}
            style={{ width: `${width * 2}px`, height: `${height * 1.5}px` }}
          />
          <p className="text-[12px] sm:self-end text-left mb-5 w-[65%] sm:w-[20%]">
            Показаният цвят на оградата е с илюстративна цел. За реалният такъв,
            моля придържайте се към цветната карта
          </p>
        </div>

        <input
          name="width"
          className={inputStyle}
          placeholder="180 см Ширина"
          readOnly
        />
        <input
          name="height"
          className={inputStyle}
          placeholder="180 см Височина"
          readOnly
        />
        <div className="flex flex-col justify-center items-center w-11/12 h-11/12">
          <label className="text-lg font-semibold">Брой:</label>
          <div className="flex w-full items-center justify-center gap-4">
            <button onClick={(e) => decrement(e)}>
              <AiOutlineMinus size={24} />
            </button>
            <input
              type="number"
              value={panelCount}
              onChange={(e) => setPanelCount(e.target.value)}
              required
              className="w-[150px] h-[30px] bg-gray-200 text-xl text-center rounded-md px-2 py-1"
            />
            <button onClick={(e) => increment(e)}>
              <AiOutlinePlus size={24} />
            </button>
          </div>
        </div>
        <p className="text-2xl text-center mt-4 text-red-600 font-bold">
          {!isValid ? "Броят на панелите трябва да бъде по-голям от 0!" : ""}
        </p>
      </div>
    </div>
  );
};
