import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    box-sizing: border-box;
  }
  #root {
    margin: 0 24px;
  }
  a {
    color: blue;
  }
  html {
    background-color: #F8F8F8;
  }
`;

export default GlobalStyle;
