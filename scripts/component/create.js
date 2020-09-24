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
const componentFolderPath = './src/layout';
const componentJsonPath = './scripts/components.json';
const componentTplPath = './scripts/component/template.tsxtpl';

const componentName = process.argv[2];
const componentConstName = componentName.kebabToCamel().capitalize();

// Проверка на пустое имя
if (!componentName) {
    console.log(colors.red('Введите название компонента'));
    return;
}

// Проверка на пустой components.json
try {
    JSON.parse(fs.readFileSync(componentJsonPath).toString());
} catch {
    console.log(colors.red(`Файл ${colors.bold('components.json')} полностью пуст, добавьте хотя бы один компонент (вручную)`));
    return;
}

const componentsList = JSON.parse(fs.readFileSync(componentJsonPath).toString());

// Проверка на существующий компонент
if (componentsList.find(component => component === componentName)) {
    console.log(colors.red(`Компонент ${colors.bold(componentName)} уже существует`));
    return;
}

// Добавление объекта в JSON
componentsList.push(componentName);
fs.writeFileSync(componentJsonPath, JSON.stringify(componentsList, null, 2));

// Создание папки
fs.mkdirSync(`${componentFolderPath}/${componentConstName}`);

// Создание файла
const componentTemplate = fs.readFileSync(componentTplPath).toString();
fs.writeFileSync(`${componentFolderPath}/${componentConstName}/index.tsx`, eval('`' + componentTemplate + '`'));

console.log(colors.blue(`Компонент ${colors.bold(componentName)} создан`));