import React, { useState } from "react";
import "./App.css";

import { RouteComponentProps } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import Events from "./components/Events";
import UserEvents from "./components/UserEvents";

const App = ({ match }: RouteComponentProps<{ name: string }>) => {
  const [myEvents, setMyEvents] = useState<Array<string>>([]);

  const onJoin: any = (data:any) => {
    setMyEvents([...myEvents, data]);
    console.log(myEvents);
  }

  // https://medium.com/@jrwebdev/react-hooks-in-typescript-88fce7001d0d

  let path = match.path;

  let component = path === "/allEvents" ? <Events event={onJoin}/> : <UserEvents />;
  return (
    <div className="App">
      <NavBar name={path} />
      {component}
    </div>
  );
};

export default App;
