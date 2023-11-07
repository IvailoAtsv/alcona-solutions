import "./nav.css";
import "./queries.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
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
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <GiHamburgerMenu className="bx bx-menu" id="menu-open" />
        <AiOutlineClose className="bx bx-x" id="menu-close" />
      </label>

      <nav className="navbar">
        <button onClick={() => handleHeroScroll()}>Home</button>
        <button onClick={() => handleProductsScroll()}>Products</button>
        <button onClick={() => handleAboutScroll()}>About us</button>
        <button onClick={() => handleOrderScroll()}>Order</button>
        <button onClick={() => handleFooterScroll()}>Contacts</button>
        <button onClick={() => setCartOpen((prev) => (prev = !prev))}>
          <div className="flex w-full">
            <AiOutlineShoppingCart size={32} />
            {cartItems?.length ? (
              <div className="bg-red-500 w-[25px] self-end h-[25px] rounded-full">
                {cartItems.length}
              </div>
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
