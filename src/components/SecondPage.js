import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SecondPage.css";
import animationData from "../assets/panda_helper.json";
import animationData1 from "../assets/cute_panda.json";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import Typist from "react-typist";
const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

function SecondPage() {
  const [inputValue, setInputValue] = useState(" ");
  const [isCorrect, setIsCorrect] = useState(false);
  const [removeMessage, setRemoveMessage] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  function handleChange(e) {
    setInputValue(e.target.value);
    e.preventDefault();
    if (e.target.value.toLowerCase().trim() === "lol") {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={transition}
      className="containersecondpage"
    >
      {removeMessage ? null : (
        <motion.div
        initial={{ opacity: 0, scale: 0.5,x:-999 }}
        
        animate={{ opacity: 1, scale: 1,x:0 }}
        transition={transition}
         className="anim-container">
          <Lottie options={defaultOptions} width={250} />
        </motion.div>
      )}
      <br></br>

      {removeMessage ? (
        <div className="typist_secondPage">
          <Typist
            cursor={{
              show: true,
              blink: true,
              element: "",
              hideWhenDone: true,
              hideWhenDoneDelay: 1,
            }}
            onTypingDone={() => {
              setRemoveMessage(false);
            }}
          >
            <Typist.Delay ms={800} />
            <p
              className="my-custom-class-four"
              style={{ margin: "20px", textAlign: "center" }}
            >
              Hey, Welcome to The Digital World Of Celebrations.
            </p>
            <Typist.Backspace count={50} delay={500} />
            <p
              className="my-custom-class-four"
              style={{ margin: "20px", textAlign: "center" }}
            >
              We need some credentials to proceed further.
            </p>
            <p
              className="my-custom-class-four"
              style={{ margin: "20px", textAlign: "center" }}
            >
              Please provide it.
            </p>
          </Typist>
        </div>
      ) : null}

      {removeMessage ? null : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          className="inputcontainer"
        >
          <h2>💬 " Secret Code "</h2>
          <input
            className="passwordInput"
            type="text"
            placeholder="your reply.."
            onChange={handleChange}
            value={inputValue}
          ></input>
          <p>
            after your correct reply it will let you to procced next and button
            will be enabled.
          </p>
          <Link
          className={isCorrect ? "loginBtn" : "disabled-link"}
          to="/third_page"
        >
          Go
        </Link>
        </motion.div>
      )}
    </motion.div>
  );
}
export default SecondPage;
