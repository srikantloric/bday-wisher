import React,{useEffect} from "react";
import "./GiftComponent.scss";
import {motion} from 'framer-motion'
import Aos from "aos";
import "aos/dist/aos.css"
import gift from "../assets/card.png"
const transition = {
    duration: 0.8,
    ease: [0.43, 0.13, 0.23, 0.96],
  };
function GiftComponent() {

  useEffect(()=>{

    Aos.init({
      duration:500
    });

  },[])


  return (
    <motion.div 
    initial={{ opacity: 0,scale:1,x:-999 }}
    animate={{ opacity: 1,scale:0.6,x:0 }}
    transition={transition}
    className="gift-coponent-container">
        <div class="row">
          <div class="col-12 mt-5 d-flex justify-content-center">
            <div class="box" data-aos="zoom-in">
              <div class="box-body">
                <img class="img" src={gift} />
                <div class="box-lid">
                  <div class="box-bowtie"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </motion.div>
  );
}

export default GiftComponent;
