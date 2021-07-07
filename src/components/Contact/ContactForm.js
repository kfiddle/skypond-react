import React, { useState, useEffect, useRef, useReducer } from "react";

import emailjs from "emailjs-com";

import styles from "./ContactForm.module.css";
import Wrapper from "../Wrapper";


const userId = "user_ziX5oSLNJRahUxs9dz2xC";
const serviceId = "service_whc7i1l";
const templateId = "template_xhux42i";

const initialFormState = { name: "", email: "", message: "" };

const inputReducer = (state, action) => {
  if (action.type === "name") {
    return { ...state, name: action.name };
  } else if (action.type === "email") {
    return { ...state, email: action.email };
  } else if (action.type === "message") {
    return { ...state, message: action.message };
  } else {
    return initialFormState;
  }
};


const ContactForm = (props) => {
  const [risen, setRisen] = useState(110);
  const [textGlow, setTextGlow] = useState(0);

  const [emptySubmission, setEmptySubmission] = useState(false);
  const [foneNumber, setfoneNumber] = useState("");


  const [inputs, setInputDispatcher] = useReducer(
    inputReducer,
    initialFormState
  );

  const name = useRef();
  const email = useRef();
  const phoneNumber = useRef();
  const message = useRef();

  const typedName = (event) =>
    setInputDispatcher({ type: "name", name: event.target.value });
  const typedEmail = (event) =>
    setInputDispatcher({ type: "email", email: event.target.value });
  const typedMessage = (event) =>
    setInputDispatcher({ type: "message", message: event.target.value });

  useEffect(() => {
    setTimeout(() => setRisen(10), 3000);
    setTimeout(() => setTextGlow(1.0), 4000);
  }, []);

  const formatNumber = (event) => {
    if (isNaN(event.nativeEvent.data) || event.target.value.length === 13) {
      return;
    }

    if (
      (event.target.value.length === 3 || event.target.value.length === 7) &&
      !isNaN(event.nativeEvent.data)
    ) {
      setfoneNumber((previous) => event.target.value + "-");
    } else {
      setfoneNumber((previous) => event.target.value);
    }
  };

  const submissionCheck = (event) => {
    setEmptySubmission(false);
  };

  const checkForDelete = (event) => {
    setEmptySubmission(false);
    if (
      event.code === "Backspace" &&
      foneNumber[foneNumber.length - 1] === "-"
    ) {
      setfoneNumber((previous) => previous.slice(0, -1));
    }
  };

  const submitInfo = () => {
    let contactInfo = {
      fullName: name.current.value,
      phoneNumber: phoneNumber.current.value,
      emailAddress: email.current.value,
      message: message.current.value,
    };

    let empty = true;

    for (let key in contactInfo) {
      if (contactInfo[key].length > 0) {
        empty = false;
      }
    }

    if (empty === true) {
      setEmptySubmission(true);
      return;
    }

    emailjs.send(serviceId, templateId, contactInfo, userId);
    console.log(serviceId, templateId, contactInfo, userId);

    setfoneNumber("");
    setInputDispatcher({ type: "reset" });
  };

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
              <input
                placeholder={"Name"}
                ref={name}
                onKeyDown={submissionCheck}
                onChange={typedName}
                value={inputs.name}
              ></input>
              <input
                placeholder={"Email Address"}
                ref={email}
                onKeyDown={submissionCheck}
                onChange={typedEmail}
                value={inputs.email}
              ></input>
              <input
                placeholder={"Phone"}
                ref={phoneNumber}
                onChange={formatNumber}
                onKeyDown={checkForDelete}
                value={foneNumber}
              ></input>
            </div>

            <div className={styles.right_column}>
              <textarea
                placeholder={"Message"}
                ref={message}
                onKeyDown={submissionCheck}
                onChange={typedMessage}
                value={inputs.message}
              ></textarea>
            </div>
          </div>

          <div className={styles.submit_button}>
            <button onClick={submitInfo} style={{ opacity: textGlow }}>Send Message</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactForm;
