import React from "react";
import "./hero.scss";
import illustration from "./illustration-working.svg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-copy">
        <h1>More than just shorter links</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas delectus
          qui amet possimus distinctio maiores.
        </p>
        <a href="#shorten">Get Started</a>
      </div>

      <div className="hero-illutration">
        <img alt="" src={illustration} />
      </div>
    </div>
  );
};

export default Hero;
