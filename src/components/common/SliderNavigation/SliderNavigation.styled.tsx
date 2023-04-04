import styled, { css } from 'styled-components';
import { allBreakpointValue, color, mediaBreakpointUp, vw } from '@/style/mixins';

export const Container = styled.div`
    display: none;
    position: absolute;
    ${allBreakpointValue('margin', 40, 28, 28, 20, 12)};
    right: 0;
    z-index: 10;

    ${mediaBreakpointUp('xl')} {
        display: flex;
        align-items: center;
    }

    .swiper-button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        border-radius: 50px;
        cursor: pointer;
        transition: opacity 0.3s ease-in-out;
        background: ${color('white', 0.15)};

        &.disabled {
            opacity: 0.3;
            cursor: default;
        }
        ${css`
            &.prev {
                &:hover:not(.disabled) {
                    svg {
                        transform: translateX(-5px) rotate(-180deg);
                    }
                }

                svg {
                    transform: rotate(-180deg);
                }
            }
        `}

        &.next {
            ${allBreakpointValue('margin-left', 10, 8, 7, 8, 8)};
            ${css`
                &:hover:not(.disabled) {
                    svg {
                        transform: translateX(5px);
                    }
                }
            `}
        }

        svg {
            display: block;
            padding-left: ${vw(5, 'fhd')};
            stroke: ${color('white')};
            stroke-width: 2px;
            transition: transform 0.3s ease-in-out;
        }
    }
`;
