import breakpoints, {Breakpoints} from './breakpoints'
import variables, {Offset} from "./variables";
import colors, {Colors} from "./colors";
import typography, {Typography} from "./typography";
import {FlattenSimpleInterpolation} from "styled-components";

/**
 * @param breakpoint - целевой Breakpoint
 * @return Медиа запрос активный для заданного Breakpoint и выше
 * @example
 * ${mediaBreakpointUp('xl')} {
 *     // styles
 * }
 */
export const mediaBreakpointUp: (breakpoint: Breakpoints) => string = (breakpoint) => {
    return `@media(min-width: ${breakpoints[breakpoint]})`;
};

/**
 * @param breakpoint - целевой Breakpoint
 * @return Медиа запрос активный для заданного Breakpoint и ниже
 * @example
 * ${mediaBreakpointDown('xl')} {
 *     // styles
 * }
 */
export const mediaBreakpointDown: (breakpoint: Breakpoints) => string = (breakpoint) => {
    return `@media(max-width: ${breakpoints[breakpoint]})`;
};

/**
 * @param value - Значение на целевом экране
 * @param screenWidth - Ширина целевого экрана (число или Breakpoint)
 * @returns Относительное значение в формате vw. Результат изменяется вместе с шириной экрана
 */
export const vw: (value: number, screenWidth?: Breakpoints | number) => string = (value, screenWidth: Breakpoints | number = 1920) => {
    const widthInPx = typeof screenWidth === 'number' ? screenWidth : parseInt(breakpoints[screenWidth])
    return `${(value / widthInPx) * 100}vw`;
};

/**
 * @param value - Значение на целевом экране
 * @param screenHeight - Высота целевого экрана
 * @returns Относительное значение в формате vh. Результат изменяется вместе с высотой экрана
 */
export const vh: (value: number, screenHeight?: number) => string = (value, screenHeight = 1080) => {
    return `${(value / screenHeight) * 100}vh`;
};

/**
 * @param value - Цвет (название или номер);
 */
export const color: (value: Colors) => string = (value) => {
    return (<any>colors)[typeof value === 'number' ? `color${value}`: value];
};

/**
 * @param value - Количество колонок
 * @returns Относительное значение в формате vw. Результат изменяется вместе с шириной экрана
 */
export const cols: (value: number) => string = (value) => {
    return `${variables.col * value}vw`;
};

/**
 * @param type - Тип устройства
 * @returns Относительное значение в формате vw. Результат изменяется вместе с шириной экрана
 */
export const offset: (type: Offset) => string = (type) => {
    return vw(variables.offset[type], type === "mobile" ? 375 : 768);
}

/**
 * @param name - Название типа текста
 * @returns Стандартные стили для указаннгого типа текста
 */
export const font: (name: Typography) => FlattenSimpleInterpolation = (name) => {
    return typography[name];
}