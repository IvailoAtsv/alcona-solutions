import { forwardRef, useRef, useState } from "react";
import Hero from "./components/Hero";
import { MainForm } from "./components/MainForm";
import { About } from "./components/About";
import { Cart } from "./components/Cart";
import { FooterWithSitemap } from "./components/Footer";
import Navigation from "./components/Nav/Navigation";
import { Popup } from "./components/Popup";
import { Carosel } from "./components/Carosel/Carosel";
import { Contact } from "./components/Contact";
import { Gallery } from "./components/Gallery";
import { Technical } from "./components/Technical";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [stay, setStay] = useState(false);
  const [fancy, setFancy] = useState(false);

  return (
    <div className="bg-white w-full overflow-x-hidden min-h-screen flex flex-col justify-center items-center">
      <Navigation
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Popup
        stay={stay}
        setStay={setStay}
        setIsPopupOpen={setIsPopupOpen}
        isPopupOpen={isPopupOpen}
        trigger={isPopupOpen}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />
      <Hero />
      <MainForm
        stay={stay}
        setStay={setStay}
        setIsPopupOpen={setIsPopupOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Cart
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Carosel
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setIsPopupOpen={setIsPopupOpen}
        isPopupOpen={isPopupOpen}
      />
      <About />
      <Contact />
      <Technical />
      <FooterWithSitemap fancy={fancy} setFancy={setFancy} />
    </div>
  );
}

export default App;

// на всеки панел по 1 кол
// на края 1 бонус кол

// по 1 лампа на кол
// +1 накрая

// iron fastener по 1 на кол
// +1 накраяю

// на кол по 4 анкерни болта

// алуминиеви лайсни top bottom по 1 на панел
