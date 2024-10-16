import { createGlobalStyle, css } from "styled-components";

// TODO: Bellefair Regular - Preset 1, 2, 3, 4, 6
// TODO: Barlow Condensed Regular - Preset 5, 7, 8, 9
const GlobalStyle = createGlobalStyle`
	h1 {
		font-size: 144px;
		line-height: normal;
	}

	h2 {
		font-size: 100px;
		line-height: normal;
	}

	h3 {
		font-size: 56px;
		line-height: normal;
	}

    h4 {
      font-size: 32px;
      line-height: normal;
    }

    
    h5 {
      font-size: 28px;
      line-height: normal;
      letter-spacing: 4px;
    }

    h6 {
      font-size: 28px;
      line-height: normal;
    }
`;

export default GlobalStyle;

export const textPreset4 = css`
  font-size: 32px;    // Default font size
  line-height: normal;   // Default line height
`;
