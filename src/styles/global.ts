import { createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background:#f1f1f1;
    --primary:#51B853;
    --text-body: #41414D;
    --shape: #ffffff;

  }
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 html{
   @media(max-width: 1080px){
      font-size: 93.75%;
   }
   @media(max-width: 720px){
      font-size: 87.5%;
   }
 }
 body{ 
  background: var(--background);
  -webkit-font-smoothing: antialiased;
 }
 body, input, textarea, button{
   font-family: 'Saira', sans-serif;
   font-weight: 400;
 }

 h1,h2,h3,h4,h5,h6,strong{
  font-weight: 600;
 }

 button{
   cursor: pointer;
 }
 [disabled]{
   opacity: 0.6;
   cursor: not-allowed;

 }

`