import React from "react";
import Impact from "../../assets/impact.jpg";
import "./styles.scss";
export default function HeaderImpact() {
    return (
        <section id="headerimpact">
            <div className="content">
                <div className="left-content">
                    <header>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sit consequuntur voluptatum fuga! Eius iste culpa
                        ab amet sint dicta odit ad accusantium ullam dolorem
                        reiciendis beatae odio, rem a quaerat!
                    </header>
                </div>
                <div className="right-content">
                    <img src={Impact} alt="" srcset="" />
                </div>
            </div>
        </section>
    );
}
