import React from "react";
import {Link} from 'react-router-dom'
import { ReactComponent as Hospital } from "../../assets/svgs/hospital.svg";
import { ReactComponent as Earth } from "../../assets/svgs/earth.svg";
import { ReactComponent as SearchBar } from "../../assets/svgs/search-bar.svg";
import { ReactComponent as Alarm } from "../../assets/svgs/alarm.svg";

import "./styles.scss";

export default function HowTo() {

    return (
        <section id="howto">
            <header>How it works</header>
            <div className="wraper">
                <div className="wraper-item">
                    <div className="item-img">
                        <SearchBar />
                    </div>
                    <div className="item-header">1 - Search</div>
                    <div className="item-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                </div>
                <div className="wraper-item">
                    <div className="item-img">
                        <Earth />
                    </div>
                    <div className="item-header">2 - See locations</div>
                    <div className="item-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                </div>
                <div className="wraper-item">
                    <div className="item-img">
                        <Alarm />
                    </div>
                    <div className="item-header">3 - Be Informed</div>
                    <div className="item-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                </div>
                <div className="wraper-item">
                    <div className="item-img">
                        <Hospital />
                    </div>
                    <div className="item-header">4 - Stay Safe</div>
                    <div className="item-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                </div>
            </div>
            <div className="howto-actions">
                    <Link to='/impact'><button>The impact</button></Link>
            </div>
        </section>
    );
}
