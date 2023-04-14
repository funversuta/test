import { allBreakpointValue, color, font, mediaBreakpointUp, vw } from '@/style/mixins';
import styled from 'styled-components';
import { Container as Element, PercentIcon, Numbers, Text } from '../Element/Element.styled';
import SkeletonCheck from '../SkeletonCheck/SkeletonCheck';

export const Container = styled(SkeletonCheck)`
    position: relative;
    background: ${color('lightGray')};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    ${allBreakpointValue('padding', 20, 14, 14, 12, 12)};
    ${allBreakpointValue('height', 439, 324, 304, 291, 172)};
`;

export const Head = styled.div`
    display: flex;
    align-items: center;

    ${Element} {
        display: flex;
        align-items: center;
        svg {
            width: 10px;
            height: 10px;
        }

        ${mediaBreakpointUp('fhd')} {
            svg {
                width: ${vw(14)};
                height: ${vw(14)};
            }
        }
    }
`;

export const ActualDate = styled.div`
    ${allBreakpointValue('margin-top', 20, 11, 11.5, 12.5, 8.5)};
    ${font('font18_2')};
    color: ${color('dark')};
`;

export const Row = styled.div`
    display: flex;
    align-items: center;

    ${Element} {
        ${Numbers} {
            position: relative;
            ${font('font80')};
            margin-left: 10px;
            padding-right: 10px;

            ${mediaBreakpointUp('xl')} {
                margin-left: 15px;
                padding-right: 12px;
            }
            ${mediaBreakpointUp('fhd')} {
                margin-left: ${vw(24, 'fhd')};
                padding-right: 20px;
            }
        }

        ${PercentIcon} {
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
    }
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

    ${Element} {
        display: flex;
        align-items: center;
        margin-top: 0;

        ${mediaBreakpointUp('md')} {
            margin-top: 8px;
        }

        ${mediaBreakpointUp('fhd')} {
            margin-top: 10px;
        }

        ${Text} {
            ${font('font18_2')};
            color: ${color('dark')};
            margin: 0;
        }

        ${Numbers} {
            ${font('font18_2')};
            color: ${color('dark')};

            ${mediaBreakpointUp('fhd')} {
                padding-right: 10px;
            }
        }

        ${PercentIcon} {
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
    }
`;

export const Content = styled.div`
    display: flex;

    ${allBreakpointValue('margin-top', 60, 42, 42, 43, 28)};

    ${mediaBreakpointUp('md')} {
        flex-direction: column;
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

export const Footer = styled.div`
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
`;

export const RregularText = styled.span`
    ${font('font18_2')};
    color: ${color('dark')};
    margin: 0;

    ${mediaBreakpointUp('md')} {
        margin-top: 8px;
    }
`;
