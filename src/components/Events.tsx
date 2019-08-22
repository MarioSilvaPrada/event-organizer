import React from "react";
import styled from "styled-components";
import Moment from "react-moment";

import data from "../data/events.json";
import cities from "../data/cities.json";

const StyledEvents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  

  .event-group {
    display: flex;
    flex-direction: column;
    margin: 3rem 2rem 0;
    
    border: 1px solid green;
    padding: 2rem;

    .event-date {
      align-self: flex-start;
      font-weight: bold;
    }

    .event-row {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const Events = () => (
  <StyledEvents>
    {data
      .sort(
        (a, b): any => {
          return +new Date(a.startDate) - +new Date(b.startDate);
        }
      )
      .map((event, i) => {
        return (
          <div className="event-group" key={i}>
            <Moment className="event-date" format="D MMM YYYY">
              {event.startDate}
            </Moment>
            <div className="event-row">
              <Moment format="H:mm ">{event.startDate}</Moment>
              <p>
                {cities.map(city => (city.id === event.city ? city.name : ""))}
              </p>
              <p>{event.name}</p>
              <p>{event.isFree ? 'FREE!!' : ''}</p>
            </div>
          </div>
        );
      })}
  </StyledEvents>
);

export default Events;
