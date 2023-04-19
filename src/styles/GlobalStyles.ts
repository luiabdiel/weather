import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #fff;
    color: #343A40;

    -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
      font: 400 1.125rem Roboto, sans-serif;

      a {
        text-decoration: none;
      }
      li {
        list-style: none;
      }
  }
`;
