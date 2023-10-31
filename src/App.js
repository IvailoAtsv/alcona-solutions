import { useState } from "react";
import Hero from "./components/Hero";
import { MainForm } from "./components/MainForm";
import { Cart } from "./components/Cart";

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  return (

    <div className="bg-background w-full overflow-x-hidden min-h-screen flex flex-col gap-3 justify-center items-center">
      <Hero />
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <MainForm />
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


