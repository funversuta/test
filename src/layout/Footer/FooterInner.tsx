import styled from "styled-components";
import {rgba} from "polished";


const FooterInner = styled.div`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    padding: ${({ theme }) => theme.variables.col}vw;
    width: ${({ theme }) => theme.variables.col * 18}vw;
    border-top: 1px solid ${({ theme }) => rgba(theme.colors.black, .1)};
`

export default FooterInner
