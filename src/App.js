import React, { useState } from "react";

import "./App.css";

import Background from "./components/background/Background";
import MainLogoAndBird from "./components/mainLogoAndBird/MainLogoAndBird";
import ContactForm from "./components/Contact/ContactForm";

function App() {
  return (
    <div>
      <Background />
      <MainLogoAndBird />
      <ContactForm />
    </div>
  );
}

export default App;
