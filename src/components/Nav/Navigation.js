import logo from "../../images/logo.png";
import { useState } from "react";
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
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setIsOpen(false);
    }
  };
  const handleHeroScroll = () => {
    const element = document.getElementById("hero");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };
  const handleTechnicalScroll = () => {
    const element = document.getElementById("technical");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setIsOpen(false);
    }
  };
  const handleFooterScroll = () => {
    const element = document.getElementById("footer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setIsOpen(false);
    }
  };
  const handleProductsScroll = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setIsOpen(false);
    }
  };
  const handleOrderScroll = () => {
    const element = document.getElementById("order");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setIsOpen(false);
    }
  };
  const handleGalleryScroll = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setIsOpen(false);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const navBtnStyles = `hover:underline transition duration-500 px-2`;

  return (
    <header className="header shadow-md">
      <div className="flex max-w-[1400px] lg:gap-0 w-[100%] items-center">
        <img src={logo} className="h-[20px] pr-[10px]" alt="Logo" />
        <div className="lg:ml-4 flex w-auto flex-col lg:gap-3 pr-4 lg:flex-row h-auto items-start">
          <div className="flex items-center justify-center gap-1 w-auto">
            <FiPhoneCall size={16} />
            <a
              target="_blank"
              href="tel:0893993141"
              className="text-sm font-bold"
            >
              0893993141
            </a>
          </div>
          <div className="flex items-center justify-center gap-1 w-auto">
            <AiOutlineMail size={16} />
            <p className="text-sm font-bold">office@alconasolutions.com</p>
          </div>
        </div>
        <div className="flex justify-end ml-auto">
          <input type="checkbox" id="check" checked={isOpen} readOnly />
          <label htmlFor="check" className="icons">
            <GiHamburgerMenu
              size={24}
              className="bx bx-menu"
              id="menu-open"
              onClick={() => setIsOpen(true)}
            />
            <AiOutlineClose
              className="bx bx-x"
              size={24}
              id="menu-close"
              onClick={() => setIsOpen(false)}
            />
          </label>
          <nav className="navbar ml-auto">
            <button className={navBtnStyles} onClick={() => handleHeroScroll()}>
              Начало
            </button>
            <button
              className={navBtnStyles}
              onClick={() => handleGalleryScroll()}
            >
              Галерия
            </button>
            {/* <button
              className={navBtnStyles}
              onClick={() => handleOrderScroll()}
            >
              Пoръчка
            </button> */}
            <button
              className={navBtnStyles}
              onClick={() => handleProductsScroll()}
            >
              Каталог
            </button>
            {/* <button
              className={navBtnStyles}
              onClick={() => handleAboutScroll()}
            >
              Информация
            </button> */}
            <button
              className={navBtnStyles}
              onClick={() => handleTechnicalScroll()}
            >
              Информация
            </button>

            <button
              className={navBtnStyles}
              onClick={() => handleFooterScroll()}
            >
              Контакти
            </button>
          </nav>
          <button
            className={navBtnStyles}
            onClick={() => setCartOpen((prev) => (prev = !prev))}
          >
            <div className="flex w-full px-4">
              <AiOutlineShoppingCart size={24} />
              {cartItems?.length ? (
                <div className="bg-red-500 w-[5px] self-end h-[5px] animate-ping rounded-full"></div>
              ) : (
                ""
              )}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Navigation;
