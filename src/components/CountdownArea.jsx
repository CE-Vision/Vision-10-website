import React, { useState, useEffect } from "react";

const CountdownArea = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(2020, 9, 5) - +new Date();
    let timeLeft = {};

    // console.log("Date:" + Date(2020, 10, 5));
    // console.log("Diference: " + difference);

    if (difference > 0) {
      timeLeft = {
        days: addPrecedingZero(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: addPrecedingZero(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ),
        minutes: addPrecedingZero(Math.floor((difference / 1000 / 60) % 60)),
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
    }, 60000);
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
    <div id="countdown-area">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-delay="50"
      >
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
            <div
              className="flexcont"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-delay="50"
            >
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
