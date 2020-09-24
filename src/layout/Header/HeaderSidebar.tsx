import styled from 'styled-components'

const HeaderSidebar = styled.div`
    display: flex;
    flex-flow: column nowrap;
    position: fixed;
    top: 50%;
    left: ${({ theme }) => theme.variables.col}vw;
    transform: translateY(-50%);

    a {
        line-height: 1.5;
        margin-bottom: 15px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

export default HeaderSidebar