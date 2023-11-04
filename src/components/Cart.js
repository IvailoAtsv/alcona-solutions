import { AiOutlineClose } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";

export const Cart = ({ cartOpen, setCartOpen, cartItems }) => {
  const colors = {};

  return (
    <>
      {cartOpen ? (
        <div className="w-[450px] z-10 sm:h-[660px] h-screen bg-white fixed top-0 right-0 flex justify-between flex-col items-center shadow-lg rounded-l-md">
          <button
            className="fixed right-4 top-2"
            onClick={() => setCartOpen((prev) => false)}
          >
            <AiOutlineClose size={32} />
          </button>
          <h1 className="text-3xl font-semibold pt-3">Количка</h1>
          {/* cart */}
          <div className="flex flex-col justify-evenly items-center w-full h-full">
            {cartItems.map((item, i) => {
              return (
                <CartItem
                  key={i}
                  panelCount={item.panelCount}
                  color={item.color}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setCartOpen((prev) => true)}
          className="absolute top-2 right-8"
        >
          {" "}
          <BsFillCartCheckFill size={40} className="text-white" />
        </button>
      )}
    </>
  );
};

const CartItem = ({ panelCount, color }) => {
  return (
    <div>
      <p>
        {panelCount} броя {color} панeла
      </p>
    </div>
  );
};

// color: "",
// width: 210,
// height: 180,
// panelCount: 1,
// ledCaps: 0,
// solarCaps: 0,
// plasticCaps: 0,
