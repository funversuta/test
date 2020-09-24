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

// Проверка на пустое имя
if (!pageName) {
    console.log(colors.red('Введите название страницы'));
    return;
}

// Проверка на пустой заголовок
if (!pageTitle) {
    console.log(colors.red('Укажите заголовок страницы'));
    return;
}

// Проверка на пустой pages.json
try {
    JSON.parse(fs.readFileSync(pageJsonPath).toString());
} catch {
    console.log(colors.red(`Файл ${colors.bold('pages.json')} полностью пуст, добавьте хотя бы один компонент (вручную)`));
    return;
}

const pagesList = JSON.parse(fs.readFileSync(pageJsonPath).toString());

// Проверка на существующую страницу
if (pagesList.find(page => page === pageName)) {
    console.log(colors.red(`Страница ${colors.bold(pageName)} уже существует`));
    return;
}

// Добавление объекта в JSON
pagesList.push(pageName);
fs.writeFileSync(pageJsonPath, JSON.stringify(pagesList, null, 2));

// Создание файла
const pageTemplate = fs.readFileSync(pageTplPath).toString();
fs.writeFileSync(`${ pageFolderPath }/${ pageFileName }.tsx`, eval('`' + pageTemplate + '`'));

console.log(colors.blue(`Страница ${colors.bold(pageName)} создана`));