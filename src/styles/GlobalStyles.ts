import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    background: var(--bg-color);
  }

  *, input, button {
    font: 400 1.6rem Roboto, sans-serif;
    border: none;
    background: none;
    outline: none;
    transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--scrollbar);
  }

  :root {
    ${props => {
      const { theme } = props;

      let append = '';

      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });

      return append;
    }}

    font-size: 60%;
  }

  @media (min-width: 809px) {
    #root {
        font-size: 62.5%;
    }
  }
`;

export default GlobalStyles;
