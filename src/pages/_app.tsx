import { AppProps } from 'next/app'
import { SwitchTransition, Transition } from 'react-transition-group';
import GlobalStyle from "../style/globalStyles";
import '../style/fonts.css';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
    const { asPath } = router;

    return (
        <>
            <GlobalStyle />
            <SwitchTransition>
                <Transition
                    key={asPath}
                    timeout={600}
                >
                    <Component {...pageProps} />
                </Transition>
            </SwitchTransition>
        </>
    )
}

export default MyApp
