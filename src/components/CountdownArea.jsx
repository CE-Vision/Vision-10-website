import React from "react";

const CountdownArea = () => {
  return (
    <div id="countdown-area">
      <div className="container">
        <div id="date">
          <h1 style={{ color: "var(--sbg)", fontSize: "3rem" }}>
            MARK THE DATE
          </h1>
          <h1>5 OCT</h1>
        </div>
        <div id="countdown">
          <h1 id="time">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </h1>
          <h1
            style={{
              color: "var(--sbg)",
              fontSize: "3.5rem",
            }}
          >
            <div className="flexcont">
              <span>DAYS</span>
              <span>HRS</span>
              <span>MIN</span>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CountdownArea;
