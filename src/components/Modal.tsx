import React from "react";
import styled from "styled-components";
import Moment from "react-moment";

import { black } from "../config/styles";
import cities from "../data/cities.json";



interface Props {
  close: any,
  data: {
    name: string;
    date: string;
    place: number;
  }
}

const StyledModal = styled.div`
  position: fixed;
  background: ${black(0.1)};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .modal-content {
    position: fixed;
    background: white;
    width: 80%;
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
  <StyledModal>
    <span className='close-modal' onClick={props.close}>X</span>
    <div className="modal-content">
      You're about to sign up for <b>{props.data.name}</b>. This event
      takes place the <Moment format="Do MMMM ">{props.data.date}</Moment> in {cities.map(city => (city.id === props.data.place ? city.name : ""))}
    </div>
  </StyledModal>
);

export default Modal;
