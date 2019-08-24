import React from "react";
import styled from "styled-components";

import { BLUE, GREEN } from '../config/styles';

const NavBarStyled = styled.div`
  width: 100%;
  height: 5rem;
  background: grey;
  display: flex;
  align-items: center;

  .logo{
      width: 20rem;
  }
  .tabs {
      display: flex;
      justify-content: space-between;
      width: 12rem;
      cursor: pointer;
      color: white;
  }
`;

const NavBar = () => (
  <NavBarStyled>
    <div className="logo">My Logo</div>
    <div className="tabs">
      <div className="all-events">All Events</div>
      <div className="my-events">My Events</div>
    </div>
  </NavBarStyled>
);

export default NavBar;
