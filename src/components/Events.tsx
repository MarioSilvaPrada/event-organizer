import React from "react";
import Moment from "react-moment";

import Modal from "./Modal";
import Button from "../config/Button";

import data from "../data/events.json";
import cities from "../data/cities.json";
import * as S from "../config/EventRows.styled";

interface Props {
  event: () => void;
  onSignUp: (data: any) => void;
  dataEvent: any;
  showModal: boolean;
  closeModal: () => void;
  filter: string;
}

const Events = (props: Props) => {
  return (
    <S.StyledEvents>
      {data
        .filter(event =>
          event.name.toLowerCase().includes(props.filter.toLowerCase())
        )
        .sort((a, b) => {
          return +new Date(a.startDate) - +new Date(b.startDate);
        })
        .map((event, i, arr) => {
          return (
            <div className="event-group" key={i}>
              {!arr[i - 1] || //check if is the first iteration
              new Date(event.startDate).setHours(0, 0, 0, 0) !== // and check if the current date is different from the previous one
                new Date(arr[i - 1].startDate).setHours(0, 0, 0, 0) ? ( // setHours to 0 in order to compare only the date itsel
                <Moment className="event-date" format="dddd Do MMM YYYY">
                  {event.startDate}
                </Moment>
              ) : (
                ""
              )}
              <S.StyledRow>
                <div className="event-row--description">
                  <Moment format="HH:mm ">{event.startDate}</Moment>
                  <div className="event-name">
                    <p className="event-title">{event.name}</p>
                    <p className="event-city">
                      {cities.map(city =>
                        city.id === event.city ? city.name : ""
                      )}{" "}
                      -{" "}
                      <Moment format="H">
                        {+new Date(event.endDate) - +new Date(event.startDate)}
                      </Moment>
                      h
                      <Moment format="mm">
                        {+new Date(event.endDate) - +new Date(event.startDate)}
                      </Moment>
                    </p>
                  </div>
                </div>
                <div className="event-row--signup">
                  {event.isFree ? <p className="free">free</p> : ""}
                  <Button
                    event={() => props.onSignUp(event)}
                    content="Sign Up"
                  />
                </div>
              </S.StyledRow>
            </div>
          );
        })}
      {props.showModal ? (
        <Modal
          data={props.dataEvent}
          close={props.closeModal}
          join={props.event}
        />
      ) : (
        ""
      )}
    </S.StyledEvents>
  );
};

export default Events;
