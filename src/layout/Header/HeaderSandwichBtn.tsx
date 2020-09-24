import styled from "styled-components";

const HeaderSandwichBtn = styled.div<{ contrast?: boolean }>`
    position: relative;
    width: 60px;
    height: 10px;
    margin-left: auto;
    z-index: 5;
    cursor: pointer;
    
    &::before, &::after{
        position: absolute;
        content: '';
        width: 100%;
        height: 2px;
        background-color: ${({ theme, contrast }) => contrast ? theme.colors.color4 : theme.colors.white};
        transition: background .3s ease-in-out;
    }
    
    &::before {
        top: 0;
    }
    
    &::after {
        bottom: 0;
    }
`


export default HeaderSandwichBtn
