import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
`;

export const Row = styled.div`
    padding-top: 5%;
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Columns = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 30%;
`;

export const Element = styled.div`
    width: 100%;
`;

export const Neck = styled(Element)`
    padding-top: 1%;
`;

export const Circle = styled.div`
    border-radius: 50px;
    width: 25px;
`;

export const RowCenter = styled(Row)`
    padding: 0;
    margin: 0;
    align-items: center;
`;

export const Line = styled.div`
    width: 60%;
`;

export const Column = styled(Columns)`
    width: 45%;
`;

export const HalfRow = styled.div`
    width: 45%;
`;
