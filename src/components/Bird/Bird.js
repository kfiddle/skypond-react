import React, { useState, useEffect } from "react";

import Wrapper from "../Wrapper";
import flyingBird0 from "../../assets/flyingBird/heron_inFlight-0.png";
import flyingBird1 from "../../assets/flyingBird/heron_inFlight-1.png";
import flyingBird2 from "../../assets/flyingBird/heron_inFlight-2.png";
import flyingBird3 from "../../assets/flyingBird/heron_inFlight-3.png";
import flyingBird4 from "../../assets/flyingBird/heron_inFlight-4.png";
import flyingBird5 from "../../assets/flyingBird/heron_inFlight-5.png";
import flyingBird6 from "../../assets/flyingBird/heron_inFlight-6.png";
import flyingBird7 from "../../assets/flyingBird/heron_inFlight-7.png";
import flyingBird8 from "../../assets/flyingBird/heron_inFlight-8.png";
import flyingBird9 from "../../assets/flyingBird/heron_inFlight-9.png";
import flyingBird10 from "../../assets/flyingBird/heron_inFlight-10.png";
import flyingBird11 from "../../assets/flyingBird/heron_inFlight-11.png";
import flyingBird12 from "../../assets/flyingBird/heron_inFlight-12.png";
import flyingBird13 from "../../assets/flyingBird/heron_inFlight-13.png";

import styles from "./Bird.module.css";

const birds = [
  flyingBird0,
  flyingBird1,
  flyingBird2,
  flyingBird3,
  flyingBird4,
  flyingBird5,
  flyingBird6,
  flyingBird7,
  flyingBird8,
  flyingBird9,
  flyingBird10,
  flyingBird11,
  flyingBird12,
  flyingBird13,
];

const Bird = (props) => {
  let [birdStyles, setBirdStyles] = useState([0, 0, 1]);
  let [imageNumber, setImageNumber] = useState(birds[0]);

  useEffect(() => {
    setBirdStyles([40, 15, 0]);

    const flyAway = (i, birdNumber) => {
      if (birdNumber > 12) {
        birdNumber = 8;
      }

      setTimeout(() => {
        setImageNumber(birds[birdNumber]);
      }, 110 * i);

      birdNumber++;
      i++;

      if (i < 35) {
        flyAway(i, birdNumber);
      }
    };

    flyAway(0, 0);
  }, []);



  return (
    <Wrapper>
      <img
        className={styles.bird}
        src={imageNumber}
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
