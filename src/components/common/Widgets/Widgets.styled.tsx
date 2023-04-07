import { mediaBreakpointUp, vw } from '@/style/mixins';
import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${mediaBreakpointUp('md')} {
        margin-top: 0;
        width: ${vw(159, 'md')};
    }

    ${mediaBreakpointUp('xl')} {
        width: ${vw(249, 'xl')};
    }

    ${mediaBreakpointUp('fhd')} {
        width: ${vw(370, 'fhd')};
    }
`;
