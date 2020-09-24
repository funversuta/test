import Head from 'next/head'
import styled from 'styled-components'
import { Base } from '../../../interfaces'
import Header from '../Header'
import Footer from '../Footer'

const Layout = styled.main`
    position: relative;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.color2};
`

interface LayoutProps extends Base {
    title?: string,
    className?: string,
    children: JSX.Element,
    withoutHeader?: boolean,
    withoutFooter?: boolean,
    withoutCenterLine?: boolean,
    backgroundName?: string,
    contrast?: boolean,
}

const Index = ({
    className,
    children,
    withoutHeader = false,
    withoutFooter = false,
    backgroundName = 'white',
    contrast = false,
    menu,
    footer,
    languages,
    meta
}: LayoutProps) => {
    return (
        <>
            <Head>
                <title>Название{meta?.title ? ` – ${meta.title}` : ''}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={meta?.description} />
                <meta name="keywords" content={meta?.keywords} />
            </Head>
            {!withoutHeader &&
                <Header
                    menu={menu}
                    languages={languages}
                    contrast={contrast}
                />
            }
            <Layout className={className}>
                {children}
            </Layout>
            {!withoutFooter &&
                <Footer footer={footer} backgroundName={backgroundName}/>
            }
        </>
    )
}

export default Index
