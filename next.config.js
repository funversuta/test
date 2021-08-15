const { i18n } = require('./next-i18next.config');
require('dotenv').config()

module.exports = {
    mode: 'production',

    // Конфиг для мультиязычности
    i18n,

    // Конфиг для next/image
    images: {
        domains: [process.env.API_URL]
    },

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });

        return config;
    },

    // Переменные env, которые необходимо "видеть" на клиенте
    env: {
        API_URL: process.env.API_URL
    }
};