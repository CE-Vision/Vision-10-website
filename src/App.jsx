import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import CountdownArea from "./components/CountdownArea";
import "./App.scss";

function App() {
  const calculateTimeLeft = () => {
    const difference = +new Date(2020, 10, 5) - +new Date();
    let timeLeft = {};
    // console.log("Year: " + year);
    console.log("Date:" + Date(2020, 10, 5));
    console.log("Diference: " + difference);
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
    console.log(time);
    let timeS = String(time);
    if (timeS.length <= 1) {
      timeS = "0" + timeS;
    }
    console.log(timeS);
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
    console.log(index);
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
    <>
      <Hero />
      <CountdownArea />
    </>
  );
}

export default App;
