import React, { useState } from "react";
import "./App.css";
import SearchFilter from "./components/SearchFilter";

import { RouteComponentProps } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import Events from "./components/Events";
import UserEvents from "./components/UserEvents";

const App = ({ match }: RouteComponentProps<{ name: string }>) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dataEvent, setDataEvent] = useState({ name: "", date: "", place: 0 });
  const [myEvents, setMyEvents] = useState<Array<string>>([]);
  const [filter, setFilter] = useState("");

  const onSignUp: any = (data: any) => {
    setDataEvent(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onJoin: any = (data: any) => {
    if (!myEvents.includes(data)) {
      setMyEvents([...myEvents, data]);
      setShowModal(false);
    } else {
      setShowModal(false);
    }
  };

  const onCancel: any = (i: number) => {
    myEvents.splice(i, 1);
    setMyEvents([...myEvents]);
  };

  const onFilter = (event: any) => {
    setFilter(event.target.value);
  };

  // https://medium.com/@jrwebdev/react-hooks-in-typescript-88fce7001d0d

  let path = match.path;

  let component =
    path === "/allEvents" ? (
      <Events
        event={onJoin}
        onSignUp={onSignUp}
        showModal={showModal}
        closeModal={closeModal}
        dataEvent={dataEvent}
        filter={filter}
      />
    ) : (
      <UserEvents myEvents={myEvents} onCancel={onCancel} filter={filter} />
    );

  return (
    <div className="App">
      <NavBar name={path} />
      <SearchFilter onFilter={onFilter} />
      {component}
    </div>
  );
};

export default App;
