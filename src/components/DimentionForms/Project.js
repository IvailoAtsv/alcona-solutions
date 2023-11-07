import { useEffect, useState } from "react";
import "../dimentions.css";
import fence from "../../images/fence.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const Project = ({ updateFields, isValid, setIsValid }) => {
  const [p, setP] = useState("");
  const [pInvalid, setPInvalid] = useState(false);

  const handlePerimeter = (e) => {
    setP((prev) => (prev = e.target.value));
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
    if (p !== "" && p > 0) {
      setPInvalid(false);
      setIsValid(true);
    } else {
      setPInvalid(true);
    }
    updateFields({ perimeter: p });
  }, [p]);

  const inputStyle =
    "border-2 px-9 py-2 sm:w-[40%] w-[90%] rounded-md text-black foucs:border-orange-300 focus:ring-0 focus:outline-orange-300";

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex items-center flex-col justify-between w-full"
    >
      {pInvalid ? (
        <label className="text-xl text-center mt-4 text-red-600 font-bold">
          "Въведете валиден периметър"
        </label>
      ) : (
        <label>Въведете периметър (в метри)</label>
      )}

      <input
        name="perimeter"
        type="number"
        onChange={(e) => handlePerimeter(e)}
        className={inputStyle}
      />
    </form>
  );
};
