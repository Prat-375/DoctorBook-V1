import React from "react";
import { Button } from '../button/Button';
import { Button1 } from '../button/Button1';
import "./hero-section.styles.scss";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>We Care About You</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          BOOK APPOINTMENT
        </Button>
        <Button1 className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          DOWNLOAD APP <i className="far fa-play-circle" />
        </Button1>
        {/* <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
