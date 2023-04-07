import { allBreakpointValue, font, mediaBreakpointUp, sideOffsets } from '@/style/mixins';
import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    ${sideOffsets()};
    ${allBreakpointValue('padding-top', 160, 130, 100, 60, 60)};
    ${allBreakpointValue('padding-bottom', 120, 110, 80, 60, 28)};
`;

export const Title = styled.div`
    ${font('font36')};
    ${allBreakpointValue('margin-bottom', 28, 25, 20, 12, 20)};
`;
export const MainContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    ${mediaBreakpointUp('md')} {
        flex-direction: row;
    }
`;
