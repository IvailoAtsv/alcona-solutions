import { AiOutlineArrowLeft } from "react-icons/ai";

export const Popup = ({
  trigger,
  children,
  setIsPopupOpen,
  setCartOpen,
  setStay,
}) => {
  const btnStyle =
    "rounded-lg py-2 w-full px-2 whitespace-nowrap lg:px-6 border-2 self-center font-bold duration-500 border-black hover:bg-black hover:text-white";

  const handleClick = () => {
    setCartOpen(true);
    setIsPopupOpen(false);
  };
  const handleClose = () => {
    setStay((prev) => (prev = false));
    setIsPopupOpen(false);
  };

  return trigger ? (
    <div className="w-full min-h-screen fixed top-0 left-0 z-50 flex justify-center items-center bg-cardBg2">
      <div className="lg:min-w-[40%] max-w-[500px] h-auto min-h-[20vh] text-lg font-semibold w-[90%] rounded-xl p-4 flex flex-col justify-evenly items-center bg-white">
        <div className="flex flex-col">
          <p className="text-3xl text-center pb-5">
            Успешно добавено в количка
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className={btnStyle} onClick={handleClick}>
            Количка
          </button>
          <button className={btnStyle} onClick={handleClose}>
            Продължете пазаруванто
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
