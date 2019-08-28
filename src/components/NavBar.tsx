import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from '../config/Logo/Logo.svg';
import { BLUE } from "../config/styles";

const NavBarStyled = styled.div`
  width: 100%;
  height: 6.5rem;
  background: #d2fafb;
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;

  .logo {
    width: 8rem;
    margin: 0 3rem;
  }
  .tabs {
    display: flex;
    justify-content: space-between;
    width: 12rem;
    cursor: pointer;
    color: white;
    font-weight: bold;
  }

  a {
    color: grey;
  }
`;

interface Props {
  name: string;
}

const NavBar = (props: Props) => {
  let path = props.name;

  const colorLink = (path: string) => {
    if (path === "/allEvents") {
      return (
        <>
          <Link
            to={"/allEvents"}
            style={{ textDecoration: "none", color: `${BLUE}` }}
          >
            <div className="all-events">All Events</div>
          </Link>
          <Link to={"/myEvents"} style={{ textDecoration: "none" }}>
            <div className="my-events">My Events</div>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to={"/allEvents"} style={{ textDecoration: "none" }}>
            <div className="all-events">All Events</div>
          </Link>
          <Link
            to={"/myEvents"}
            style={{ textDecoration: "none", color: `${BLUE}` }}
          >
            <div className="my-events">My Events</div>
          </Link>
        </>
      );
    }
  };

  return (
    <NavBarStyled>
      <img className="logo" src={Logo} alt={'logo'}/>
      <div className="tabs">{colorLink(path)}</div>
    </NavBarStyled>
  );
};

export default NavBar;
