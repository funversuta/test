import Link from 'next/link';
import styled from 'styled-components'
import { Base } from '../../../interfaces'
import HeaderLangs from './HeaderLangs'
import HeaderSandwichBtn from './HeaderSandwichBtn'
import Only from '../../icons/only.svg'

const Header = styled.header<{ contrast: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.color1};

    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        width: 100%;
        padding: 50px ${({ theme }) => theme.variables.col / 1.6}vw;
    }
    
    svg {
        width: 60px;
        height: 22px;
    }
`

interface HeaderProps extends Base {
    className?: string,
    contrast: boolean,
}

const Index = ({ className, languages = [], contrast = false }: HeaderProps) => {
    return (
        <Header className={className} contrast={contrast}>
            <Link href="/">
                <a><Only/></a>
            </Link>
            <HeaderLangs contrast={contrast}>
                {languages.map(({ text, code }) =>
                    <Link key={code} href="/[lang]" as={`/${code}`}>
                        <a>{text}</a>
                    </Link>
                )}
            </HeaderLangs>
            <HeaderSandwichBtn contrast={contrast} />
        </Header>
    )
}

export default Index
