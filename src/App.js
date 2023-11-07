import { forwardRef, useRef, useState } from "react";
import Hero from "./components/Hero";
import { MainForm } from "./components/MainForm";
import { About } from "./components/About";
import { Cart } from "./components/Cart";
import { FooterWithSitemap } from "./components/Footer";

import pic1 from "./images/plastic.jpg";
import pic2 from "./images/bottom.jpg";
import pic3 from "./images/kol-slice.jpg";
import pic4 from "./images/kol.jpg";
import pic5 from "./images/plank.jpg";
import pic6 from "./images/top.jpg";
import pic7 from "./images/fence2.png";
import Navigation from "./components/Nav/Navigation";
import { Popup } from "./components/Popup";
import { Carosel } from "./components/Carosel/Carosel";
import { Contact } from "./components/Contact";

const IMAGES = [
  { url: pic7, alt: "pic Five" },
  { url: pic4, alt: "pic Four" },
  { url: pic3, alt: "pic Three" },
  { url: pic1, alt: "pic One" },
  { url: pic2, alt: "pic Two" },
  { url: pic6, alt: "pic Five" },
  { url: pic5, alt: "pic Five" },
];

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="bg-white w-full overflow-x-hidden min-h-screen flex flex-col justify-center items-center">
      <Navigation
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Popup
        setIsPopupOpen={setIsPopupOpen}
        isPopupOpen={isPopupOpen}
        trigger={isPopupOpen}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />
      <Hero />
      <MainForm
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
      <Carosel />
      <About />
      <Contact />
      <FooterWithSitemap />
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
