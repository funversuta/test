import { mediaBreakpointUp, font, vw, allBreakpointValue, color } from '@/style/mixins';
import styled from 'styled-components';

export const Container = styled.div`
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
`;

export const Numbers = styled.span`
    position: relative;
    ${font('font20')};
    margin-left: 4px;
    padding-right: 6px;

    ${mediaBreakpointUp('xl')} {
        margin-left: 8px;
    }

    ${mediaBreakpointUp('fhd')} {
        padding-right: 10px;
        margin-left: ${vw(10, 'fhd')};
    }
`;

export const PercentIcon = styled.span`
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

export const MyLink = styled.a`
    &:hover {
        text-decoration: underline;
    }
`;

export const Description = styled.span`
    ${allBreakpointValue('margin-left', 13, 10, 9, 9, 10)};
    color: ${color('blue')};
    ${font('font20_2')};
`;
