import styled from "styled-components";

const HeaderSidebarRight = styled.div<{ contrast?: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    width: ${({ theme }) => theme.variables.col * 2}vw;
    color: ${({ theme, contrast }) => contrast ? theme.colors.color4 : theme.colors.white};
    transition: color .3s ease-in-out;
    
    svg {
        position: absolute;
        bottom: 60px;
        left: 50%;
        stroke: ${({ theme, contrast }) => contrast ? theme.colors.color4 : theme.colors.white};
        fill: transparent;
        transform: translateX(-50%);
        transition: stroke .3s ease-in-out;
    }
`

export default HeaderSidebarRight
