import styled from 'styled-components'
import FooterInner from "./FooterInner";
import FooterLinks from "./FoooterLinks";
import FooterCopyright from "./FooterCopyright";
import {Base} from "../../../interfaces"

const Footer = styled.footer`
    position: relative;
    background-color: ${({ theme }) => theme.colors.color1};
`

interface FooterProps extends Base {
    className?: string,
    backgroundName?: string,
}
const Index = ({ className, footer }: FooterProps) => {
    return (
        <Footer className={className}>
            <FooterInner>
                {footer?.links &&
                    <FooterLinks>
                        {footer?.links.map(({ href, title}) => <a key={href} href={ href }>{ title }</a>)}
                    </FooterLinks>
                }
               <FooterCopyright>
                   <span>{footer?.copyright}</span>
                   <a href="https://onlydigital.ru" target="_blank">Design by Only.</a>
               </FooterCopyright>
            </FooterInner>
        </Footer>
    )
}

export default Index
