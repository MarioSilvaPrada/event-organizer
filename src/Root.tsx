import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import App from "./App";

const Root = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/allEvents" />
      <Route  path="/allEvents" component={App} />
      <Route  path="/myEvents" component={App} />
    </Switch>
  </Router>
);

export default Root;
