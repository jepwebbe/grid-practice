import styled from "styled-components";

export const MainStyled = styled.main`
  grid-area: content;
  color: green;
  border: 10px solid green;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: "a a a a a" "a a a a a" "b b c c c" "b b d e f";
  gap: 1rem;
  > :nth-child(1) {
    grid-area: a;
    border: 1px solid black;
  }
  > :nth-child(2) {
    grid-area: b;
    border: 1px solid black;
  }
  > :nth-child(3) {
    grid-area: c;
    border: 1px solid black;
  }
  > :nth-child(4) {
    grid-area: d;
    border: 1px solid black;
  }
  > :nth-child(5) {
    grid-area: e;
    border: 1px solid black;
  }
  > :nth-child(6) {
    grid-area: f;
    border: 1px solid black;
  }
`;
