import breakpoints, {Breakpoints} from './breakpoints'
import variables, {Offset} from "./variables";
import colors, {Colors} from "./colors";

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

export const color: (value: Colors) => string = (value) => {
    return (<any>colors)[typeof value === 'number' ? `color${value}`: value];
};

export const cols: (value: number) => string = (value) => {
    return `${variables.col * value}vw`;
};

export const offset: (type: Offset) => string = (type) => {
    return vw(variables.offset[type], type === "mobile" ? 375 : 768);
}