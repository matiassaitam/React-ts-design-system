import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts.base};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }
`;

export default GlobalStyle;
