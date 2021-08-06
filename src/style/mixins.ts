import breakpoints, {Breakpoints} from './breakpoints'
import variables, {Offset} from "./variables";

export const mediaBreakpointUp: (breakpoint: Breakpoints) => string = (breakpoint) => {
    return `@media(min-width: ${breakpoints[breakpoint]})`;
};

export const mediaBreakpointDown: (breakpoint: Breakpoints) => string = (breakpoint) => {
    return `@media(max-width: ${breakpoints[breakpoint]})`;
};

export const vw: (value: number, screenWidth?: number) => string = (value, screenWidth = 1920) => {
    return `${(value / screenWidth) * 100}vw`;
};

export const vh: (value: number, screenHeight?: number) => string = (value, screenHeight = 1080) => {
    return `${(value / screenHeight) * 100}vh`;
};

export const cols: (value: number) => string = (value) => {
    return `${variables.col * value}vw`;
};

export const offset: (type: Offset) => string = (type) => {
    return `${variables.offset[type]}px`;
}

export const getAdaptiveFont = (mobileSize: number, tabletSize: number, desktopSize: number) => {
    return `
        font-size: ${ mobileSize }px;

        @media (min-width: ${ breakpoints.md }) {
            font-size: ${ tabletSize }px;
        }

        @media (min-width: ${ breakpoints.xxl }) {
            font-size: ${ desktopSize }px;
        }
    `
}