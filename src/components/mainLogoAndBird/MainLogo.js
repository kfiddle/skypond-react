import React, { useState, useEffect } from "react";

import styles from "./MainLogo.module.css";

import skyPondSansBird from "../../assets/skyPondSansBird.png";
import Bird from "../Bird/Bird";

const MainLogo = () => {
  const [logoOpacity, setLogoOpacity] = useState(1);
  const [birdRendered, setBirdRendered] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLogoOpacity(0);
    }, 2000);

    setTimeout(() => {
      setBirdRendered(false);
    }, 8000);
  }, []);

  return (
    <div className={styles.mainLogoContainer}>
      <div className={styles.mainLogo} style={{ opacity: `${logoOpacity}` }}>
        <img className={styles.skyPondLogo} src={skyPondSansBird}></img>
        {birdRendered && <Bird />}
        <h1 className={styles.homePageTitle}>farm and landscape</h1>
      </div>
    </div>
  );
};

export default MainLogo;
