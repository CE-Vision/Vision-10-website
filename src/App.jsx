import React, { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-10-5`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);
  });
  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {": "}
      </span>
    );
  });

  return (
    <div id="hero">
      <div className="background" />
      <div className="container">
        {/*  <header>
          <span id="logo">5 OCT</span>
          <ul>
            <li>
              <a>Events</a>
            </li>
            <li>
              <a>Team</a>
            </li>
          </ul>
        </header> */}
        <div id="hero-content">
          <div className="vision">
            <h1>VISION</h1>
            <span id="x">X</span>
          </div>
          <h1 id="soon">coming soon</h1>
        </div>
      </div>
      <div id="comingsoon">
        <div className="container">
          <div id="date">
            <h1 style={{ color: "var(--sbg)", fontSize: "3rem" }}>
              MARK THE DATE
            </h1>
            <h1>5 OCT</h1>
          </div>
          <div id="countdown">
            <h1 style={{ fontSize: "7.5rem" }}>
              {" "}
              {timerComponents.length ? (
                timerComponents
              ) : (
                <span>Time's up!</span>
              )}
            </h1>
            <h1
              style={{
                color: "var(--sbg)",
                fontSize: "3.5rem",
              }}
            >
              <div className="flexcont">
                {" "}
                <span>DAYS</span>
                <span>HRS</span>
                <span>MIN</span>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
