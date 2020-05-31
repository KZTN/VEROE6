import React from "react";
import Routes from "./routes";
import "./App.scss";
import Contact from "./components/Contact";

import HowTo from "./components/HowTo";
import Contributors from "./components/Contributors";
import "dotenv";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Routes />
                <HowTo />
                <Contributors />
                <Contact />
            </div>
        </div>
    );
}

export default App;
