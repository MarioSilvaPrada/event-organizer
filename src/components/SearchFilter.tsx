import React from "react";
import styled from "styled-components";

import { BLUE } from "../config/styles";

const StyledInput = styled.input`
    width: 50%;
    height: 3rem;
    font-size: 1.5rem;
    text-align: center;
    margin-top: 1.5rem ;
    border-radius: 0.5rem;
    border: 1px solid black;
    color: ${BLUE}

    :focus {
        outline-width: 0;
    }
`;
interface Props {
  onFilter: any;
}
const SearchFilter = (props: Props) => (
  <StyledInput
    type="text"
    onChange={e => props.onFilter(e)}
    placeholder="Search for an event!"
  />
);

export default SearchFilter;
