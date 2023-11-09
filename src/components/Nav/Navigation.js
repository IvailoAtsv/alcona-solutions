import "./nav.css";
import "./queries.css";
import { FiPhoneCall } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineMail,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";

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
    <header className="header ">
      <div className="flex max-w-[1400px] w-full items-center">
        <div className="lg:ml-4 flex w-auto flex-col lg:gap-3 lg:flex-row h-auto items-start">
          <div className="flex items-center justify-center gap-1  w-auto">
            <FiPhoneCall size={16} />
            <a href="tel:0893993129" className="text-sm font-bold">
              0893993129
            </a>
          </div>
          <div className="flex items-center justify-center gap-1 w-auto">
            <AiOutlineMail size={16} />
            <p className="text-sm font-bold">office@alconasolutions.com</p>
          </div>
        </div>
        <div className="flex justify-end ml-auto">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="icons">
            <GiHamburgerMenu className="bx bx-menu" id="menu-open" />
            <AiOutlineClose className="bx bx-x" id="menu-close" />
          </label>
          <div className="flex justify-baseline items-start"></div>
          <nav className="navbar ml-auto">
            <button
              className="hover:font-bold"
              onClick={() => handleHeroScroll()}
            >
              Home
            </button>
            <button
              className="hover:font-bold"
              onClick={() => handleProductsScroll()}
            >
              Products
            </button>
            <button
              className="hover:font-bold"
              onClick={() => handleAboutScroll()}
            >
              About us
            </button>
            <button
              className="hover:font-bold"
              onClick={() => handleOrderScroll()}
            >
              Order
            </button>
            <button
              className="hover:font-bold"
              onClick={() => handleFooterScroll()}
            >
              Contacts
            </button>
            <button
              className="hover:font-bold"
              onClick={() => setCartOpen((prev) => (prev = !prev))}
            >
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
        </div>
      </div>
    </header>
  );
};
export default Navigation;
