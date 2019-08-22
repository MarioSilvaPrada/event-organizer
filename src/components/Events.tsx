import React from "react";
import styled from "styled-components";
import Moment from "react-moment";

import data from "../data/events.json";
import cities from "../data/cities.json";

const StyledEvents = styled.div`
  display: flex;
  flex-direction: column;
`;

const Events = () => (
  <StyledEvents>
    {data.map(event => {
      return (
        <div>
          <Moment format="D MMM YYYY">{event.startDate}</Moment>
          <h1>{cities.map(city => (city.id === event.city ? city.name : ""))}</h1>
          <p>{event.name}</p>
        </div>
      );
    })}
  </StyledEvents>
);

export default Events;
