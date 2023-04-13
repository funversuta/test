import { allBreakpointValue, color } from '@/style/mixins';
import styled from 'styled-components';

export const Container = styled.button`
    position: absolute;
    ${allBreakpointValue('inset', 20, 12, 12, 12, 12)};
    ${allBreakpointValue('width', 50, 34, 34, 30, 30)};
    ${allBreakpointValue('height', 50, 34, 34, 30, 30)};
    ${allBreakpointValue('padding', 13, 9, 9, 8, 8)};
    z-index: 2;
    border-radius: 50px;
    border-width: 0px;
    background: ${color('dark', 0.2)};
    transition: opacity 0.3s;
    transition-duration: 0.3s;
    text-decoration: none;
    cursor: pointer;

    &:active {
        display: block;
        position: absolute;
        opacity: 0.2;
    }

    svg {
        ${allBreakpointValue('width', 24, 16, 16, 14, 14)};
        ${allBreakpointValue('height', 24, 16, 16, 14, 14)};
    }
`;
