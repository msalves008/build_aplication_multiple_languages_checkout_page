import styled from 'styled-components';

export const GlobalContainer = styled.div`
width: 1200px;
min-height: 100vh;
margin: 0 auto;
background-color: red;
display: flex;
flex-direction: row;

  @media(max-width: 1200px){
    width: 1000px;
    background-color: yellow;
  }
  @media(max-width: 1024px){
    width: 850px;
    background-color: blue;
  }
  @media(max-width: 868px){
    width: 650px;
    background-color: orange;
  }
  @media(max-width: 642px){
    width: 500px;
    background-color: antiquewhite;
  }
  @media(max-width: 500px){
    width: 400px;
    background-color: lightblue;
    flex-direction: column;
  }
  @media(max-width: 425px){
    width: 320px;
    background-color: cyan;
    flex-direction: column;
  }
  @media(max-width: 320px){
    width: 280px;
    background-color: green;
    flex-direction: column;

  }
`