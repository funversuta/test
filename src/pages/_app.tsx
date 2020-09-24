import { AppProps } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import {
	SwitchTransition,
	Transition
} from 'react-transition-group';
import variables from '../style/variables';
import colors from '../style/colors';
import breakpoints from '../style/breakpoints';
import fonts from '../style/fonts';
import typography from '../style/typography';

const theme: object = {
    variables,
    colors,
    breakpoints,
    typography
}

const GlobalStyle = createGlobalStyle`
    ${fonts()}
    
    * {
        box-sizing: border-box;
    }
    
    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }

    html {
        font-family: ${variables.fonts.mont};
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    body {
        padding: 0;
        margin: 0;
    }

    h1, h2, h3, h4, h5, span, a {
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        text-transform: inherit;
        text-decoration: inherit;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`

const MyApp = ({ Component, pageProps, router }: AppProps) => {
    const { asPath } = router;

    return (
        <ThemeProvider theme={theme}>
            <SwitchTransition>
                <Transition
                    key={asPath}
                    timeout={600}
                >
                    <Component {...pageProps} />
                </Transition>
            </SwitchTransition>
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default MyApp
