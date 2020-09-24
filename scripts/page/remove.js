const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
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

const pageName = process.argv[2];
const pageFileName = pageName.kebabToCamel().capitalize();

// Проверка на пустое имя
if (!pageName) {
    console.log(colors.red('Введите название страницы'));
    return;
}

// Проверка на пустой pages.json
try {
    JSON.parse(fs.readFileSync(pageJsonPath).toString());
} catch {
    console.log(colors.red(`Файл ${colors.bold('pages.json')} полностью пуст`));
    return;
}

const pagesList = JSON.parse(fs.readFileSync(pageJsonPath).toString());

// Проверка на не существующий компонент
if (!pagesList.find(page => page === pageName)) {
    console.log(colors.red(`Страница ${colors.bold(pageName)} не существует`));
    return;
}

rimraf.sync(`${ pageFolderPath }/${ pageFileName }.tsx`);

const findPage = pagesList.filter(page => page !== pageName);
fs.writeFileSync(pageJsonPath, JSON.stringify(findPage, null, 2));

console.log(colors.blue(`Страница ${colors.bold(pageName)} удалена`));