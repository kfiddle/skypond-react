import "./MainLogo.css";

import React, { useState } from "react";
import Bird from "../Bird/Bird";
import skyPondSansBird from "../../assets/skyPondSansBird.png";
import Background from "../background/Background";

const MainLogo = () => {
  const [moveBird, turnOnBird] = useState(false);

  // const scootBirdOver = (number) => {
  //   setTimeout(() => {
  //     setBirdPlace(number);
  //     number < 20 && scootBirdOver(number + 1);
  //     return number;

  //   }, 200);
  // };

  const scootBirdOver = () => turnOnBird(true)

  const turnOff = () => { 
    console.log('howdy');
    turnOnBird(false);
  };

  return (
    <div className="mainLogoContainer">
      <div className="mainLogo">
        <img
          className="skyPondLogo"
          id="skyPondLogo"
          src={skyPondSansBird}
        ></img>
        <Bird scoot={moveBird} turnOff={turnOff}></Bird>
        <h1 className="homePageTitle">farm and landscape</h1>
       
      </div>
    </div>
  );
};

export default MainLogo;
