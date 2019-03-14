import { createGlobalStyle } from 'styled-components';
import { baseColors } from './theme';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${baseColors.darkblue};
    font-family: 'Roboto', sans-serif;
    height: 100%;

    #root {
      height: 100vh;
    }
  }
`;
