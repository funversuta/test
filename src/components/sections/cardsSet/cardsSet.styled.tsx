import AppearAnimation from '@/components/common/AppearAnimation/AppearAnimation';
import { allBreakpointValue, sideOffsets } from '@/style/mixins';
import styled from 'styled-components';

export const Container = styled(AppearAnimation)`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    ${sideOffsets()};
    ${allBreakpointValue('gap', 40, 30, 28, 20, 28)};
`;
