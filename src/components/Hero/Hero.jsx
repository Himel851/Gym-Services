import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_img from "../../images/hero_image.png"
import hero_img_back from "../../images/hero_image_back.png"
import heart from "../../images/heart.png"
import calories from "../../images/calories.png"
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {

  const transition = {type: 'spring', duration: 3};
  const mobile = window.innerWidth<=768 ? true: false;


  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      {/* Left SIde */}
      <div className="left-h">
        <Header />

        {/* the best add */}
        <div className="the-best-ad">
          <motion.div
          initial={{left: mobile? "165px": "238px"}}
          whileInView={{left: '8px'}}
          transition={{...transition, type: "tween"}}
          >
          </motion.div>
          <span>The best fitness club in the town</span>
        </div>

        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>In here, We will help you to shape and build your ideal body and live up your life to fullest</span> 
          </div>
        </div>

        {/* figure */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter start={100} end={140} delay='4' preFix='+' />
            </span>
            <span>Expert coaches</span>
          </div>

          <div>
            <span>
            <NumberCounter start={800} end={1000} delay='4' preFix='+' />
            </span>
            <span>Member joined</span>
          </div>

          <div>
            <span>
            <NumberCounter start={0} end={50} delay='4' preFix='+' />
            </span>
            <span>Fitness programs</span>
          </div>
        </div>

        {/* hero button */}

        <div className="hero-buttons">
          <buttons className="btn">Get started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>

      </div>

      {/* Right SIde */}
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div 
        initial={{right: '-1rem'}}
        whileInView={{right: '4rem'}}
        transition={transition}
        className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero img */}
        <img src={hero_img} alt="" className="hero-img" />
        <motion.img 
        initial={{right: '11rem'}}
        whileInView={{right: '25rem'}}
        transition={transition}
        src={hero_img_back} alt="" className="hero-img-back" />
        {/* calories */}
        <motion.div 
        className="calories"
        initial={{right: '37rem'}}
        whileInView={{right: '28rem'}}
        transition={transition}
        >
          <img src={calories} alt="" />
          <span>Calories Burned</span>
          <span>220 kcal</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
