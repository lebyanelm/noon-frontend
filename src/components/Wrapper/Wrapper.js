import React from "react";
import styles from "./Wrapper.module.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// PAGES
import Landing from "../../pages/Landing/Landing.lazy";
import Forecast from "../../pages/Forecast/Forecast.lazy";

const Wrapper = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Landing></Landing>
      </Route>
      <Route path="/forecast" exact>
        <Forecast></Forecast>
      </Route>
    </Switch>
  </Router>
);

export default Wrapper;
