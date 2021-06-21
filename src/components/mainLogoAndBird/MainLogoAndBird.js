import "./MainLogo.css";

import React, { useState, useEffect } from "react";
import Bird from "../Bird/Bird";
import MainLogo from "./MainLogo";

const MainLogoAndBird = () => {
  const [birdRendered, setBirdRendered] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setBirdRendered(false);
  //   }, 8000);
  // }, []);

  return (
    <div className="mainLogoContainer">
      <MainLogo />
      {/* {birdRendered && <Bird />} */}
    </div>
  );
};

export default MainLogoAndBird;
