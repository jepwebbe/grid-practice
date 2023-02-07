import styled from 'styled-components'

export const Main2Styled = styled.div`
grid-area: content;
border: 10px solid purple;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(6, 1fr);
grid-template-areas: "a a a" "a a a" "b b b" "c d e" "c d e" "c d e";
gap: 1rem;
> :nth-child(1) {
    grid-area: a;
    border: 1px solid black
  }
  > :nth-child(2) {
    grid-area: b;
    border: 1px solid black
  }
  > :nth-child(3) {
    grid-area: c;
    border: 1px solid black
  }
  > :nth-child(4) {
    grid-area: d;
    border: 1px solid black
  }
  > :nth-child(5) {
    grid-area: e;
    border: 1px solid black
  }
`