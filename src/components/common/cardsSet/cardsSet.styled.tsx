import { allBreakpointValue, sideOffsets } from '@/style/mixins';
import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    ${sideOffsets()};
    ${allBreakpointValue('gap', 40, 30, 28, 20, 28)};
`;
