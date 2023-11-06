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

export const CustomSize = ({ color, updateFields, isValid, setIsValid }) => {
  const [height, setHeight] = useState(210);
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

  return (
    <div className="flex items-center w-full min-h-min flex-col justify-between ">
      <img
        src={colors[color]}
        style={{ width: `${width * 2}px`, height: `${height * 1.2}px` }}
      ></img>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-11/12 h-11/12">
          <label className="text-lg font-semibold">Ширина: {width} cm</label>
          <input
            className="slider"
            defaultValue={180}
            required
            type="range"
            onChange={(e) => {
              updateFields({ width: e.target.value });
              setWidth(e.target.value);
            }}
            min="80"
            step="20"
            max="180"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-11/12 h-11/12">
          <label className="text-lg font-semibold">Височина: {height} cm</label>
          <input
            className="slider"
            required
            type="range"
            defaultValue={210}
            onChange={(e) => {
              updateFields({ height: e.target.value });
              setHeight(e.target.value);
            }}
            min="60"
            step="30"
            max="210"
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
        </div>
        <p className="text-2xl text-center mt-4 text-red-600 font-bold">
          {!isValid ? "Броят на панелите трябва да бъде по-голям от 0!" : ""}
        </p>
      </div>
    </div>
  );
};
