import { allBreakpointValue, color, font, mediaBreakpointUp } from '@/style/mixins';
import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mediaBreakpointUp('md')} {
        flex-direction: column;
        justify-content: unset;
        align-items: start;
    }

    background: #f3f3f3;
    border-radius: 16px;
    ${allBreakpointValue('margin-top', 20, 12, 12, 12, 12)};
    padding: 12px;

    ${mediaBreakpointUp('fhd')} {
        padding: 20px;
    }

    .switch {
        position: relative;
        display: inline-block;
        ${allBreakpointValue('width', 54, 34, 34, 26, 26)};
        height: 14px;

        ${mediaBreakpointUp('xl')} {
            height: 18px;
        }

        ${mediaBreakpointUp('fhd')} {
            height: 28px;
        }
    }

    .switch input {
        display: none;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid ${color('dark', 0.2)};
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: '';
        height: 10px;
        width: 10px;
        top: 1px;
        left: 2px;
        bottom: 2px;
        background-color: ${color('blue')};
        transition: 0.4s;

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

    input:checked + .slider:before {
        background-color: ${color('white')};
        left: auto;
        right: 2px;
    }

    input:checked + .slider {
        background-color: #2196f3;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 28px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;

export const Title = styled.span`
    color: ${color('blue')};
    ${font('font20_2')};
`;

export const ValueColor = styled.div`
    margin-right: 12px;

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
