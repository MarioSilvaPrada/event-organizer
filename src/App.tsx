import React from "react";
import "./App.css";

import { RouteComponentProps } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import Events from "./components/Events";
import UserEvents from "./components/UserEvents";

const App = ({ match }: RouteComponentProps<{ name: string }>) => {
  let path = match.path;
  console.log(path)

  let component = path === '/allEvents' ? <Events /> : <UserEvents />
  return (
    <div className="App">
      <NavBar name={path}/>
      {component}
    </div>
  );
};

export default App;
