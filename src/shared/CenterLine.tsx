import styled from "styled-components";

const CenterLine = styled.div`
    position: absolute;
    top: 0;
    left: ${({ theme }) => theme.variables.col * 9}vw;
    height: 100%;
    width: 1px;
    transition: background .3s;
`

export default CenterLine