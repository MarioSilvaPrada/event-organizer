import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import App from './App';

const Root = () => (
    <Router>
        <App />
    </Router>
)

export default Root