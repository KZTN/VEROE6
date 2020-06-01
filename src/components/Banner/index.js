import React from "react";
import "./styles.scss";
import "./styles.scss";
export default function Banner() {
    return (
        <section id="banner">
            <header>conclusions spotted from our data</header>
            <div className="wrapper">
                <div className="wrapper-item">
                    <div className="item-header">Cities coverage</div>
                    <div className="item-data">3089</div>
                </div>
                <div className="wrapper-item">
                    <div className="item-header">Under critical situation</div>
                    <div className="item-data">21.53%</div>
                </div>
                <div className="wrapper-item">
                    <div className="item-header">general situation</div>
                    <div className="item-data">Critical</div>
                </div>
                <div className="wrapper-item">
                    <div className="item-header">focus of the epidemic</div>
                    <div className="item-data">southeast</div>
                </div>
            </div>
            <footer>
                values ​​estimates according to latest data
                retrieved(05/31/2020) about the pandemic inflicted on the
                territory monitored.
            </footer>
        </section>
    );
}
