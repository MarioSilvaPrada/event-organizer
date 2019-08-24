import React, { useState } from "react";
import styled from "styled-components";
import Moment from "react-moment";

import Modal from "./Modal";

import data from "../data/events.json";
import cities from "../data/cities.json";

import { BLUE, GREEN, white, black } from "../config/styles";

const StyledEvents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .event-group {
    display: flex;
    flex-direction: column;
    margin: 0 5rem;
    position: relative;

  }

  .event-date {
    text-align: left
    font-weight: bold;
    margin: 2.2rem 2rem 1rem;
  }
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border: 1px solid black;

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

    p {
      margin: 0 0 0.5rem;
    }

    .event-city {
      color: grey;
      font-size: 0.8rem;
    }

    .event-title {
      font-size: 0.9rem;
      font-weight: bold;
    }
  }

  .event-row--signup {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      cursor: pointer;
      border: 3px solid ${BLUE};
      padding: 0.7rem 1.8rem;
      color: ${BLUE};
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.1rem;
      margin-left: 5rem;
    }

    button:hover {
      background: ${BLUE};
      color: white;
    }
  }

  .free {
    font-weight: bold;
    background: ${GREEN}
    color: ${white(0.8)};
    padding: 0.4rem 0.5rem;
    border-radius: 0.3rem;
    text-transform: uppercase;
  }
`;

const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const onSignUp = () => {
    setShowModal(true);
  };
  console.log(showModal)
  return (
    <StyledEvents>
      {data
        .sort((a, b) => {
          return +new Date(a.startDate) - +new Date(b.startDate);
        })
        .map((event, i, arr) => {
          return (
            <div className="event-group" key={i}>
              {!arr[i - 1] || //check if is the first iteration
              new Date(event.startDate).setHours(0, 0, 0, 0) !== // and check if the current date is different from the previous one
                new Date(arr[i - 1].startDate).setHours(0, 0, 0, 0) ? ( // setHours to 0 in order to compare only the date itsel
                <Moment className="event-date" format="dddd D MMM YYYY">
                  {event.startDate}
                </Moment>
              ) : (
                ""
              )}
              <StyledRow>
                <div className="event-row--description">
                  <Moment format="HH:mm ">{event.startDate}</Moment>
                  <div className="event-name">
                    <p className="event-title">{event.name}</p>
                    <p className="event-city">
                      {cities.map(city =>
                        city.id === event.city ? city.name : ""
                      )}
                    </p>
                  </div>
                </div>
                <div className="event-row--signup">
                  {event.isFree ? <p className="free">free</p> : ""}
                  <button onClick={() => onSignUp()}>Sign Up</button>
                </div>
                {/* <Modal
                  show={showModal}
                  name={event.name}
                  date={event.startDate}
                  place={event.city}
                /> */}
              </StyledRow>
            </div>
          );
        })}
    </StyledEvents>
  );
};

export default Events;