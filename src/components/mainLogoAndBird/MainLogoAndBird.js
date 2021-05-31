import "./MainLogo.css";

import React, { useState } from "react";
import Bird from "../Bird/Bird";
import MainLogo from "./MainLogo";



const MainLogoAndBird = () => {
  const [birdRendered, setBirdRendered] = useState(true);

  setTimeout(()=> { setBirdRendered(false) }, 8000);

 

  return (
    <div className="mainLogoContainer">
      <MainLogo />
      { birdRendered && <Bird></Bird> }
    </div>
  );
};

export default MainLogoAndBird;
