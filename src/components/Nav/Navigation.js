import "./nav.css";
import "./queries.css";
import { FiPhoneCall } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiFillPhone,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { forwardRef } from "react";

const Navigation = ({ cartOpen, setCartOpen, cartItems }) => {
  const handleAboutScroll = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleHeroScroll = () => {
    const element = document.getElementById("hero");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleFooterScroll = () => {
    const element = document.getElementById("footer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleProductsScroll = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleOrderScroll = () => {
    const element = document.getElementById("order");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <p className="flex self-center gap-1 ml-5 w-auto mr-auto">
        <FiPhoneCall size={20} />
        <p className="text-md font-bold">0893993129</p>
      </p>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <GiHamburgerMenu className="bx bx-menu" id="menu-open" />
        <AiOutlineClose className="bx bx-x" id="menu-close" />
      </label>
      <div className="flex justify-baseline items-start"></div>
      <nav className="navbar">
        <button onClick={() => handleHeroScroll()}>Home</button>
        <button onClick={() => handleProductsScroll()}>Products</button>
        <button onClick={() => handleAboutScroll()}>About us</button>
        <button onClick={() => handleOrderScroll()}>Order</button>
        <button onClick={() => handleFooterScroll()}>Contacts</button>
        <button onClick={() => setCartOpen((prev) => (prev = !prev))}>
          <div className="flex w-full pr-4">
            <AiOutlineShoppingCart size={32} />
            {cartItems?.length ? (
              <div className="bg-red-500 w-[5px] self-end h-[5px] animate-ping rounded-full"></div>
            ) : (
              ""
            )}
          </div>
        </button>
      </nav>
    </header>
  );
};
export default Navigation;
