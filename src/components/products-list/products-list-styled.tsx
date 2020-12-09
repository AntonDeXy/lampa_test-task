import styled from 'styled-components'

export const ProductsListStyled = styled.div`
  @media(min-width: 768px) {
    grid-template-columns: repeat(4, calc(100%/4));
  }
  @media(max-width: 768px) {
    grid-template-columns: repeat(2, calc(100%/2));
  }
  @media (max-width: 576px) {
    grid-template-columns: 100%;
    grid-auto-flow: row;
  }
  display: grid;
  width: 90%;
  grid-auto-rows: auto;
  grid-auto-flow: column;
  gap: 1.2em;
  padding: 1.3em;
  justify-self: center;
`