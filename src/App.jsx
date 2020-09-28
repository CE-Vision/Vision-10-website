import React, { Suspense, lazy, useEffect } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  withRouter,
  useLocation,
} from "react-router-dom";
import "./scss/App.scss";
import Header from "./components/Header";
import Home from "./Home";
import Footer from "./components/Footer";
import Background from "./components/Background";
import Loader from "./components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import LaunchCountdownArea from "./components/LaunchCountdownArea.jsx";

const Team = lazy(() => import("./components/Team"));

AOS.init();

function _ScrollToTop(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return props.children;
}

const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <>
      <Background />
      <Router>
        <Header />{" "}
        <ScrollToTop>
          <Route path="/" exact component={Home} />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/team" component={Team} />
              {/* <Route path="/home" component={Home} /> */}
            </Switch>
          </Suspense>
        </ScrollToTop>
      </Router>
      <Footer />
    </>
  );
}
