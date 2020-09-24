import styled from "styled-components";


const FooterCopyright = styled.div`
    display: flex;
    
    span {
        ${({ theme }) => theme.typography.font14};
        line-height: 1.3;
        color: ${({ theme }) => theme.colors.white};
    }
    
    a {
        margin-left: auto;
    }
`

export default FooterCopyright
