import { createGlobalStyle } from 'styled-components';
import resetStyled from 'styled-reset';
import { COLORS } from '.';

type GlobalStyleProps = {
	lightMode?: boolean;
};

export const GlobalStyle = createGlobalStyle`
 ${resetStyled}
 html {
   font-family: 'Roboto', sans-serif;
 }
  body {
    background-color: ${() => COLORS.base};
    color: ${(props: GlobalStyleProps) =>
			!props.lightMode ? COLORS.details : COLORS.base};
  }
  h1, h2, h3 {
    font-family: 'Exo', sans-serif;
  }
  input: {
    outline: none !important;

  }
  :focus-visible {
      outline:none;
    }
 `;
