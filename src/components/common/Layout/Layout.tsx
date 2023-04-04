import React from 'react';
import Head from 'next/head';
import { Container } from './Layout.styled';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BasePageProps } from '@/interfaces';
import Sandwich from '@/components/common/Sandwich/Sandwich';
import { DefaultTheme } from 'styled-components';
import { MyThemeContextProvider } from '../ThemContext/ThemContext';

interface LayoutProps extends BasePageProps {
    theme?: DefaultTheme;
}

const Layout: React.FC<LayoutProps> = ({ children, meta, header, sandwich }) => {
    return (
        <MyThemeContextProvider>
            <Head>
                <title>{meta.title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <meta name="og:title" content={meta.title} />
                <meta name="og:description" content={meta.description} />
            </Head>

            <Header {...header} />

            <Sandwich {...sandwich} />

            <Container>
                {children}
                <Footer />
            </Container>
        </MyThemeContextProvider>
    );
};

export default Layout;
