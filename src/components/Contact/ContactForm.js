import React, { useState, useEffect } from "react";

import styles from "./Contact.module.css";

import Wrapper from "../Wrapper";

const ContactForm = (props) => {
  const [risen, setRisen] = useState(110);
  const [textGlow, setTextGlow] = useState(0);

  useEffect(() => {
    setTimeout(() => setRisen(10), 3000);
    setTimeout(() => setTextGlow(1.0), 4000);
  }, []);

  return (
    <Wrapper>
      <div className={styles.outermost_container}>
        <div
          className={styles.contact_form_container}
          style={{ transform: `translateY(${risen}vh)` }}
        >
          <div className={styles.text} style={{ opacity: textGlow }}>
            We provide solutions for your small landscape and gardening needs,
            <br></br>
            including spring and fall cleanup, raised garden beds, planting and
            maintenance. <br></br>Let us know what you have in mind!
          </div>

          <div className={styles.contact_form}>
            <div className={styles.left_column}>
              <input placeholder={"Name"}></input>
              <input placeholder={"Email Address"}></input>
              <input placeholder={"Phone"}></input>
            </div>

            <div className={styles.right_column}>
              <textarea placeholder={"Message"}></textarea>
            </div>
          </div>

          <div className={styles.submit_button}>
            <button style={{ opacity: textGlow }}>Send Message</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactForm;
