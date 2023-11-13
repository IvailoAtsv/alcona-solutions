import { useEffect, useState } from "react";
import "../dimentions.css";
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

const widths = {
  186: 258,
  166: 255,
  146: 250,
  126: 249,
  106: 245,
  96: 230,
  86: 230,
  76: 228,
  66: 226,
};

let price;

const heights = {
  62: 0,
  77.5: 1,
  93: 2,
  108.5: 3,
  124: 4,
  139.5: 5,
  155: 6,
  170.5: 7,
  186: 8,
  201.5: 9,
};
const premium = ["teak", "lightGrey", "green", "rosewood"];

export const CustomSize = ({ color, updateFields, isValid, setIsValid }) => {
  const [height, setHeight] = useState(201.5);
  const [width, setWidth] = useState(186);
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
    price = Math.floor(
      Number(widths[width]) +
        (heights[height] !== 8 ? Number(heights[height]) * 26.9 : 202),
    );
    if (premium.includes(color)) {
      price = price * 1.44;
    } else {
      price = price;
    }
    const total = price * panelCount;
    updateFields({ price: total });
    updateFields({ panelCount: panelCount });
    updateFields({ height: height });
    updateFields({ width: width });
  }, [panelCount, height, width]);

  return (
    <div className="flex items-center w-full min-h-min flex-col justify-between ">
      <div className="flex h-full items-end">
        <div className="flex w-full flex-col justify-evenly sm:flex-row h-full items-center sm:justify-center">
          <div className="sm:order-1 order-2 flex sm:flex-col flex-row sm:h-full sm:w-[20%] w-full justify-end sm:self-end gap-3 items-start">
            <div>
              <p className="font-bold">
                {premium.includes(color) ? "Premium" : "Standard"}
              </p>
              <img src={colorSquares[color]} className="w-20 h-20 rounded-md" />
              <p>{color}</p>
            </div>
            <p className="order-3 text-[12px] sm:self-start self-end text-left mb-5 w-[100%]">
              Показаният цвят на оградата е с илюстративна цел. За реалният
              такъв, моля придържайте се към цветната карта
            </p>
          </div>
          <img
            src={colors[color]}
            style={{ width: `${width * 2}px`, height: `${height * 1.5}px` }}
            className="sm:order-2 order-1"
          />
          <p className="order-3 hidden sm:block sm:opacity-0 w-[100%] text-[12px] sm:self-end text-left mb-5 sm:w-[20%]">
            Показаният цвят на оградата е с илюстративна цел. За реалният такъв,
            моля придържайте се към цветната карта
          </p>
        </div>
      </div>

      <div className="w-full flex  flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-11/12 h-11/12">
          <label className="text-lg font-semibold">Ширина: {width} cm</label>
          <input
            className="slider w-[80%]"
            defaultValue={180}
            required
            type="range"
            onChange={(e) => {
              updateFields({ width: e.target.value });
              setWidth(e.target.value);
            }}
            min="66"
            step={width < 106 ? 10 : 20}
            max="186"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-11/12 h-11/12">
          <label className="text-lg font-semibold">Височина: {height} cm</label>
          <input
            className="slider"
            required
            type="range"
            defaultValue={200}
            onChange={(e) => {
              updateFields({ height: e.target.value });
              setHeight(e.target.value);
            }}
            min="62"
            step="15.5"
            max="201.5"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-11/12 h-11/12">
          <label className="text-lg font-semibold">Брой:</label>
          <div className="flex w-full items-center justify-center gap-4">
            <button onClick={(e) => decrement(e)}>
              <AiOutlineMinus size={24} />
            </button>
            <input
              type="number"
              value={panelCount}
              onChange={(e) => setPanelCount((prev) => (prev = e.target.value))}
              required
              className="w-[150px] h-[30px] bg-gray-200 text-xl text-center rounded-md px-2 py-1"
            />
            <button onClick={(e) => increment(e)}>
              <AiOutlinePlus size={24} />
            </button>
          </div>
          <p className="text-center text-lg py-2">
            {price * Number(panelCount)} лв.
          </p>
        </div>
        <p className="text-2xl text-center mt-4 text-red-600 font-bold">
          {!isValid ? "Броят на панелите трябва да бъде по-голям от 0!" : ""}
        </p>
      </div>
    </div>
  );
};
