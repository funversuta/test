const colors = {
    white: '#FFFFFF',
    black: '#000000',
    dark: '#232323',
    blue: '#157BFB'
};

export type Colors = keyof typeof colors;

export type ColorsKeys = {
    [value in Colors]: value;
};

export type BasicBackgrounds = keyof Pick<ColorsKeys, 'white' | 'dark'>;
export type TextColors = keyof Pick<ColorsKeys, 'white' | 'dark'>;

export default colors;
