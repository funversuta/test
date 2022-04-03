import breakpoints, { Breakpoints } from './breakpoints';
import variables, { Offset } from './variables';
import colors, { Colors } from './colors';
import typography, { Typography } from './typography';
import { FlattenSimpleInterpolation } from 'styled-components';
import { rgba } from 'polished';

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
 * @example
 * width: ${vw(480)};
 *
 * ${mediaBreakpointDown('md')} {
 *     width: ${vw(240, 'md')};
 * }
 */
export const vw: (value: number, screenWidth?: Breakpoints | number) => string = (value, screenWidth: Breakpoints | number = 1920) => {
    const widthInPx = typeof screenWidth === 'number' ? screenWidth : parseInt(breakpoints[screenWidth]);
    return `${(value / widthInPx) * 100}vw`;
};

/**
 * @param value - Значение на целевом экране
 * @param screenHeight - Высота целевого экрана
 * @returns Относительное значение в формате vh. Результат изменяется вместе с высотой экрана
 * @example
 * height: ${vh(480)};
 *
 * ${mediaBreakpointDown('md')} {
 *     height: ${vw(240, 'md')};
 * }
 */
export const vh: (value: number, screenHeight?: number) => string = (value, screenHeight = 1080) => {
    return `${(value / screenHeight) * 100}vh`;
};

/**
 * @param value - Цвет (название или номер);
 * @param opacity - Прозрачность;
 * @example
 * color: ${color('white')};
 * background: ${color(1)};
 * @example
 * color: ${color('black', 0.5)};
 * background: ${color(1, 0.3)};
 */
export const color: (value: Colors, opacity?: number) => string = (value, opacity = 1) => {
    return rgba((<any>colors)[typeof value === 'number' ? `color${value}` : value], opacity);
};

/**
 * @param value - Количество колонок
 * @returns Относительное значение в формате vw. Результат изменяется вместе с шириной экрана
 * @example
 * width: ${cols(4)};
 */
export const cols: (value: number) => string = (value) => {
    return `${variables.col * value}vw`;
};

/**
 * @param type - Тип устройства
 * @returns Относительное значение в формате vw. Результат изменяется вместе с шириной экрана
 * @example
 * padding: 0 ${offset('desktop')};
 *
 * ${mediaBreakpointDown('lg')} {
 *     padding: 0 ${offset('tablet')};
 * }
 *
 * ${mediaBreakpointDown('iphone')} {
 *     padding: 0 ${offset('mobile')};
 * }
 */
export const offset: (type: Offset) => string = (type) => {
    const size = {
        mobile: 375,
        tablet: 768,
        desktop: 1920
    };
    return vw(variables.offset[type], size[type]);
};

/**
 * @param name - Название типа текста
 * @returns Стандартные стили для указанного типа текста
 * @example
 * ${font('h1')};
 */
export const font: (name: Typography) => FlattenSimpleInterpolation = (name) => {
    return typography[name];
};
