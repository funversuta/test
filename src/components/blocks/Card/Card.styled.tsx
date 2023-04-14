import styled from 'styled-components';
import Image from '@/components/common/Image/Image';
import { allBreakpointValue, color, font, mediaBreakpointUp, vw } from '@/style/mixins';
export const Container = styled.div`
    position: relative;
    width: 100%;

    ${mediaBreakpointUp('md')} {
        width: 48.5%;
    }

    ${mediaBreakpointUp('xl')} {
        width: 31.5%;

        &:nth-child(n + 4) {
            margin-top: ${vw(35, 'xl')};
        }
    }

    ${mediaBreakpointUp('xxl')} {
        width: 31.62%;

        &:nth-child(n + 4) {
            margin-top: ${vw(40, 'fhd')};
        }
    }
`;

export const CardImage = styled(Image)`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    border-radius: 16px;
    height: 220px;
    display: flex;

    ${mediaBreakpointUp('xl')} {
        height: ${vw(200, 'xl')};
    }
    ${mediaBreakpointUp('fhd')} {
        width: ${vw(506, 'fhd')};
        height: ${vw(300, 'fhd')};
    }
`;

export const TextCardWrapper = styled.div`
    ${allBreakpointValue('margin-top', 20, 12, 12, 8, 8)};
`;

export const TitleCard = styled.div`
    ${font('font26')};
    color: ${({ theme }) => (theme.secondary.text === 'white' ? color('white', 0.8) : color('dark'))};
`;

export const DescriptionCard = styled.div`
    color: ${color('white')};
    ${font('font18_2')};
`;

export const DescriptionWrapper = styled.div`
    ${allBreakpointValue('margin-top', 20, 12, 12, 8, 8)};
    display: flex;
    color: ${({ theme }) => (theme.secondary.text === 'white' ? color('white', 0.6) : color('dark', 0.6))};
    ${font('font18')};
`;

export const Point = styled.div`
    width: 6px;
    height: 6px;
    background: ${({ theme }) => (theme.secondary.text === 'white' ? color('white', 0.6) : color('dark', 0.6))};
    margin-left: ${vw(20, 'fhd')};
    margin-right: ${vw(20, 'fhd')};
    border-radius: 25px;
    display: flex;
    align-self: center;
`;
