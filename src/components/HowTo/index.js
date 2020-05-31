import React from "react";
import { ReactComponent as Hospital } from "../../assets/svgs/hospital.svg";
import { ReactComponent as Virus } from "../../assets/svgs/virus.svg";

import "./styles.scss";

export default function HowTo() {
  return (
    <section id="howto">
      <header>
        Inicie um trabalho científico e receba ajuda de forma fácil e rápida
      </header>
      <div className="wraper">
        <div className="wraper-item">
          <div className="item-img">
            <Hospital />
          </div>
          <div className="item-header">1 - Começe</div>
          <div className="item-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="wraper-item">
          <div className="item-img">
            <Virus />
          </div>
          <div className="item-header">2 - Junte-se</div>
          <div className="item-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="wraper-item">
          <div className="item-img">
            <Hospital />
          </div>
          <div className="item-header">3 - Aprenda</div>
          <div className="item-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="wraper-item">
          <div className="item-img">
            <Virus />
          </div>
          <div className="item-header">4 - Mentoria</div>
          <div className="item-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
      <div className="howto-actions">
        <button>Crie uma conta agora</button>
      </div>
    </section>
  );
}
