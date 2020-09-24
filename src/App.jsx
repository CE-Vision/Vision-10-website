import React from "react";
import "./scss/App.scss";
import Hero from "./components/Hero";
import CountdownArea from "./components/CountdownArea";
import Footer from "./components/Footer";
import Event from "./components/Event";

export default function App() {
  return (
    <>
      <Hero />
      <CountdownArea />
      <div className="container">
        <Event />
      </div>
      <Footer />
    </>
  );
}
