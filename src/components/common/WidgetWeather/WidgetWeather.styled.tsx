import { allBreakpointValue, color, font, mediaBreakpointUp, vw } from '@/style/mixins';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: relative;
    background: #f3f3f3;
    border-radius: 16px;
    ${allBreakpointValue('padding', 20, 14, 14, 12, 12)};
    ${allBreakpointValue('height', 439, 324, 304, 291, 172)};
    display: flex;
    flex-direction: column;
`;

export const Top = styled.div`
    display: flex;
    align-items: center;

    a:hover {
        text-decoration: underline;
    }

    .react-loading-skeleton {
        ${allBreakpointValue('width', 330, 252, 221, 135, 311)};
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
    ${font('font18_2')};
    color: ${color('dark')};
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
`;

export const Row2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    gap: 8px;

    ${mediaBreakpointUp('md')} {
        margin-left: 0;
        gap: 0;
    }
`;

export const Middle = styled.div`
    display: flex;

    ${allBreakpointValue('margin-top', 60, 42, 42, 43, 28)};

    ${mediaBreakpointUp('md')} {
        flex-direction: column;
    }

    .react-loading-skeleton {
        ${allBreakpointValue('width', 330, 252, 221, 135, 140)};
        height: 15px;
        margin-top: 5px;
    }

    svg {
        width: 31px;
        height: 27px;

        ${mediaBreakpointUp('xl')} {
            width: 47px;
            height: 41px;
        }
        ${mediaBreakpointUp('fhd')} {
            width: 72px;
            height: 64px;
        }
    }
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;

    ${mediaBreakpointUp('md')} {
        justify-content: unset;
        gap: 12px;
        flex-wrap: wrap;
    }

    ${mediaBreakpointUp('xl')} {
        justify-content: space-between;
        gap: 0;
    }

    .react-loading-skeleton {
        ${allBreakpointValue('width', 330, 252, 221, 135, 311)};
        height: 30px;
        margin-top: 5px;
    }
`;

export const Text = styled.p`
    ${font('font14')};
    color: ${color('dark', 0.5)};
    margin-bottom: 9px;
    margin-top: 0;

    ${mediaBreakpointUp('fhd')} {
        margin-top: 14px;
    }
`;

export const RregularText = styled.span`
    ${font('font18_2')};
    color: ${color('dark')};
    margin: 0;

    ${mediaBreakpointUp('md')} {
        margin-top: 8px;
    }
`;

export const Condition = styled.span`
    position: relative;
    width: fit-content;
    padding-right: 6px;
    ${font('font18_2')};
    color: ${color('dark')};

    ${mediaBreakpointUp('fhd')} {
        padding-right: 10px;
    }

    .percent {
        ${allBreakpointValue('width', 8, 5, 5, 4, 4)};
        ${allBreakpointValue('height', 8, 5, 5, 4, 4)};
        border: 1px solid ${color('dark')};
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 50%;
        margin: 0;

        ${mediaBreakpointUp('fhd')} {
            border: 2px solid ${color('dark')};
        }
    }
`;

export const Element = styled.div`
    display: block;

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

    .percent {
        ${allBreakpointValue('width', 8, 5, 5, 4, 4)};
        ${allBreakpointValue('height', 8, 5, 5, 4, 4)};
        border: 1px solid ${color('dark')};
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 50%;
        margin: 0;

        ${mediaBreakpointUp('fhd')} {
            border: 2px solid ${color('dark')};
        }
    }
`;

export const Numbers = styled.span`
    position: relative;
    ${font('font20')};
    margin-left: 4px;
    padding-right: 6px;
    ${css`
        ${mediaBreakpointUp('xl')} {
            margin-left: 8px;
        }

        ${mediaBreakpointUp('fhd')} {
            padding-right: 10px;
            margin-left: ${vw(10, 'fhd')};
        }
    `}
`;

export const Number = styled.span`
    .percent {
        ${allBreakpointValue('width', 20, 13, 13, 10, 10)};
        ${allBreakpointValue('height', 20, 13, 13, 10, 10)};
        border: 3px solid ${color('dark')};
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 50%;
        margin: 0;

        ${mediaBreakpointUp('xl')} {
            border: 4px solid ${color('dark')};
        }

        ${mediaBreakpointUp('fhd')} {
            border: 6px solid ${color('dark')};
        }
    }
    position: relative;
    ${font('font80')};
    margin-left: 10px;
    padding-right: 10px;

    ${css`
        ${mediaBreakpointUp('xl')} {
            margin-left: 15px;
            padding-right: 12px;
        }
        ${mediaBreakpointUp('fhd')} {
            margin-left: ${vw(24, 'fhd')};
            padding-right: 20px;
        }
    `}
`;
