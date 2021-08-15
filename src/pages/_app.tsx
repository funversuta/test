import { AppProps } from 'next/app'
import { SwitchTransition, Transition } from 'react-transition-group';
import GlobalStyle from "../style/globalStyles";
import '../style/fonts.css';
import ScrollBarProvider from "../context/ScrollBarContext";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
    const { asPath } = router;

    return (
        <ScrollBarProvider>
            <GlobalStyle />
            <SwitchTransition>
                <Transition
                    key={asPath}
                    timeout={600}
                >
                    <Component {...pageProps} />
                </Transition>
            </SwitchTransition>
        </ScrollBarProvider>
    )
}

export default MyApp
