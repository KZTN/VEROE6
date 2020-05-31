import React from "react";
import Routes from "./routes";
import "./App.scss";
import Contact from "./components/Contact";

import Contributors from "./components/Contributors";
import "dotenv";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Routes />
                <Contributors />
                <Contact />
            </div>
        </div>
    );
}

export default App;
