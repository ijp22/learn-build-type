import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    color: #333;
    margin: 0;
    font-family: sans-serif;
    font-weight: 300;
  }

  h1, h2{
    margin-bottom: 2rem;
  }
`;

export default GlobalStyles;
