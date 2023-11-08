import { AiOutlineArrowLeft } from "react-icons/ai";

export const Popup = ({
  trigger,
  children,
  setIsPopupOpen,
  setCartOpen,
  setStay,
}) => {
  const btnStyle =
    "rounded-lg py-2 px-6 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white";

  const handleClick = () => {
    setCartOpen(true);
    setIsPopupOpen(false);
  };
  const handleClose = () => {
    setStay((prev) => (prev = false));
    setIsPopupOpen(false);
  };
  const handleStay = () => {
    setStay((prev) => (prev = true));
    setIsPopupOpen(false);
  };

  return trigger ? (
    <div className="w-full h-screen fixed top-0 left-0 z-50 flex justify-center items-center bg-cardBg2">
      <div className="sm:min-w-[40%] w-auto h-auto min-h-[20vh] text-lg font-semibold min-w-[90%] rounded-xl p-4 flex flex-col justify-evenly items-center bg-white">
        <div className="felx flex-col">
          <p>{children}</p>
          <p className="text-3xl text-center pb-5">
            Успешно добавено в количка
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className={btnStyle} onClick={handleClick}>
            Количка
          </button>
          {/* <button className={btnStyle} onClick={handleStay}>
            Продължете със същия цвят
          </button> */}
          <button className={btnStyle} onClick={handleClose}>
            Обратно
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
