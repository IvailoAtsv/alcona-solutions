import React, { useEffect, useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { DimentionsForm } from "./DimentionForms/DimentionsForm";
import { useMultistepForm } from "../useMultistepForm";
import { ColorsForm } from "./ColorsForm";
import { UserForm } from "./UserForm";
import uniqid from "uniqid";

const INITIAL_DATA = {
  color: "",
  width: 0,
  height: 0,
  panelCount: 1,
  pickUp: false,
  isProject: false,
  perimeter: "",
  itemType: "default",
  id: uniqid(),
  price: 0,
};

export function GateForm({
  cartItems,
  setCartItems,
  setIsPopupOpen,
  stay,
  setStay,
  panoOpen,
  setPanoOpen,
}) {
  const [data, setData] = useState(INITIAL_DATA);
  const [isValid, setIsValid] = useState(true);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function addToCart(e) {
    const newList = cartItems;
    if (data.perimeter !== "") {
      updateFields({ isProject: true });
    }
    setCartItems([...newList, data]);
    setData(INITIAL_DATA);
  }

  const {
    steps,
    goTo,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
  } = useMultistepForm([
    <ColorsForm
      isValid={isValid}
      setIsValid={setIsValid}
      color={data.color}
      updateFields={updateFields}
    />,
    <DimentionsForm
      isValid={isValid}
      setIsValid={setIsValid}
      color={data.color}
      updateFields={updateFields}
    />,
    // Other form components...
  ]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    setIsPopupOpen(true);
    updateFields({ id: uniqid() });
    updateFields({ isProject: false });
    return goTo(0);
  }

  return (
    <div className="w-full h-full flex justify-center items-center flex-col bg-gray-100 py-12">
      <div
        id="order"
        className="rounded-xl mt-4 bg-white text-sm shadow-lg pb-12 pt-8 min-h-min relative max-w-[1400px] w-[90%]"
      >
        {panoOpen && (
          <button
            onClick={() => setPanoOpen(false)}
            className="absolute top-5 left-5 underline"
          >
            Назад към Каталог
          </button>
        )}
        <form className="" onSubmit={onSubmit}>
          <div className="absolute pt-2 top-1 text-center text-lg right-5">
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className="flex absolute bottom-[2%] gap-1 right-[2%] items-center justify-end ">
            {!isFirstStep && (
              <button
                className="rounded-lg py-2 px-6 border-2 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
                type="button"
                onClick={back}
              >
                Назад
              </button>
            )}
            {isLastStep ? (
              <button
                disabled={!isValid}
                onClick={(e) => addToCart(e)}
                className="rounded-lg py-2 px-6 border-2 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
              >
                Добави в количка
              </button>
            ) : (
              <button
                disabled={!isValid}
                className={
                  isFirstStep
                    ? "hidden"
                    : "rounded-lg py-2 px-6 border-2 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
                }
                type="submit"
              >
                Напред
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default GateForm;
