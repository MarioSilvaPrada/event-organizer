import React from "react";
import styled from "styled-components";
import Moment from "react-moment";

import data from "../data/events.json";
import cities from "../data/cities.json";

import { BLUE } from "../config/styles";


const StyledEvents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .event-group {
    display: flex;
    flex-direction: column;
    margin: 3rem 5rem 0;

    .event-date {
      align-self: flex-start;
      font-weight: bold;
      margin-bottom: 1.2rem;
    }

    .event-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid green;
      padding: 2rem;
    }

    .event-row--description {
      display: flex;
      align-items: center;
    }

    .event-row--description > * {
      margin-right: 5rem;
    }

    .event-name {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .event-row--signup {
      button {
        cursor: button;
        border: 3px solid ${BLUE};
        padding: 0.7rem 1.8rem;
        color: ${BLUE};
        font-weight: bold;
        cursor: pointer;
        border-radius: 0.1rem;
      }

      button:hover {
        background: ${BLUE};
        color: white;
      }
    }
  }
`;

const Events = () => (
  <StyledEvents>
    {data
      .sort((a, b) => {
        return +new Date(a.startDate) - +new Date(b.startDate);
      })
      .map((event, i, arr) => {
        let row;
        console.log(arr[i].startDate)
        debugger;
        if (event.startDate !== arr[i - 1].startDate) {
          row = (
            <div>
              <Moment className="event-date" format="dddd D MMM YYYY">
                {event.startDate}
              </Moment>
              <div className="event-row">
                <div className="event-row--description">
                  <Moment format="HH:mm ">{event.startDate}</Moment>
                  <div className="event-name">
                    <p>{event.name}</p>
                    <p>
                      {cities.map(city =>
                        city.id === event.city ? city.name : ""
                      )}
                    </p>
                  </div>
                  <p>{event.isFree ? "FREE!!" : ""}</p>
                </div>
                <div className="event-row--signup">
                  <button>Sign Up</button>
                </div>
              </div>
            </div>
          );
        } else {
          row = (
            <div className="event-row">
              <div className="event-row--description">
                <Moment format="HH:mm ">{event.startDate}</Moment>
                <div className="event-name">
                  <p>{event.name}</p>
                  <p>
                    {cities.map(city =>
                      city.id === event.city ? city.name : ""
                    )}
                  </p>
                </div>
                <p>{event.isFree ? "FREE!!" : ""}</p>
              </div>
              <div className="event-row--signup">
                <button>Sign Up</button>
              </div>
            </div>
          );
        }

        return (
          <div className="event-group" key={i}>
            {row}
          </div>
        );
      })}
  </StyledEvents>
);

export default Events;
