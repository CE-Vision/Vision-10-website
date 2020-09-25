import React from "react";
import "./scss/App.scss";
import Hero from "./components/Hero";
import CountdownArea from "./components/CountdownArea";
import Events from "./components/Events";

export default function Home() {
  return (
    <>
      <Hero />
      <CountdownArea />
      <Events />
    </>
  );
}
