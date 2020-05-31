import React from "react";
import NASASpaceApps from "../../assets/NASASpaceApps.png";
import Dadosgov from "../../assets/dadosgov.png";
import Brio from "../../assets/br-io.png";
import NASA from "../../assets/NASA.png";

import Apple from "../../assets/apple.png";
import "./styles.scss";

export default function Contributors() {
  return (
    <section id="contributors">
      <header>Who supports this project</header>
      <div className="wrapper">
        <div className="wrapper-section">
          <div className="wrapper-title">Team</div>
          <div className="wrapper-items">
            <div className="wrapper-item">Alex Robert</div>
            <div className="wrapper-item">Ana Gontijo</div>
            <div className="wrapper-item">Gardênia</div>
            <div className="wrapper-item">Kaio César</div>
            <div className="wrapper-item">Mariana Bittencourt</div>
            <div className="wrapper-item">Thais Veriato</div>
          </div>
        </div>
        <div className="wrapper-section">
          <div className="wrapper-title">Initiative</div>
          <div className="wrapper-items">
            <div className="wrapper-item">
              <div className="frame">
                <a
                  href="http://spaceappsbrazil.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Hackathon NASA Space Apps"

                >
                  <img src={NASASpaceApps} alt="" srcset="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-section">
          <div className="wrapper-title">Data Source</div>
          <div className="wrapper-items">
            <div className="wrapper-item">
            <a
                href="https://brasil.io/dataset/covid19/"
                target="_blank"
                rel="noopener noreferrer"
                title="brasil.io"
              >
              <img src={Brio} alt="" srcset="" />
              </a>
            </div>
            <div className="wrapper-item">
              <a
                href="https://sedac.ciesin.columbia.edu/"
                target="_blank"
                rel="noopener noreferrer"
                title="NASA"

              >
                <img src={NASA} alt="" srcset="" />
              </a>
            </div>
            <div className="wrapper-item">
              <a
                href="http://www.dados.gov.br/"
                target="_blank"
                rel="noopener noreferrer"
                title="dados.gov"

              >
                <img src={Dadosgov} alt="" srcset="" />
              </a>
            </div>
            <div className="wrapper-item">
              <a
                href="https://www.apple.com/covid19/mobility"
                target="_blank"
                rel="noopener noreferrer"
                title="apple"

              >
                <img src={Apple} alt="" srcset="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
