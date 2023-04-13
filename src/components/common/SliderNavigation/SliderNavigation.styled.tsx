import styled, { css } from 'styled-components';
import { allBreakpointValue, color, mediaBreakpointUp } from '@/style/mixins';

export const Container = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    ${allBreakpointValue('margin', 40, 28, 28, 20, 12)};
    right: 0;
    z-index: 10;
`;

export const Button = styled.button<{ isOver?: boolean; Reverse?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 50px;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    background: ${color('white', 0.15)};
    border-width: 0px;

    ${mediaBreakpointUp('md')} {
        padding: 9px;
    }

    ${mediaBreakpointUp('xl')} {
        padding: 10px;
    }

    ${mediaBreakpointUp('fhd')} {
        padding: 16px;
    }

    svg {
        display: block;
        stroke: ${color('white')};
        transition: transform 0.3s ease-in-out;
        width: 18px;
        height: 18px;

        ${mediaBreakpointUp('xl')} {
            stroke-width: 2px;
            width: 20px;
            height: 20px;
        }

        ${mediaBreakpointUp('fhd')} {
            width: 28px;
            height: 28px;
        }
    }

    ${({ isOver }) =>
        isOver &&
        css`
            opacity: 0.3;
            cursor: default;
        `}

    ${({ Reverse, isOver }) =>
        Reverse
            ? css`
                  &:hover {
                      svg {
                          transform: ${isOver ? '' : 'translateX(-5px) rotate(-180deg)'};
                      }
                  }

                  svg {
                      transform: rotate(-180deg);
                      padding-left: 6px;

                      ${mediaBreakpointUp('fhd')} {
                          padding-left: 10px;
                      }
                  }
              `
            : css`
                  ${allBreakpointValue('margin-left', 10, 8, 7, 8, 8)};

                  svg {
                      padding-left: 6px;

                      ${mediaBreakpointUp('fhd')} {
                          padding-left: 10px;
                      }
                  }

                  &:hover {
                      svg {
                          transform: ${isOver ? '' : 'translateX(5px)'};
                      }
                  }
              `};
`;
