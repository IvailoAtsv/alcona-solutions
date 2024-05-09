import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

export const Technical = () => {
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const slideAnimation = useSpring({
    opacity: isVisible ? 1 : 1,
    transform: isVisible ? "translateX(0px)" : "translateX(0px)",
    config: { tension: 100, friction: 20 },
    immediate: !isVisible,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 },
    );

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
    <animated.div
      ref={componentRef}
      style={slideAnimation}
      id="technical"
      className="w-full min-h-[80vh] mt-3 flex-col flex gap-3 p-1 justify-evenly bg-left bg-fixed items-center bg-pen bg-no-repeat bg-cover"
    >
      <h1 className="bg-cardBg4 my-3 w-[90%] max-w-[1400px] text-center text-white p-4 backdrop-blur-md rounded-lg font-bold text-3xl">
        Teхнически характеристики
      </h1>
      <div className="w-[90%] bg-cardBg4 px-4 py-2 backdrop-blur-md rounded-md h-full max-w-[1400px] justify-center items-center gap-2">
        <InfoPair
          main="Тип:"
          description="Оградно пано от дървесно-полимерен композит"
        />
        <InfoPair main="Височина:" description="Между 0.60 и 2.00 метра" />
        <InfoPair
          main="Основна дължина:"
          description="1.86 метра / Реална дължина: 1.86
          метра"
        />
        <InfoPair
          main="Сечение на хоризонталните елементи:"
          description="160 x 20 мм, правоъгълно"
        />
        <InfoPair
          main="Сечение на стълбовете:"
          description="100 х 100 мм, квадратно"
        />
        <InfoPair
          main="Декоративни елементи на системата:"
          description="Завършващи релси и алуминиеви
          лайстни"
        />
        <InfoPair
          main="Основни Цветове:"
          description="Светло кафяво, Клен, Кестеняво кафяво, Пясъчно кафяво,
          Тъмно кафяво, Черно/Антрацит"
        />
        <InfoPair
          main="Премиум Цветове:"
          description="Тиик, Светло сиво, Розово дърво, Зелено"
        />
      </div>
    </animated.div>
  );
};

const InfoPair = ({ main, description }) => {
  return (
    <div className="flex bg-cardBg22 my-3 px-2 py-3 flex-col lg:flex-row rounded-lg text-white font-semibold">
      <p className="mr-auto lg:max-w-[40%]">{main}</p>
      <p className="ml-auto lg:max-w-[55%]">{description}</p>
    </div>
  );
};
