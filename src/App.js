import { useState } from "react";
import Hero from "./components/Hero";
import { MainForm } from "./components/MainForm";

function App() {
  return (

    <div className="bg-background w-full overflow-x-hidden h-screen flex flex-col gap-3 justify-center items-center">
      <Hero />
      <MainForm />
    </div>
  );
}

export default App;
