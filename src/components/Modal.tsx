import React from "react";
import styled from "styled-components";
import Moment from "react-moment";

import { black, white } from "../config/styles";
import cities from "../data/cities.json";

interface Props {
  close: any;
  data: {
    name: string;
    date: string;
    place: number;
  };
}

const StyledModal = styled.div`
  position: fixed;
  background-color: ${black(0.03)};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    display: flex;
    flex-direction: column;
    width: 50rem;
    height: 30rem;
    background: white;
  }

  .modal-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: grey;
    height: 3rem;
  }

  .modal-header-description {
    align-self: center;
  }

  .modal-content {
    position: fixed;
    background: white;
    width: 40rem;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .close-modal {
    cursor: pointer;
    color: red;
  }
`;

const Modal = (props: Props) => (
  <StyledModal onClick={props.close}>
    <div className="modal">
      <div className="modal-header">
        <span className="modal-header-description"> Join the Event</span>
        <span className="close-modal" onClick={props.close}>
          X
        </span>
      </div>
      <div className="modal-content">
        You're about to sign up for <b>{props.data.name}</b>. This event takes
        place the <Moment format="Do MMMM ">{props.data.date}</Moment> in{" "}
        {cities.map(city => (city.id === props.data.place ? city.name : ""))}
      </div>
    </div>
  </StyledModal>
);

export default Modal;
