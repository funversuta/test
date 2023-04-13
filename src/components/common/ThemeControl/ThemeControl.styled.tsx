import { allBreakpointValue, color, font, fontFamily, mediaBreakpointUp } from '@/style/mixins';
import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${color('lightGray')};
    border-radius: 16px;
    padding: 12px;
    ${allBreakpointValue('margin-top', 20, 12, 12, 12, 12)};

    ${mediaBreakpointUp('md')} {
        flex-direction: column;
        justify-content: unset;
        align-items: start;
    }

    ${mediaBreakpointUp('fhd')} {
        padding: 20px;
    }
`;

export const Title = styled.span`
    color: ${color('blue')};
    ${font('font20_2')};
`;

export const ValueColor = styled.div`
    margin-right: 12px;
    ${fontFamily('Roboto')};
    ${font('font18_2')};
    ${mediaBreakpointUp('md')} {
        margin-right: 20px;
    }
`;

export const ThemeWrapper = styled.div`
    display: flex;
    align-items: center;

    ${mediaBreakpointUp('md')} {
        margin-top: 5px;
    }

    ${mediaBreakpointUp('xl')} {
        margin-top: 8px;
    }
    ${mediaBreakpointUp('xxl')} {
        margin-top: 10px;
    }
`;

export const Input = styled.input.attrs(({ type }) => ({
    type: type || 'checkbox'
}))`
    display: none;
`;

export const SliderRound = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid ${color('dark', 0.2)};
    transition: 0.4s;
    border-radius: 28px;

    &:before {
        position: absolute;
        content: '';
        height: 10px;
        width: 10px;
        top: 1px;
        left: 2px;
        bottom: 2px;
        background-color: ${color('blue')};
        transition: 0.4s;
        border-radius: 50%;

        ${mediaBreakpointUp('xl')} {
            height: 14px;
            width: 14px;
        }

        ${mediaBreakpointUp('fhd')} {
            top: 2px;
            left: 3px;
            bottom: 3px;
            width: 21px;
            height: 21px;
        }
    }
`;

export const Switch = styled.label`
    position: relative;
    display: inline-block;
    height: 14px;
    ${allBreakpointValue('width', 54, 34, 34, 26, 26)};

    ${mediaBreakpointUp('xl')} {
        height: 18px;
    }

    ${mediaBreakpointUp('fhd')} {
        height: 28px;
    }

    ${Input}:checked + ${SliderRound}:before {
        background-color: ${color('white')};
        left: auto;
        right: 2px;
    }

    ${Input}:checked + ${SliderRound} {
        background-color: ${color('blue')};
    }

    ${Input}:focus {
        box-shadow: 0 0 1px ${color('blue')};
    }
`;
