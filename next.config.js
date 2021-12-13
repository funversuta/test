const { i18n } = require('./next-i18next.config');
const colors = require('colors');

const mainImageDomain = process.env.API_URL?.replace(/(http:\/\/)|(https:\/\/)|(\/api)/g, '')

if (!mainImageDomain) {
    console.warn(`${colors.yellow('WARN')} - next.config.js содержит пустой список доменов для next/image`)
}

module.exports = {
    mode: 'production',

    // Конфиг для мультиязычности
    i18n,

    react: {
        useSuspense: true,
    },

    // Конфиг для next/image
    images: {
        domains: [mainImageDomain || '']
    },

    // Для пакета @svgr/webpack
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: { and: [/\.(js|ts|md)x?$/] },
            use: ['@svgr/webpack'],
        });
        return config;
    },

    // Переменные env, которые необходимо передавать на клиент
    env: {
        API_URL: process.env.API_URL
    },

    // Компилятор для минификации
    swcMinify: true,

    // Эксперементальные настройки
    experimental: {
        // Поддержка swc styledComponent
        styledComponents: true
    }
};
