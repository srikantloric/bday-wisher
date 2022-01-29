import React,{useState} from 'react';
import { Link } from "react-router-dom";
import Typist from "react-typist";
import Confetti from 'react-confetti'
import './LaunchPage.css'
import {motion} from 'framer-motion'

const transition = {
  duration:0.6,ease:[0.43,0.13,0.23,0.96]
}

function LandingPage() {
    const [isActive,setIsActive] = useState(false);


  return ( 
  <motion.div
  exit={{opacity:0}}
  transition={transition}
  className="container">
      {isActive?
      <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
    />:null}
  <div className="innerContainer">

    <Typist
      cursor={{
        show: true,
        blink: true,
        element: "|",
        hideWhenDone: true,
        hideWhenDoneDelay: 1,
      }}
      onTypingDone={() => {
       
       setTimeout(() => { setIsActive(true)}, 1000);
      }}
    >
      <span className="my-custom-class"> Hey ! </span>
      <Typist.Backspace count={8} delay={900} />
      <span className="my-custom-class"> Stuti </span>
      <Typist.Delay ms={1000} />
      <br />
      <p className='my-custom-class-four'> It's your day princess ❤️ </p>
      <Typist.Delay ms={1000} />
      <br />
      <p className='my-custom-class-three'>
       May you have all the joy your heart can hold, all the smiles a day can bring, all the blessings a life can unfold, may you get the world's best in everything.
      </p>
      <br />
      <Typist className="my-custom-class-two">
        Happy Birthday Dear
        <br />
        🥳
      </Typist>
    </Typist>
  </div>
  <Link
   
    to="/second_page"
    className={
        isActive
        ? "button content_visible"
        : "button content_hide"
    }
    type="button"
  >
    Click Me
  </Link>
</motion.div>)
}

export default LandingPage;
