import { AppProps } from 'next/app';
import { SwitchTransition, Transition } from 'react-transition-group';
import GlobalStyle from '@/style/globalStyles';
import '@/style/fonts.css';
import ScrollBarProvider from '@/context/ScrollBarContext';
import { RecoilRoot } from 'recoil';
import 'swiper/css';
import { SWRConfig } from 'swr';
import fetcher from '@/lib/fetcher';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { baseTheme, DarkTheme } from '@/style/themes';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
    const { asPath } = router;

    const [theme, setTheme] = useState(baseTheme);

    const toggleTheme = () => {
        theme == baseTheme ? setTheme(DarkTheme) : setTheme(baseTheme);
    };

    return (
        <RecoilRoot>
            <SWRConfig value={{ fetcher }}>
                <ScrollBarProvider>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        <SwitchTransition>
                            <Transition key={asPath} timeout={600}>
                                <Component {...pageProps} toggleTheme={toggleTheme} />
                            </Transition>
                        </SwitchTransition>
                    </ThemeProvider>
                </ScrollBarProvider>
            </SWRConfig>
        </RecoilRoot>
    );
};

export default appWithTranslation(MyApp);
