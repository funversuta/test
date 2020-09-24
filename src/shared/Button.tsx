import styled from "styled-components"

const Button = styled.a`
    display: inline-block;
    position: relative;
    padding: 20px 40px;
    border-radius: 30px;
    ${({ theme }) => theme.typography.font16};
    line-height: 1.25;
    cursor: pointer;
    transition: background-color .3s, border .3s, color .3s;
`

export default Button
