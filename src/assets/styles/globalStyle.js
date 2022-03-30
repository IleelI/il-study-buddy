import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  html {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    overflow-y: hidden;
  }

  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
