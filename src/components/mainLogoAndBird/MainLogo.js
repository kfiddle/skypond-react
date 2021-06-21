import React, { useState, useEffect } from "react";

import styles from "./MainLogo.css";

import skyPondSansBird from "../../assets/skyPondSansBird.png";
import Bird from '../Bird/Bird';

const MainLogo = () => {
  const [logoOpacity, setLogoOpacity] = useState(1);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLogoOpacity(0);
  //   }, 2000);
  // }, []);

  return (
    <div className="mainLogo" style={{ opacity: `${logoOpacity}` }}>
      <img className="skyPondLogo" id="skyPondLogo" src={skyPondSansBird}></img>
      <Bird />
      <h1 className="homePageTitle">farm and landscape</h1>
    </div>
  );
};

export default MainLogo;
