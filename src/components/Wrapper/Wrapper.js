import React from "react";
import styles from "./Wrapper.module.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// PAGES
import Landing from "../../pages/Landing/Landing.lazy";

const Wrapper = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Landing></Landing>
      </Route>
    </Switch>
  </Router>
);

export default Wrapper;
