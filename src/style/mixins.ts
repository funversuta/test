import breakpoints from './breakpoints'

export const getAdaptiveFont = (mobileSize: number, tabletSize: number, desktopSize: number) => {
    return `
        font-size: ${ mobileSize }px;

        @media (min-width: ${ breakpoints.md }) {
            font-size: ${ tabletSize }px;
        }

        @media (min-width: ${ breakpoints.xxl }) {
            font-size: ${ desktopSize }px;
        }
    `
}