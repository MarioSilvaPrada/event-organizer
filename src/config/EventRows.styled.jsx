import styled from "styled-components";
import { GREY, GREEN, white } from "./styles";

export const StyledEvents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3rem;

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

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border: 1px solid black;
  background: ${GREY};
  margin: 0.3rem 0;
  border-radius: 0.5rem;
  border: 2px solid black;

  @media screen and (max-width: 830px) {
    flex-direction: column;
}

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
    text-align: start;


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

  .free {
    font-weight: bold;
    background: ${GREEN}
    color: ${white(0.8)};
    padding: 0.4rem 0.5rem;
    border-radius: 0.3rem;
    text-transform: uppercase;
    margin-right: 5rem;
  }
`;
