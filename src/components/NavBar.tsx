import React from "react";
import styled from "styled-components";

import { Link, RouteComponentProps } from "react-router-dom";

import { BLUE, GREEN } from "../config/styles";

const NavBarStyled = styled.div`
  width: 100%;
  height: 5rem;
  background: grey;
  display: flex;
  align-items: center;

  .logo {
    width: 20rem;
  }
  .tabs {
    display: flex;
    justify-content: space-between;
    width: 12rem;
    cursor: pointer;
    color: white;
  }

  a {
    color: black;
  }
`;

interface Props {
  name: string;
}

const NavBar = (props: Props) => {

  let path = props.name;

  let color = path === '/allEvents' ? 'color: "red"' : '';
  
  return (
    <NavBarStyled>
      <div className="logo">My Logo</div>
      <div className="tabs">
        <Link
          {...props.name}
          to={"/allEvents"}
          style={{ textDecoration: "none", color }}
        >
          <div className="all-events">All Events</div>
        </Link>
        <Link to={"/myEvents"} style={{ textDecoration: "none" }}>
          <div className="my-events">My Events</div>
        </Link>
      </div>
    </NavBarStyled>
  );
};

export default NavBar;
