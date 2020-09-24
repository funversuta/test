import styled from 'styled-components'

const HeaderLangs = styled.div<{ contrast?: boolean }>`
    display: flex;
    margin-left: ${145 / 1920 * 100}vw;
    
    a {
        margin-right: 20px;
        cursor: pointer;
        color: ${({ theme, contrast }) => contrast ? theme.colors.color4 : theme.colors.white};
        transition: color .3s ease-in-out;
        
        &:last-child {
            margin-right: 0;
        }
        
        &:hover, &:visited, &:active {
            color: ${({ theme, contrast }) => contrast ? theme.colors.color4 : theme.colors.white};
        }
    }
`

export default HeaderLangs
