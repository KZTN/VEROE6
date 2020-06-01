import React from "react";
import Routes from "./routes";
import "./App.scss";
import Contact from "./components/Contact";

import About from "./components/About";
import "dotenv";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Routes />
                <About />
                <Contact />
            </div>
        </div>
    );
}

export default App;
