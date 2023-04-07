const variables = {
    col: 100 / 24,
    offset: {
        mobile: 20,
        tablet: 36,
        desktop1280: 100,
        desktop1440: 100,
        desktop1920: 160
    },
    videoRatio: (9 / 16) * 100,
    fonts: {
        GraphikLCGMedium: 'GraphikLCG-Medium',
        Roboto: 'Roboto-Regular',
        default: 'Arial'
    }
};

export type FontFamily = keyof typeof variables.fonts;

export type Offset = keyof typeof variables.offset;

export default variables;
