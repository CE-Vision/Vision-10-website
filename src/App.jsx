import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./scss/App.scss";
import Header from "./components/Header";
import Home from "./Home";
import Footer from "./components/Footer";
import Background from "./components/Background";
const Team = lazy(() => import("./components/Team"));

export default function App() {
  return (
    <>
      <Background />

      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Header /> <Route path="/" exact component={Home} />
        <Suspense fallback={"Hold Up!"}>
          <Switch>
            <Route path="/team" component={Team} />
          </Switch>
        </Suspense>
      </Router>
      <Footer />
    </>
  );
}
