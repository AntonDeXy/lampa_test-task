import styled from 'styled-components'

export const ProductsListStyled = styled.div`
  display: grid;
  width: 80%;
  justify-self: center;
  .product-list {
    @media(min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 576px) {
      grid-template-columns: 100%;
      grid-auto-flow: row;
    }
    justify-self: center;
    gap: 20px;
    display: grid;
    width: 100%;
    grid-auto-rows: auto;
    row-gap: 1.2em;
    padding: 1.3em;
    justify-self: center;
  }
`