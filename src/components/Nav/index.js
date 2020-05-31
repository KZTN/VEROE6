import React from "react";
import { ReactComponent as Icon } from "../../assets/icon.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
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
                        <Link to="/">VERO E6</Link>
                    </div>
                </div>
                <div className="wrapper-section">
                    <div className="wrapper-item">
                        <FaBars size={24} color="#000" />
                    </div>
                </div>
                <div className="wrapper-section">
                    <div className="wrapper-item">
                        <Link to="/about">ABOUT</Link>
                    </div>
                    <div className="wrapper-item">
                        <a href="#howto">HOW IT WORKS</a>
                    </div>
                    <div className="wrapper-item">
                        <Link to="/impact">IMPACT</Link>
                    </div>
                    <div className="wrapper-item">
                        <a href="#contact">CONTACT</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
