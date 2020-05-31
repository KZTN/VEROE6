import React, { useEffect } from "react";
import Nav from "../../components/Nav";
import HeaderImpact from "../../components/HeaderImpact";
import HowTo from "../../components/HowTo";

import "./styles.scss";

export default function Impact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section id="impact">
            <Nav />
            <HeaderImpact />
            <div className="text">
                <div className="left-content">
                    <span>
                        Providing a specific study to predict possible points of
                        contagion, which would reduce the mortality rate and
                        occupancy of ICU beds, which is a major problem today
                        and will help many people.
                    </span>
                </div>
                <div className="right-content"></div>
            </div>
            <HowTo />
        </section>
    );
}
