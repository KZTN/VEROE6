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
          A VERO E6 é uma interface ML que visa reduzir o contágio de
          <span> COVID-19 no Brasil</span>
        </header>
        <div className="about">
          prevendo possíveis focos de contágio a partir de dados demográficos e
          modelos epidemiológicos.
        </div>
      </div>
    </section>
  );
}
