import { useEffect, useState } from "react";
import "../dimentions.css";
import fence from "../../images/fence.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const DefaultSize = ({ updateFields, isValid, setIsValid }) => {
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
        <img
          src={fence}
          style={{ width: `${width * 2}px`, height: `${height * 1.5}px` }}
        ></img>
        <input
          name="width"
          className={inputStyle}
          placeholder="180 CM"
          readOnly
        />
        <input
          name="height"
          className={inputStyle}
          placeholder="180CM"
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
