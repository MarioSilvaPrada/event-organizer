import React from "react";
import styled from "styled-components";

import { BLUE, GREEN, RED } from "../config/styles";

const StyledButton = styled.div`
  cursor: pointer;
  width: 5rem;
  border: 3px solid ${props => (props.red ? `${RED}` : props.green ? `${GREEN}` : `${BLUE}`)} ;
  padding: 0.7rem 1.8rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.1rem;
  margin: 1rem;
  color:${props => (props.red ? `${RED}` : props.green ? `${GREEN}` : `${BLUE}`)};
  transition: 0.4s;

  &:hover {
    background: ${props => (props.red ? `${RED}` : props.green ? `${GREEN}` : `${BLUE}`)} 
    color: white;
  }
`;

const Button = props => (
  <StyledButton {...props} onClick={props.event}>{props.content}</StyledButton>
);

export default Button;
