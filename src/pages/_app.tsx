import { AppProps } from 'next/app';
import { SwitchTransition, Transition } from 'react-transition-group';
import GlobalStyle from '@/style/globalStyles';
import '@/style/fonts.css';
import ScrollBarProvider from '@/context/ScrollBarContext';
import { RecoilRoot } from 'recoil';
import 'swiper/css';
import { SWRConfig } from 'swr';
import fetcher from '@/lib/fetcher';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
    const { asPath } = router;

    return (
        <RecoilRoot>
            <SWRConfig value={{ fetcher }}>
                <ScrollBarProvider>
                    <GlobalStyle />
                    <SwitchTransition>
                        <Transition key={asPath} timeout={600}>
                            <Component {...pageProps} />
                        </Transition>
                    </SwitchTransition>
                </ScrollBarProvider>
            </SWRConfig>
        </RecoilRoot>
    );
};

export default MyApp;
