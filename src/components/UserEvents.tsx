import React from "react";
import Moment from "react-moment";
import Button from "../config/Button";
import cities from "../data/cities.json";
import * as S from "../config/EventRows.styled";

interface Props {
  myEvents: any;
  onCancel: (i: any) => void;
  filter: string;
}

const UserEvents = (props: Props) => {
  return props.myEvents.length === 0 ? (
    <h1>You are not assigned to any event</h1>
  ) : (
    <S.StyledEvents>
      {props.myEvents
        .filter((event:any) =>
          event.name.toLowerCase().includes(props.filter.toLowerCase())
        )
        .sort((a: any, b: any) => {
          return +new Date(a.startDate) - +new Date(b.startDate);
        })
        .map((event: any, i: number, arr: any) => {
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
                    red
                    event={() => props.onCancel(i)}
                    content="Cancel"
                  />
                </div>
              </S.StyledRow>
            </div>
          );
        })}
    </S.StyledEvents>
  );
};

export default UserEvents;
