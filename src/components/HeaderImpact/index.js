import React from "react";
import Impact from "../../assets/impact2.jpg";
import Emoji from "../../interfaces/emoji";
import "./styles.scss";
export default function HeaderImpact() {
    return (
        <section id="headerimpact">
            <div className="content">
                <div className="left-content">
                    <header>
                        <span>
                            Predicting outbreaks of possible infectious areas,
                            contributing to rapid applications of public health,
                            and disseminating information to society
                        </span>
                        <strong>
                            = saving lifes <Emoji symbol="❤️" />
                        </strong>
                    </header>
                </div>
                <div className="right-content">
                    <img src={Impact} alt="" srcset="" />
                </div>
            </div>
        </section>
    );
}
