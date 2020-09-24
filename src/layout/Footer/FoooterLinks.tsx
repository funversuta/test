import styled from "styled-components";
import {rgba} from "polished";


const FooterLinks = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    
    a {
        ${({ theme }) => theme.typography.font16};
        line-height: 1.25;
        font-weight: 800;
        color: ${({theme}) => theme.colors.white};
        margin-right: 30px; 
        transition: color .3s;
        
        &:last-child {
            margin-right: 0;
        }
        
        &:hover {
            color: ${({ theme }) => rgba(theme.colors.color2, .6)};
        }
    }

`

export default FooterLinks
