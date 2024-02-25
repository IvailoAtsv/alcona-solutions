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
import { Technical } from "./components/Technical";
import { CaroselGallery } from "./components/Carosel/CaroselGallery";
import { Cookies } from "./components/Cookies";
import { Privacy } from "./components/Privacy";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [stay, setStay] = useState(false);
  const [fancy, setFancy] = useState(false);
  const [showCookie, setShowCookie] = useState(true);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div className="bg-white w-full overflow-x-hidden min-h-screen flex flex-col justify-center items-center">
      <Navigation
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Privacy showPrivacy={showPrivacy} setShowPrivacy={setShowPrivacy} />
      <Cookies
        showPrivacy={showPrivacy}
        setShowPrivacy={setShowPrivacy}
        showCookie={showCookie}
        setShowCookie={setShowCookie}
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
      <CaroselGallery />
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
      <FooterWithSitemap
        showPrivacy={showPrivacy}
        setShowPrivacy={setShowPrivacy}
        fancy={fancy}
        setFancy={setFancy}
      />
    </div>
  );
}

export default App;
