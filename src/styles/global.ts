import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
${reset}
body {
  background: ${theme.colors.background};
  font-size: ${theme.fontSize};
  color: ${theme.colors.text};
  font-family: 'Rubik';
  font-weight: 400;
}

h1,h2,h3,h4 {
  color: ${theme.colors.headings};
}

h2 {
  font-weight: 400;
}
`;
