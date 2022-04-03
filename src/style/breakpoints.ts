const breakpoints = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1440px',
    fhd: '1920px',
    qhd: '2560px',
    uhd: '3840px'
};

export type Breakpoints = keyof typeof breakpoints;

export default breakpoints;
