import React from "react";
import styled from "styled-components";
import Moment from "react-moment";

import Button from "./Button";

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
  background-color: ${black(0.5)};
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
    justify-content: space-between;
    width: 40rem;
    height: 20rem;
    background: white;
    position: fixed;
    top: 25%;
    left: 25%;
  }

  .modal-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${black(0.3)};
    border-bottom: 2px solid grey;
    height: 3rem;
  }

  .modal-header-description {
    align-self: center;
    flex-grow:2;
  }

  .modal-header-close {
    cursor: pointer;
    color: red;
    margin-right: 1.5rem;
  }

  .modal-content {
    background: white;
   align-self: flex-start;
    height: auto;
    margin: 0 3rem;
   
  }

  .modal-btns{
    display: flex;
    justify-content: space-between;
    align-self: flex-end;
   
  }
`;

const Modal = (props: Props) => (
  <StyledModal>
    <div className="modal">
      <div className="modal-header">
        <span className="modal-header-description"> Join the Event</span>
        <span className="modal-header-close" onClick={props.close}>
          X
        </span>
      </div>
      <div className="modal-content">
        You're about to sign up for <b>{props.data.name}</b>. This event takes
        place the <Moment format="Do MMMM ">{props.data.date}</Moment> in{" "}
        {cities.map(city => (city.id === props.data.place ? city.name : ""))}
        <br/>
        <br/>
        <p>Are you sure?</p>
      </div>
      <div className="modal-btns">
        <Button  event={() => console.log('cancel')} content='Cancel' />
        <Button event={() => console.log('join')} content='Join' />
      </div>
    </div>
  </StyledModal>
);

export default Modal;
