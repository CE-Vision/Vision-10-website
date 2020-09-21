import React from "react";
import "./App.scss";
import hero from "./assets/image.png";

function App() {
  return (
    <div id="hero">
      <div className="container">
        <header>
          <span id="logo">5 OCT</span>
          <ul>
            <li>
              <a>Events</a>
            </li>
            <li>
              <a>Team</a>
            </li>
          </ul>
        </header>
        <div id="hero-content">
          <img src={hero} alt="" />
          <h1>IT KEEPS GETTING BETTER.</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
