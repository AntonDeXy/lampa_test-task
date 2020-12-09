import styled from 'styled-components'

const ProductCardStyled = styled.div`
  display: grid;
  grid-template-rows: 40% 60%;
  background-color: white;
  box-shadow: 0px 0px 5px #949494;
  .img {
    img {
      width: 100%;
      max-height: 100%;
      aspect-ratio: 1;
    }
  }
  .info {
    display: grid;
    padding: 1em 1.2em;
    text-align: left;
    grid-template-rows: auto 1fr auto auto;
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
    button {
      padding: 0.7em;
      font-size: 1em;
      border: unset;
      width: 100%;
      background-color: #c4c4c4;
    }
  }
` 

export default ProductCardStyled