import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import { color } from './mixins';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }

    html {
        font-family: ${variables.fonts.default};
        scrollbar-gutter: stable;
        color: ${color('black')};
    }

    body {
        padding: 0;
        margin: 0;
        overscroll-behavior: none;
        overflow: auto;
    }

    h1, h2, h3, h4, h5, span, a {
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        text-transform: inherit;
        text-decoration: inherit;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
        outline: none;
    }

    button {
        font-family: ${variables.fonts.default};
        
        &, &:active,
        &:focus {
            outline: none;
        }
    }
`;

export default GlobalStyle;
