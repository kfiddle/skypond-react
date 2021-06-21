import React, { useState } from "react";

import "./App.css";

import Background from "./components/background/Background";

import MainLogo from "./components/mainLogoAndBird/MainLogo";
import ContactForm from "./components/Contact/ContactForm";

function App() {
  return (
    <div>
      <Background />
      <MainLogo />
      <ContactForm />
    </div>
  );
}

export default App;
