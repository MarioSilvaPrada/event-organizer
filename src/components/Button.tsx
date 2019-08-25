import React, { useState } from "react";
import styled from "styled-components";

import { BLUE, GREEN, RED } from "../config/styles";

const StyledButton = styled.div`
  cursor: pointer;
  border: 3px solid ${BLUE};
  padding: 0.7rem 1.8rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.1rem;
  margin: 1rem 1.5rem;
  color: ${BLUE}

  &:hover {
    background: ${BLUE}
    color: white;
  }
`;

interface Button {
  event: any;
  content: string;
}

const Button = (props: Button) => (
  <StyledButton onClick={props.event}>{props.content}</StyledButton>
);

export default Button;
