import styled from "styled-components";
import Link from 'next/link';


const HeaderLogo = styled(Link)<{ contrast: boolean }>`
    path {
        fill: ${({ theme, contrast }) => contrast ? theme.colors.color3 : theme.colors.white};
        transition: fill .3s ease-in-out;
        
        &:nth-child(2) {
            fill: ${({ theme, contrast }) => contrast ? theme.colors.color5 : theme.colors.white};
        }
    }
`

export default HeaderLogo
