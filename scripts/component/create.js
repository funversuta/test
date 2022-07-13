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
const componentFolderPath = './src/components';
const componentJsonPath = './scripts/components.json';
const componentTsPath = './src/components/index.ts';
const componentTplPath = './scripts/component/template.tsxtpl';
const componentStyledTplPath = './scripts/component/styled.tsxtpl';

const componentName = process.argv[2];
const componentType = process.argv[3];
const componentConstName = componentName.kebabToCamel().capitalize();
const availableComponentTypes = fs.readdirSync(path.join('src', 'components'));

try {
    if (!componentName) {
        throw new Error('Введите название компонента')
    }
    if (!componentType || !availableComponentTypes.includes(componentType)) {
        throw new Error(`Введите один из существующих типов компонентов: [${availableComponentTypes.join(', ')}]`);
    }

    const components = fs.readdirSync(path.join('src', 'components', componentType));
    if (components.findIndex((component) => component === componentConstName) !== -1) {
        throw new Error('Компонент уже существует');
    }

    // Создание папки
    fs.mkdirSync(path.join(componentFolderPath, componentType, componentConstName));

    // Создание файлов
    const componentTemplate = fs.readFileSync(componentTplPath).toString();
    const componentStyledTemplate = fs.readFileSync(componentStyledTplPath).toString();

    fs.writeFileSync(path.join(componentFolderPath, componentType, componentConstName, `${componentConstName}.styled.tsx`), eval('`' + componentStyledTemplate + '`'));
    fs.writeFileSync(path.join(componentFolderPath, componentType, componentConstName, `${componentConstName}.tsx`), eval('`' + componentTemplate + '`'));

    console.log(`[ ${colors.green.bold('SUCCESS')} ] Компонент ${componentType}/${componentConstName} создан`);
} catch (e) {
    console.log(`[ ${colors.red.bold('ERROR')} ] ${e.message}`);
}