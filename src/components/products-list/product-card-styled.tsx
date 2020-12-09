import styled from 'styled-components'

const ProductCardStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  background-color: white;
  box-shadow: 0px 0px 5px rgb(148, 148, 148);
  align-content: flex-end;
  overflow: hidden;
  .img {
    display: grid;
    overflow: hidden;
    /* background-color: #c4c4c4; */
    img {
      width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
  .info {
    display: grid;
    padding: 1em 1.2em;
    text-align: left;
    grid-template-rows: auto auto 1fr auto;
    gap: 5px;
    h2 {
      display: grid;
      margin: 0;
      align-content: center;
    }
    .description {
      align-content: baseline;
    }
    .button, .price {
      align-self: flex-end;
    }
    .addToCart {
      button {
        padding: 0.7em;
        font-size: 1em;
        border: unset;
        width: 100%;
        background-color: #c4c4c4;
      }
    }
  }
` 

export default ProductCardStyled