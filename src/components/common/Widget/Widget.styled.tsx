import { allBreakpointValue, color, font, mediaBreakpointUp, vw } from '@/style/mixins';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: relative;
    background: #f3f3f3;
    border-radius: 16px;
    ${allBreakpointValue('padding', 20, 14, 14, 12, 12)};
    ${allBreakpointValue('height', 439, 304, 291, 12.5, 172)};
    display: flex;
    flex-direction: column;
`;

export const Top = styled.div`
    display: flex;
    align-items: centre;

    .react-loading-skeleton {
        width: 330px;
        height: 20px;
    }
`;

export const Title = styled.span`
    ${allBreakpointValue('margin-left', 13, 10, 9, 9, 10)};
    color: ${color('blue')};
    ${font('font20_2')};
`;

export const ActualDate = styled.div`
    ${allBreakpointValue('margin-top', 20, 11, 11.5, 12.5, 8.5)};
`;

export const Middle = styled.div`
    ${allBreakpointValue('margin-top', 60, 42, 42, 43, 28)};

    .react-loading-skeleton {
        width: 330px;
        height: 20px;
    }
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;

    .react-loading-skeleton {
        width: 330px;
        height: 40px;
    }
`;

export const Text = styled.p``;

export const Condition = styled.span`
    position: relative;
    width: fit-content;
    padding-right: 10px;

    .percent {
        font-size: 8px; /* задает размер иконки */
        width: 8px;
        height: 8px;
        border: 2px solid black;
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 50%;
        margin: 0;
    }
`;

export const Element = styled.div`
    display: block;

    .percent {
        font-size: 8px; /* задает размер иконки */
        width: 8px;
        height: 8px;
        border: 2px solid black;
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 50%;
        margin: 0;
    }
    svg {
        width: 14px;
        height: 8px;

        ${mediaBreakpointUp('xl')} {
            width: 16px;
            height: 9px;
        }
        ${mediaBreakpointUp('fhd')} {
            width: 24px;
            height: 14px;
        }
    }
`;

export const Numbers = styled.span`
    position: relative;
    ${font('font20')};
    margin-left: 4px;
    padding-right: 10px;
    ${css`
        ${mediaBreakpointUp('xl')} {
            margin-left: 8px;
        }

        ${mediaBreakpointUp('fhd')} {
            margin-left: ${vw(10, 'fhd')};
        }
    `}
`;

export const Number = styled.span`
    .percent {
        width: 20px;
        height: 20px;
        border: 6px solid black;
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 50%;
        margin: 0;
    }
    position: relative;
    ${font('font80')};
    margin-left: 10px;
    padding-right: 20px;

    ${css`
        ${mediaBreakpointUp('xl')} {
            margin-left: 15px;
        }
        ${mediaBreakpointUp('fhd')} {
            margin-left: ${vw(24, 'fhd')};
        }
    `}
`;
