import React from "react";
import Nav from "../../components/Nav";
import HeaderImpact from "../../components/HeaderImpact";

import "./styles.scss";

export default function Impact() {
    return (
        <section id="impact">
            <Nav />
            <HeaderImpact />
            <div className="text">
                <div className="left-content">
                    <span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dolore quisquam, soluta totam nam quasi ratione
                        velit porro facilis, voluptatum neque cupiditate sint
                        vel maiores iste. <br/><br/>Dolorem reprehenderit iusto quam eius!
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dolore quisquam, soluta totam nam quasi ratione
                        velit porro facilis, voluptatum neque cupiditate sint
                        vel maiores iste. Dolorem reprehenderit iusto quam eius!
                    </span>
                </div>
                <div className="right-content"></div>
            </div>
        </section>
    );
}
