import breakpoints, { Breakpoints } from './breakpoints';
import variables, { Offset, FontFamily } from './variables';
import colors, { Colors } from './colors';
import typography, { Typography } from './typography';
import { css, FlattenSimpleInterpolation } from 'styled-components';
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
    return `@media(min-width: ${breakpoints[breakpoint]}px)`;
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
    return `@media(max-width: ${breakpoints[breakpoint] - 1}px)`;
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
    const widthInPx = typeof screenWidth === 'number' ? screenWidth : breakpoints[screenWidth];
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
 * color: ${color('black', 0.5)};
 */
export const color: (value: Colors, opacity?: number) => string = (value, opacity = 1) => {
    return rgba(colors[value], opacity);
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
 * ${mediaBreakpointDown('xs')} {
 *     padding: 0 ${offset('mobile')};
 * }
 */

export const allBreakpointValue = (
    property: string,
    desktop1920: number,
    desktop1440: number,
    desktop1280?: number,
    tablet768?: number,
    mobile375?: number
) => {
    let result = '';
    if (mobile375) {
        result += ` ${property}: ${vw(mobile375, 375)};`;
    }
    if (tablet768) {
        result += ` ${mediaBreakpointUp('md')} {
            ${property}: ${vw(tablet768, 768)};
        }; `;
    }

    if (desktop1280) {
        result += ` ${mediaBreakpointUp('xl')} {
            ${property}: ${vw(desktop1280, 1280)};
        }; `;
    }

    result += `
        ${mediaBreakpointUp('xxl')} {
            ${property}: ${vw(desktop1440, 1440)};
        }

        ${mediaBreakpointUp('fhd')} {
            ${property}: ${vw(desktop1920, 1920)};
        }
    `;
    return result;
};

export const sideOffsets = (property: string = 'padding', isNegative?: boolean) => {
    return css`
        ${property}-left: ${vw(variables.offset.mobile * (isNegative ? -1 : 1), 375)};
        ${property}-right: ${vw(variables.offset.mobile * (isNegative ? -1 : 1), 375)};

        ${mediaBreakpointUp('md')} {
            ${property}-left: ${vw(variables.offset.tablet * (isNegative ? -1 : 1), 768)};
            ${property}-right: ${vw(variables.offset.tablet * (isNegative ? -1 : 1), 768)};
        }

        ${mediaBreakpointUp('xl')} {
            ${property}-left: ${vw(variables.offset.desktop1280 * (isNegative ? -1 : 1), 1280)};
            ${property}-right: ${vw(variables.offset.desktop1280 * (isNegative ? -1 : 1), 1280)};
        }

        ${mediaBreakpointUp('xxl')} {
            ${property}-left: ${vw(variables.offset.desktop1440 * (isNegative ? -1 : 1), 1440)};
            ${property}-right: ${vw(variables.offset.desktop1440 * (isNegative ? -1 : 1), 1440)};
        }

        ${mediaBreakpointUp('fhd')} {
            ${property}-left: ${vw(variables.offset.desktop1920 * (isNegative ? -1 : 1), 1920)};
            ${property}-right: ${vw(variables.offset.desktop1920 * (isNegative ? -1 : 1), 1920)};
        }
    `;
};

export const offset: (type: Offset) => string = (type) => {
    const size = {
        mobile: 375,
        tablet: 768,
        desktop1280: 1280,
        desktop1440: 1440,
        desktop1920: 1920
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

/**
 * @param name - Название семейства шрифтов
 * @returns Стандартные стили для указанного семейства шрифтов
 */
export const fontFamily: (name: FontFamily) => FlattenSimpleInterpolation = (name) => {
    return css`
        font-family: ${variables.fonts[name]};
    `;
};

/**
 * @description Применение стилей для эффектов ховера с помощью медиа-запроса.
 * @description Медиа-запрос определяет может ли устройство использовать ховеры
 * @param styles - Стили, применяемые для ховера
 * @example
 * ${hover(css`
 *     opacity: 0.5;
 * `)}
 */
export const hover = (styles: FlattenSimpleInterpolation): FlattenSimpleInterpolation => {
    return css`
        @media (hover: hover) {
            &:hover {
                ${styles}
            }
        }
    `;
};
