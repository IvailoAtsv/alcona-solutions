export const Popup = ({ trigger, children, setIsPopupOpen, setCartOpen }) => {
  const btnStyle =
    "rounded-lg py-2 px-6 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white";

  const handleClick = () => {
    setCartOpen(true);
    setIsPopupOpen(false);
  };

  return trigger ? (
    <div className="w-full h-screen fixed top-0 left-0 z-50 flex justify-center items-center bg-cardBg2">
      <div className="sm:w-[40%] text-lg font-semibold w-[90%] rounded-xl p-4 flex flex-col justify-evenly items-center h-[20vh] bg-white">
        <div className="felx flex-col">
          <p>{children}</p>
          <p>Успешно добавено в количка</p>
        </div>
        <div className="flex gap-3">
          <button className={btnStyle} onClick={handleClick}>
            Количка
          </button>
          <button className={btnStyle} onClick={() => setIsPopupOpen(false)}>
            Затваряне
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
