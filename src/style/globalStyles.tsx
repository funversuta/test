import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import { color, fontFamily } from './mixins';
import { Container as TitleCard, DescriptionWrapper } from '@/components/common/Card/Card.styled';
import { Title } from '@/components/common/SliderWithWidget/SliderWithWidget.styled';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }

    html {
        scrollbar-gutter: stable;
        color: ${color('black')};
        ${fontFamily('GraphikLCGMedium')};
    }

    body {
        padding: 0;
        margin: 0;
        overscroll-behavior: none;
        overflow: auto;

        &.dark {
            background: black;

            ${TitleCard}{
                color: ${color('white', 0.8)};
            }

            ${DescriptionWrapper}{
                color: ${color('white', 0.6)};
            }

            ${Title}{
                color: ${color('white')};
            }
        }

        ${TitleCard}{
            color:  ${color('dark')};
        }

        ${DescriptionWrapper}{
            color: ${color('dark', 0.6)};
        }
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
