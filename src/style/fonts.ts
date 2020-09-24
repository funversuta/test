import variables from './variables'

interface fontListObjects {
    name: string,
    thickness: string,
    weight: number,
    formats?: string[]
}

const fontList: fontListObjects[] = [
    {
        name: variables.fonts.mont,
        thickness: 'Light',
        weight: 300
    },
    {
        name: variables.fonts.mont,
        thickness: 'Regular',
        weight: 400
    },
    {
        name: variables.fonts.mont,
        thickness: 'SemiBold',
        weight: 600
    },
    {
        name: variables.fonts.mont,
        thickness: 'Heavy',
        weight: 800
    },
    {
        name: variables.fonts.mont,
        thickness: 'Black',
        weight: 900
    }
]

const fontsFormats: {
    [index: string]: string
} = {
    eot: 'eot',
    ttf: 'truetype',
    woff: 'woff',
    woff2: 'woff2',
    otf: 'truetype',
}

const fonts: () => string = () => {
    return fontList.reduce((str, { name, thickness, weight, formats = ['eot', 'ttf', 'woff', 'woff2'] }) =>
    (str += `
        @font-face {
            font-family: '${name}';
            src: ${formats.reduce((str, format) =>
                (str += `url(/fonts/${ name }${ thickness ? `-${ thickness }` : '' }.${ format }) format('${ fontsFormats[format] }'),`)
            , '').slice(0, -1)};
            font-weight: ${weight};
            font-style: normal;
            font-display: fallback;
        }`)
    , '')
}

export default fonts
