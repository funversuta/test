const variables = {
    col: 100 / 24,
    offset: {
        mobile: 30,
        tablet: 40
    },
    videoRatio: 9 / 16 * 100,
    fonts: {
        default: 'Arial'
    }
}

export type Offset = keyof typeof variables.offset

export default variables
