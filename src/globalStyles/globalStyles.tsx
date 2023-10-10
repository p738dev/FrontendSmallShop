import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-width: 100vw;
    }

    main {
        width: 100%;
        min-height: calc(100vh - 250px - 280px);
    }
`;

export default GlobalStyle;
