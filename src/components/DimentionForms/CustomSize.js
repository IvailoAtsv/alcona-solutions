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

import data from "../data.js";

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

// const widths = {
//   186: 258,
//   166: 255,
//   146: 250,
//   126: 249,
//   106: 245,
//   96: 230,
//   86: 230,
//   76: 228,
//   66: 226,
// };

let price;
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

    price = Number(data[width][height]).toFixed(2);
    if (premium.includes(color)) {
      price = (price * 1.44).toFixed(2);
    }
    const total = price * panelCount;
    updateFields({ price: total });
    updateFields({ panelCount: panelCount });
    updateFields({ height: height });
    updateFields({ width: width });
  }, [panelCount, height, width]);

  return (
    <div className="flex relative items-center w-full min-h-min flex-col justify-between ">
      <div className="flex h-full items-end">
        <div className="flex w-full flex-col justify-evenly lg:flex-row h-full items-center lg:justify-center">
          <img
            alt="color"
            src={colors[color]}
            style={{ width: `${width * 2}px` }}
            className="relative h-[300px]"
          />
        </div>
      </div>

      <div className="w-full flex  flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-11/12 h-11/12">
          <label className="text-lg font-semibold">Ширина: {width} cm</label>
          <input
            className="slider w-[80%]"
            defaultValue={186}
            required
            type="range"
            onChange={(e) => {
              updateFields({ width: e.target.value });
              setWidth(Number(e.target.value));
            }}
            min="86"
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
            defaultValue={201.5}
            onChange={(e) => {
              updateFields({ height: e.target.value });
              setHeight(Number(e.target.value));
            }}
            min="62"
            step="15.5"
            max="201.5"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-11/12 h-11/12">
          <label
            className={`text-lg font-semibold ${!isValid && "text-red-600"}`}
          >
            {isValid ? "Брой: " : "Броят трябва да бъде по-голям от 0!"}{" "}
          </label>
          <div className="flex w-full items-center justify-center gap-4">
            <button
              className="p-1 rounded-md bg-gray-200"
              onClick={(e) => decrement(e)}
            >
              <AiOutlineMinus size={24} />
            </button>
            <input
              type="number"
              value={panelCount}
              onChange={(e) => setPanelCount((prev) => (prev = e.target.value))}
              required
              className="bg-gray-200 w-[85%] max-w-[140px] sm:max-w-[300px] text-xl text-center rounded-md py-1"
            />
            <button
              className="p-1 rounded-md bg-gray-200"
              onClick={(e) => increment(e)}
            >
              <AiOutlinePlus size={24} />
            </button>
          </div>
          <p className="text-center text-lg py-2">
            {(price * Number(panelCount)).toFixed(2)} лв.
          </p>
        </div>
      </div>
    </div>
  );
};
