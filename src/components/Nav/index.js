import React from "react";
import { ReactComponent as Icon } from "../../assets/icon.svg";
import "./styles.scss";
export default function Nav() {
  return (
    <nav>
      <div className="wrapper">
        <div className="wrapper-section">
          <div className="logo">
            <div className="icon">
              <Icon />
            </div>
            <a href="#">VERO E6</a>
          </div>
        </div>
        <div className="wrapper-section">
          <div className="wrapper-item">
            <a href="#about">ABOUT</a>
          </div>
          <div className="wrapper-item">
            <a href="#how">HOW IT WORKS</a>
          </div>
          <div className="wrapper-item">
            <a href="#impact">IMPACT</a>
          </div>
          <div className="wrapper-item">
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
