import styled from 'styled-components'

export const HeaderStyled = styled.header`
  height: 10vh;
  background-color: #c4c4c4;
  width: 100%;
  display: grid;
  .wrapper {
    align-items: center;
    justify-self: center;
    display: grid;
    width: 95%;
    justify-content: space-between;
    grid-auto-flow: column;
    a {
      text-decoration: none;
      padding: 1em;
      background-color: white;
      color: black;
    }
    div {
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      gap: 1em;
    }
  }
  
`