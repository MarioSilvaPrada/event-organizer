import React from "react";
import styled from "styled-components";
import Moment from "react-moment";

import { black } from "../config/styles";
import cities from "../data/cities.json";

interface Props {
  show: boolean;
  name: string;
  date: string;
  place: number;
}

const StyledModal = styled.div`
  position: fixed;
  color: red;
  background: ${black(0.1)};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  .modal-hidden{
      display: none;
  }

  .modal-block {
      display: block;
  }

  .modal-content {
    position: fixed;
    background: white;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Modal = (props: Props) => (
  <StyledModal>
    <div className="modal-content" >
      {props.show} You're about to sign up for {props.name}. This event takes place the
      <Moment format="Do MMMM ">{props.date}</Moment> in
      {cities.map(city => (city.id === props.place ? city.name : ""))}
    </div>
  </StyledModal>
);

export default Modal;
