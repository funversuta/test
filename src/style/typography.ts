import breakpoints from "./breakpoints";
import {css, FlattenSimpleInterpolation} from "styled-components";

type AdaptiveFonts = (mobile: number, tablet: number, desktop: number) => FlattenSimpleInterpolation
const getAdaptiveFont: AdaptiveFonts = (mobile, tablet, desktop)=> {
    return css`
        font-size: ${mobile}px;

        @media (min-width: ${breakpoints.md}) {
            font-size: ${tablet}px;
        }
    
        @media (min-width: ${breakpoints.lg}) {
            font-size: ${desktop / parseInt(breakpoints.fhd) * 100}vw;
        }
        
        @media (min-width: ${breakpoints.fhd}) {
            font-size: calc(${desktop / parseInt(breakpoints.fhd) * 100 / 2}vw + ${desktop / 1080 * 100 / 2}vh);
        }
    `
}

const typography = {
    font16: css`
        ${getAdaptiveFont(12, 14, 16)};
        line-height: 1;
        font-weight: 400;
    `,
    font20: css`
        ${getAdaptiveFont(16, 18, 20)};
        line-height: 1;
        font-weight: 400;
    `,
}

export type Typography = keyof typeof typography

export default typography
