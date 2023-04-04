import { color, vw } from '@/style/mixins';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: absolute;
    inset: ${vw(20, 'fhd')};
    width: ${vw(50, 'fhd')};
    height: ${vw(50, 'fhd')};
    border-width: 0px;
    z-index: 2;

    button {
        border-radius: 50px;
        border-width: 0px;
        background: ${color('dark', 0.2)};
        padding: ${vw(15, 'fhd')};
        transition: opacity 0.3s;
        transition-duration: 0.3s;
        text-decoration: none;
        cursor: pointer;

        ${css`
            &:active {
                display: block;
                position: absolute;
                opacity: 0.2;
            }
        `}
    }

    input {
        height: 0px;
        width: 0px;
        visibility: hidden;
        padding: 0;
        border-width: 0px;
    }
`;
