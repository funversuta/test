import languages from '../data/languages.json'
import indexMeta from '../data/indexMeta.json'
import menu from '../data/menu.json'
import footer from '../data/footer.json'
import homePage from '../data/index.json'


export const getLanguages: () => { code: string, text: string}[] = () => languages.languages

export const getIndexMeta: (lang?: string) => object = () => indexMeta

export const getMenu: (lang?: string) => object = (lang) => (<any>menu)[lang || 'ru'].menu

export const getFooter: (lang?: string) => object = () => footer

export const getHomePage: (lang?: string) => object = () => homePage
