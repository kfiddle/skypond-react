import React, { useState, useEffect } from "react";

import Wrapper from "../Wrapper";

import styles from "./Bird.module.css";



const Bird = () => {
  let [birdStyles, setBirdStyles] = useState([0, 0, 1]);
  let [imageNumber, setImageNumber] = useState(0);

  useEffect(() => {
    const flyAway = (i, birdNumber) => {
      if (birdNumber > 12) {
        birdNumber = 8;
      }

      setTimeout(() => {
        setImageNumber(birdNumber);
      }, 110 * i);

      birdNumber++;
      i++;

      if (i < 35) {
        flyAway(i, birdNumber);
      }
    };

    setTimeout(() => {
      flyAway(0, 0);
      setBirdStyles([40, 15, 0]);
    }, 2000);
  }, []);

  return (
    <Wrapper>
      <img
        className={styles.bird}
        src={`images/flyingBird/heron_inFlight-${imageNumber}.png`}
        style={{
          transform: `translate(${birdStyles[0]}vw, -${birdStyles[1]}vh)`,
          opacity: `${birdStyles[2]}`,
        }}
        alt="bird"
      ></img>
    </Wrapper>
  );
};

export default Bird;
