import React from "react";
import "./scss/App.scss";
import Hero from "./components/Hero";
import CountdownArea from "./components/CountdownArea";
import Events from "./components/Events";
import Info from "./components/Info";

export default function Home() {
  return (
    <>
      <Hero />
      <CountdownArea />
      <Info />
      <Events />
    </>
  );
}
