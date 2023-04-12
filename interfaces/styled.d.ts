import { BasicBackgrounds, Colors } from '@/style/colors';
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        main: {
            background: BasicBackgrounds;
            text: TextColors;
        };
        secondary: {
            text: TextColors;
        };
    }
}
