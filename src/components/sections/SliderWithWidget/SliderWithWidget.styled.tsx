import { allBreakpointValue, font, mediaBreakpointUp, sideOffsets } from '@/style/mixins';
import styled from 'styled-components';
import AppearAnimation from '../../common/AppearAnimation/AppearAnimation';

export const Container = styled(AppearAnimation)`
    position: relative;
    ${sideOffsets()};
    ${allBreakpointValue('padding-top', 160, 130, 100, 60, 60)};
    ${allBreakpointValue('padding-bottom', 120, 110, 80, 60, 28)};
`;

export const Title = styled.p`
    ${font('font36')};
    ${allBreakpointValue('margin-bottom', 28, 25, 20, 12, 20)};
    color: ${({ theme }) => theme.secondary.text};
`;

export const MainContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    ${mediaBreakpointUp('md')} {
        flex-direction: row;
    }
`;
