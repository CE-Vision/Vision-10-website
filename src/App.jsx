import React from "react";
import "./scss/App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CountdownArea from "./components/CountdownArea";
import Footer from "./components/Footer";
import Events from "./components/Events";
import Background from "./components/Background";
import Team from "./components/Team";

export default function App() {
  return (
    <>
      <Background />
      <Header />
      <Hero />
      <CountdownArea />
      <Events />
      <Team />
      <Footer />
    </>
  );
}
