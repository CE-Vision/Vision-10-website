import React from "react";
import "./App.scss";
import Hero from "./components/Hero";
import CountdownArea from "./components/CountdownArea";
import "./App.scss";
import Footer from "./components/Footer";
import Event from "./components/Event";

function App() {
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

export default App;
