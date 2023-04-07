const { i18n } = require('./next-i18next.config');
const colors = require('colors');

if (!process.env.IMAGE_DOMAIN) {
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
        domains: [process.env.IMAGE_DOMAIN || '']
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
        API_URL: process.env.API_URL,
        API_URL_YANDEX_WEATHER: process.env.API_URL_YANDEX_WEATHER,
        API_KEY2: process.env.API_KEY2
    },

    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:8000/:path*' // Proxy to Backend
          }
        ]
      },

    // Компилятор для минификации
    swcMinify: true,

    compiler: {
        styledComponents: true
    }
};
