import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin: 0;
    padding: 0;
    background-color: whitesmoke;
  }

  .app {
    width: 50%;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
  }
`;

export default GlobalStyle;
