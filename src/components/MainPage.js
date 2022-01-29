import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import "./Mainpage.scss";
import animationData from "../assets/loading.json";
import { motion } from "framer-motion";
import imageData from "../assets/assetes.png";
import decorationMaterial from "../assets/decor_assets.png";
import decorationMaterial2 from "../assets/bday_text.png";
import bdayGirlImage from "../assets/bday_girl_new_reduced.png";
import bdayCard from '../assets/bday_card.jpg'
import Confetti from "react-confetti";
import GiftComponent from "./GiftComponent";
import Aos from "aos";
import "aos/dist/aos.css";
const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLightOn, setIsLightOn] = useState(false);
  const [isConfettiShowing, setIsConfettiShowing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsConfettiShowing(false);
    }, 10000);
  }, [isLightOn]);

  const handleButtonClick = () => {
    setIsLightOn(true);
    setIsConfettiShowing(true);
    scrollDown(0);
  

  };

  const scrollDown = (val) => {
    window.scroll({
      top: val,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="mainpage_container">
      <div className={isLightOn ? "container on" : "container"}>
        {isConfettiShowing ? (
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        ) : null}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={transition}
        >
          {isLoading ? (
            <div className="loader">
      <Lottie options={defaultOptions} height={250} />
            </div>
      
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={transition}
                className="mainpage"
              >
                <img src={decorationMaterial} className="jhandi"></img>
                <img
                  src={imageData}
                  width={200}
                  width={200}
                  className="bday_text"
                ></img>
                <div className="light">
                  <div className="wire"></div>
                  <div className="bulb">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </motion.div>
        {isLoading ? null : (
          <div className="bday_girl_image">
            <img src={bdayGirlImage}></img>
          </div>
        )}
        {isLoading ? null : (
          <div>
            {isLightOn ? null : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={transition}
                className="switch-holder"
              >
                <div class="switch">
                  <button class="toggle" onClick={handleButtonClick}></button>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
      {isLightOn ? (
        <div className="gift_container">
          <h3 data-aos="slide-left">Tap To Open Your Gift</h3>
          <span className="head_underline"></span>
          <GiftComponent />
          <div className="scroller">
            <a class="scroll-down" onClick={()=>scrollDown(800)}></a>
          </div>
        </div>
      ) : null}
      {isLightOn?
      <div className="message_page" >
        <img className= "bday_card" data-aos="flip-down" src={bdayCard}/>
        <div className="content" data-aos="zoom-in-up">
          <h4><u>Please ignore this message</u></h4>
          <p>"Today is 30th Jan and it's your birthday, sorry for the bad interface and thank you for your time. I don't know why I have done this and why I was eagerly waiting to this special date.Finnaly aaj aa gya and I would like to wish Happiest Birthday Stuti. Stay Happy and stay healthy.
            Thank you"</p>
            <br/>
            <a href="tel:+1-531-233-2632"> Please Call : +1-531-233-2632</a>
            
        </div>
      </div>:null}
    </div>
    
  );
}

export default MainPage;
