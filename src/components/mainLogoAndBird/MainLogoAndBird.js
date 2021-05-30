import "./MainLogo.css";

import React, { useState } from "react";
import Bird from "../Bird/Bird";
import ContactForm from "../Contact/ContactForm";
import MainLogo from "./MainLogo";
import { unmountComponentAtNode } from "react-dom";

const MainLogoAndBird = () => {
  return (
    <div className="mainLogoContainer">
      <MainLogo />
      <Bird></Bird>
    </div>
  );
};

export default MainLogoAndBird;
