/* eslint-disable */
const path = require('path');

module.exports = function langLoader(content) {
    const { callback, resourcePath, rootContext } = this;

    const packagePrefix = rootContext
        .slice(rootContext.length + 1)
        .split(path.sep)
        .join('.');

    const resourcePrefix = path.dirname(resourcePath)
        .slice(rootContext.length + 1)
        .split(path.sep)
        .concat(path.basename(resourcePath, '.lang.json'))
        .join('.');

    const translations = {};
    const parsedContent = JSON.parse(content);

    for (const key in parsedContent) {
        const id = [packagePrefix, resourcePrefix, key].filter(Boolean).join('.');
        translations[key] = {
            id,
            defaultMessage: parsedContent[key],
        }
    }

    let code = ``;

    for (let key in translations) {
        code += `
            export const ${key} = ${JSON.stringify(translations[key])};
        `
    }

    return code;
}