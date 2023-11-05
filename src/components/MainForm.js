import { useState } from "react";
// import { CapsForm } from "./CapsForm"
import { DimentionsForm } from "./DimentionsForm";
import { useMultistepForm } from "../useMultistepForm";
import { ColorsForm } from "./ColorsForm";
import { UserForm } from "./UserForm";

const INITIAL_DATA = {
  color: "",
  width: 0,
  height: 0,
  panelCount: 1,
  ledCaps: 0,
  solarCaps: 0,
  plasticCaps: 0,
  phone: "",
  name: "",
  city: "",
  area: "",
  pickUp: false,
  isProject: "",
  perimeter: "",
};

export function MainForm({ cartItems, setCartItems }) {
  const [data, setData] = useState(INITIAL_DATA);
  const [isValid, setIsValid] = useState(true);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  function addToCart(e) {
    setCartItems((prev) => [...prev, data]);
  }
  const {
    steps,
    goTo,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    reset,
    next,
  } = useMultistepForm([
    <ColorsForm
      isValid={isValid}
      setIsValid={setIsValid}
      {...data}
      updateFields={updateFields}
    />,
    <DimentionsForm
      isValid={isValid}
      setIsValid={setIsValid}
      {...data}
      updateFields={updateFields}
    />,
    // <UserForm
    //   cartItems={cartItems}
    //   addToCart={addToCart}
    //   isValid={isValid}
    //   setIsValid={setIsValid}
    //   {...data}
    //   updateFields={updateFields}
    // />,
    // <CapsForm isValid={isValid} setIsValid={setIsValid} {...data} updateFields={updateFields} />,
  ]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    return goTo(0);
  }

  return (
    <div className="border-2 rounded-xl text-sm shadow-lg pb-7 pt-12 min-h-min relative max-w-[1400px] w-[90%]">
      <form onSubmit={onSubmit}>
        <div className="absolute top-1 text-center font-semibold text-lg right-10">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="flex w-11/12 h-12 items-center justify-end mt-9 mr-9">
          {!isFirstStep && (
            <button
              disabled={!isValid}
              className="py-2 px-6 ml-4 hover:bg-orange-300 font-semibold bg-orange-400 rounded-md"
              type="button"
              onClick={back}
            >
              Back
            </button>
          )}
          {isLastStep ? (
            <button
              onClick={(e) => addToCart(e)}
              className="py-2 px-6 ml-4 hover:bg-orange-300 font-semibold bg-orange-400 rounded-md"
            >
              Add to Cart
            </button>
          ) : (
            <button
              disabled={!isValid}
              className={
                isFirstStep
                  ? "hidden"
                  : "py-2 px-6 ml-4 font-semibold hover:bg-orange-300 bg-orange-400 rounded-md"
              }
              type="submit"
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default MainForm;
