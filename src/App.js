import React from "react";
import Routes from "./routes";
import "./App.scss";
import Nav from "./components/Nav";
import Banner from './components/Banner'
import Bumper from './components/Bumper'
import HowTo from './components/HowTo'
import Contributors from './components/Contributors'
import 'dotenv';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <Bumper/>
        <Banner />
        <Routes />
        <HowTo />
        <Contributors />
      </div>
    </div>
  );
}

export default App;
