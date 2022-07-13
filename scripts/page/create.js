const fs = require('fs');
const path = require('path');
const colors = require('colors');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
};

String.prototype.kebabToCamel = function() {
    return this.replace(/-([a-z0-9])/g, function (g) { return g[1].toUpperCase(); })
};

// Пути до файлов/папок
const pageFolderPath = './src/pages';
const pageJsonPath = './scripts/pages.json';
const pageTplPath = './scripts/page/template.tsxtpl';

const pageName = process.argv[2];
const pageTitle = process.argv[3];
const pageFileName = pageName.kebabToCamel();
const pageConstName = pageName.kebabToCamel().capitalize();

try {
    if (!pageName) throw new Error('Введите название страницы')

    if (!pageTitle) throw new Error('Укажите заголовок страницы')

    if (fs.readdirSync(path.join(pageFolderPath)).find(page => page === pageName)) {
        throw new Error(`Страница /${pageName} уже существует`)
    }

    // Создание файла
    const pageTemplate = fs.readFileSync(pageTplPath).toString();
    fs.writeFileSync(`${pageFolderPath}/${pageFileName}.tsx`, eval('`' + pageTemplate + '`'));

    console.log(`[ ${colors.green.bold('SUCCESS')} ] Страница /${pageName} создана`);
} catch (e) {
    console.log(`[ ${colors.red.bold('ERROR')} ] ${e.message}`);
}