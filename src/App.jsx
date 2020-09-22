import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import CountdownArea from "./components/CountdownArea";
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
