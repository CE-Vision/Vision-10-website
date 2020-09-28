import React, { Suspense, lazy, useEffect, useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./scss/App.scss";
import Header from "./components/Header";
import Home from "./Home";
import Footer from "./components/Footer";
import Background from "./components/Background";
import Loader from "./components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = lazy(() => import("./components/Team"));

AOS.init();

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const loadPage = () => {
    setIsLoaded(true);
  };
  useEffect(loadPage);
  return (
    <>
      {isLoaded ? "" : <Loader />}
      <Background />

      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Header /> <Route path="/" exact component={Home} />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/team" component={Team} />
          </Switch>
        </Suspense>
      </Router>
      <Footer />
    </>
  );
}
