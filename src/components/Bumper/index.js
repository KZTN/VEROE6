import React from "react";
import "./styles.scss";
import Cover from "../../assets/cover.png";
export default function Bumper() {
    return (
        <section id="bumper">
            <div className="left-content">
                <img src={Cover} alt="" srcset="" />
            </div>
            <div className="right-content">
                <header>
                    VERO E6 is an ML interface that aims to reduce the contagion
                    of <span>threatened by COVID-19 in Brazil</span>
                </header>
                <div className="about">
                    VERO E6 is intended for government agencies, health agencies
                    and the scientific community to advance preventive measures
                    and save lives.
                </div>
            </div>
        </section>
    );
}
