import { DefaultTheme } from 'styled-components';

export const baseTheme: DefaultTheme = {
    main: {
        background: 'white',
        text: 'dark'
    },
    secondary: {
        text: 'dark'
    }
};

export const DarkTheme: DefaultTheme = {
    main: {
        background: 'dark',
        text: 'white'
    },
    secondary: {
        text: 'white'
    }
};
