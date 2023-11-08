import { useEffect, useState } from "react";
// import { CapsForm } from "./CapsForm"
import { DimentionsForm } from "./DimentionsForm";
import { useMultistepForm } from "../useMultistepForm";
import { ColorsForm } from "./ColorsForm";
import { UserForm } from "./UserForm";
import uniqid from "uniqid";

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
  isProject: false,
  perimeter: "",
  itemType: "default",
  id: uniqid(),
};

export function MainForm({
  cartItems,
  setCartItems,
  setIsPopupOpen,
  stay,
  setStay,
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
    setCartItems([...newList, data]);
    console.log(data);
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
      color={data.color}
      updateFields={updateFields}
    />,
    <DimentionsForm
      isValid={isValid}
      setIsValid={setIsValid}
      color={data.color}
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
    setIsPopupOpen(true);
    updateFields({ id: uniqid() });
    updateFields({ isProject: false });
    return goTo(0);
  }

  // useEffect(() => {
  //   if (!stay) {
  //     return goTo(0);
  //   }
  //   alert("stay changed");
  // }, [stay]);
  return (
    <>
      <div id="order"></div>
      <div className="border-2 rounded-xl mt-4 text-sm shadow-lg pb-7 pt-12 min-h-min relative max-w-[1400px] w-[90%]">
        <form onSubmit={onSubmit}>
          <div className="absolute top-1 text-center font-semibold text-lg right-10">
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className="flex w-11/12 h-12 items-center gap-3 justify-end mt-9 mr-9">
            {!isFirstStep && (
              <button
                disabled={!isValid}
                className="rounded-lg py-2 px-6 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
                type="button"
                onClick={back}
              >
                Back
              </button>
            )}
            {isLastStep ? (
              <button
                disabled={!isValid}
                onClick={(e) => addToCart(e)}
                className="rounded-lg py-2 px-6 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
              >
                Add to Cart
              </button>
            ) : (
              <button
                disabled={!isValid}
                className={
                  isFirstStep
                    ? "hidden"
                    : "rounded-lg py-2 px-6 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
                }
                type="submit"
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default MainForm;
