import { allBreakpointValue, mediaBreakpointUp, vw } from '@/style/mixins';
import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    background: #f3f3f3;
    border-radius: 16px;
    ${allBreakpointValue('margin-top', 20, 12, 12, 12, 12)};
    padding: 12px;

    ${mediaBreakpointUp('fhd')} {
        padding: ${vw(20, 'fhd')};
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 28px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        display: none;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: '';
        height: 21px;
        width: 21px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: #2196f3;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 28px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;
export const ValueColor = styled.div`
    margin-right: 20px;
`;

export const ThemeWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
`;
