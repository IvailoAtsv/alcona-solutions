import React, { useEffect, useState, useRef } from "react";
import { useSpring, animated } from 'react-spring';
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
  pickUp: false,
  isProject: false,
  perimeter: "",
  itemType: "default",
  id: uniqid(),
  price: 0,
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

  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const slideAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0px)' : 'translateX(400px)',
    config: { tension: 0, friction: 20 },
    immediate: !isVisible,
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.3 });

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <>
      <h1 className="mb-12 text-3xl font-semibold border-b-4 border-footer">
        Направете Поръчка
      </h1>
      <animated.div
        ref={componentRef}
        style={{
          ...slideAnimation,
          transition: 'opacity 0.5s, transform 0.5s',
        }}
        id="order"
        className="rounded-xl mt-4 text-sm shadow-lg pb-12 pt-8 min-h-min relative max-w-[1400px] w-[90%]"
      >
        <form onSubmit={onSubmit}>
          <div className="absolute top-1 text-center font-semibold text-lg right-10">
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className="flex mt-16 w-11/12 min-h-12 items-center gap-3 px-3 pt-6 justify-end ml-9">
            {!isFirstStep && (
              <button
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
      </animated.div>
    </>
  );
}

export default MainForm;
