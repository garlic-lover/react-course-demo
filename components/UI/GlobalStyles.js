import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        font-family : Raleway;
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.mainColor};
    }
    h1, h2, h3, h4, h5 {
        font-family : Montserrat ;
        letter-spacing : 4px;
        font-weight : 800;
    }
    h2 {
        font-size: 2rem;
        margin-bottom : 24px;
    }
    h3 {
        font-size: 1.6rem;
        margin-bottom : 20px;
    }
    h4 {
        font-size: 1.4rem;
        margin-bottom : 16px;
    }
    h5 {
        font-size: 1.2rem;
        margin-bottom : 12px;
    }
    p {
        line-height : 28px;
        margin-bottom : 24px;
    }
 `;

export default GlobalStyles;
