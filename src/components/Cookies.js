import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import cookie from "../images/cookie.webp";

export const Cookies = ({ setShowPrivacy }) => {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localStorage.getItem("showCookie") !== null) setShowCookie(true);
    }, 1000); // Show cookie component after 1 second

    return () => clearTimeout(timer);
  }, []);

  const cookieAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: showCookie ? 1 : 0 },
    config: { duration: 500 },
  });

  return (
    <>
      {showCookie && (
        <animated.div
          style={cookieAnimation}
          className="min-w-[200px] md:min-w-[300px] max-w-[20%] md:max-w-[30%] lg:max-w-[40%] min-h-min rounded-md bg-white fixed bottom-10 shadow-lg right-10 z-[100]"
        >
          <div className="w-full min-w-min bg-white rounded-lg shadow-md p-6">
            <img
              className="w-[100px] md:w-[150px] h-auto"
              src={cookie}
              alt="cookie"
            />
            <span className="w-full block leading-normal text-gray-800 text-md mb-3">
              Използваме бисквитки (cookies), за да подобрим Вашия престой и
              нашите услуги. Разглеждайки съдържанието на сайта Вие се
              съгласявате с използването им.
            </span>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <a
                className="text-xs text-gray-400 mr-1 mb-2 md:mb-0 hover:text-gray-800"
                href="#"
                onClick={() => setShowPrivacy(true)}
              >
                Прочетете още
              </a>
              <div className="w-full md:w-1/2">
                <button
                  onClick={() => {
                    localStorage.setItem("showCookie", false);
                    setShowCookie(false);
                  }}
                  type="button"
                  className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md"
                >
                  Приемам
                </button>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </>
  );
};
