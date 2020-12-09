import styled from 'styled-components'

export const CartStyled = styled.div`
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: 3.5fr 2fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
  width: 90%;
  justify-self: center;
  padding: 1em 0;
  gap: 1.5em;
`

export const CartItemCardStyled = styled.div`
  display: grid;
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    .quantity {
      justify-content: center;
      grid-template-columns: auto auto auto;
    }
  }
  @media (min-width: 576px) {
    grid-template-columns: 20% 1fr auto;
    .quantity {
      grid-template-columns: 1fr auto 1fr;
    }
  }
  gap: 10px;
  box-shadow: 0px 0px 5px #949494;
  background-color: white;
  .img {
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .info {
    display: grid;
    padding: 0.2em 0.7em;
    grid-auto-flow: row;
    align-content: baseline;
    gap: 5px;
    .title {
      h2 {
        margin: 0;
      }
    }
    .price {
      text-align: left;
      color: green;
    }
    .desc {
      text-align: left;
    }
  }
  .quantity {
    display: grid;
    padding: 0.2em 0.7em;
    align-content: center;
    font-size: 1.5em;
    gap: 0.5em;
    justify-items: center;
    div {
      display: grid;
      height: 100%;
      aspect-ratio: 1;
      background-color: #c4c4c4;
      align-items: center;
      justify-items: center;
    }
    span {
      display: grid;
      color: black;
      text-align: center;
      align-content: center;
      font-size: 1.5em;
    }
  }
`

export const CartItemsListStyled = styled.div`
  display: grid;
  width: 100%;
  text-align: left;
  gap: 1.3em;
  align-content: baseline;
  .total-cart-price {
    font-weight: bold;
    text-decoration: underline;
    text-transform: uppercase;
  }
`

export const CartOrderFormStyled = styled.div`
  display: grid;
  box-shadow: 0px 0px 5px #949494;
  background-color: white;
  padding: 1em;
  align-content: baseline;
  align-self: baseline;
  form {
    width: 100%;
    display: grid;
    gap: 1em;
    input {
      height: 2.5em;
      width: calc(100% - 1em); // 100% - padding (CartOrderFormStyled)
      padding: 5px;
      ::placeholder {
        font-weight: bold;
        text-transform: uppercase;
        color: black;
      }
    }
    button {
      height: 2.5em;
      padding: 5px;
      border: unset;
      font-size: 1em;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`