import styled from 'styled-components'

export const ProductsListStyled = styled.div`
  display: grid;
  width: 85%;
  justify-self: center;
  .product-list {
    @media(min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 576px) {
      grid-template-columns: 100%;
      grid-auto-flow: row;
    }
    @media (max-width: 1200px) {
      gap: 2em;
    }
    @media (min-width: 1200px) {
      gap: 4em;
    }
    justify-self: center;
    display: grid;
    width: 100%;
    grid-auto-rows: auto;
    padding: 1.3em;
    justify-self: center;
  }
`