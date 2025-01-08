import { createGlobalStyle, css } from "styled-components";

// TODO: Bellefair Regular - Preset 1, 2, 3, 4, 6
// TODO: Barlow Condensed Regular - Preset 5, 7, 8, 9
const GlobalStyle = createGlobalStyle`
  /* 1. Use a more-intuitive box-sizing model */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* 2. Remove default margin */
  * {
    margin: 0;
  }

  body {
    /* 3. Add accessible line-height */
    line-height: 1.5;
    /* 4. Improve text rendering */
    -webkit-font-smoothing: antialiased;
  }

  /* 5. Improve media defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* 6. Inherit fonts for form controls */
  input, button, textarea, select {
    font: inherit;
  }

  /* 7. Avoid text overflows */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    line-height: normal;
  }

  /* 8. Improve line wrapping */
  p {
    text-wrap: pretty;
  }

  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }

  /*
		9. Create a root stacking context
	*/
  #root, #__next {
    isolation: isolate;
  }

  h1 {
    font-size: 144px;
  }

  h2 {
    font-size: 100px;
  }

  h3 {
    font-size: 56px;
  }

  h4 {
    font-size: 32px;
  }

  h5 {
    font-size: 28px;
    letter-spacing: 4px;
  }

  h6 {
    font-size: 28px;
  }
`;

export default GlobalStyle;

export const textPreset4 = css`
  font-size: 32px;
  line-height: normal;
`;

export const textPreset8 = css`
  font-size: 16px;
  line-height: normal;
  letter-spacing: 2px;
`;
