import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const LaunchCountdownArea = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(2020, 8, 28, 18, 0, 0) - +new Date();
    let timeLeft = {};

    // console.log("Date:" + Date(2020, 10, 5));
    // console.log("Diference: " + difference);

    if (difference > 0) {
      timeLeft = {
        hours: addPrecedingZero(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ),
        minutes: addPrecedingZero(Math.floor((difference / 1000 / 60) % 60)),
        seconds: addPrecedingZero(Math.floor((difference / 1000) % 60)),
      };
    }

    return timeLeft;
  };

  function addPrecedingZero(time) {
    // console.log(time);

    let timeS = String(time);

    if (timeS.length <= 1) {
      timeS = "0" + timeS;
    }

    // console.log(timeS);

    return timeS;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval]) {
      return;
    }

    // console.log(index);

    if (index === 2) {
      timerComponents.push(<span>{timeLeft[interval]}</span>);
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {": "}
      </span>
    );
  });

  return (
    <div id="countdown-area" style={{ height: "100vh" }}>
      {(() => {
        if (!timerComponents.length) {
          return <Redirect to="/home"></Redirect>;
        }
      })()}
      <div className="container">
        <div
          id="date"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-delay="50"
        >
          <h1 style={{ color: "var(--sbg)", fontSize: "5rem" }}>
            LAUNCHING IN...
          </h1>
          {/* <h1>5 OCT</h1> */}
        </div>
        <div
          id="countdown"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-delay="50"
        >
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
              <span>HRS</span>
              <span>MIN</span>
              <span>SEC</span>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LaunchCountdownArea;
