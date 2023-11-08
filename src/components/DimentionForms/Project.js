import { useEffect, useState } from "react";
import "../dimentions.css";
import fence from "../../images/fence.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const Project = ({ updateFields, isValid, setIsValid }) => {
  const [p, setP] = useState("");
  const [pInvalid, setPInvalid] = useState(false);
  const [height, setHeight] = useState(180);

  const handlePerimeter = (e) => {
    setP(e.target.value);
  };
  const handleSubmit = (e) => {
    updateFields({ isProject: true, perimeter: p });
  };

  useEffect(() => {
    if (p === "") {
      setIsValid(false);
      setPInvalid(false);
    }
  }, []);

  useEffect(() => {
    if (p > 0) {
      setPInvalid(false);
      setIsValid(true);
    } else {
      setPInvalid(true);
    }
    updateFields({ perimeter: p, height: height });
  }, [p]);

  const inputStyle =
    "border-2 px-9 py-2 sm:w-[40%] w-[90%] rounded-md text-black foucs:border-orange-300 focus:ring-0 focus:outline-orange-300";
  console.log(pInvalid);
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex items-center flex-col justify-between w-full"
    >
      <label className="text-xl text-center mt-4 pb-2 font-bold">
        Въведете валиден периметър
      </label>

      <input
        name="perimeter"
        type="number"
        onChange={(e) => handlePerimeter(e)}
        className={inputStyle}
      />
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
    </form>
  );
};
