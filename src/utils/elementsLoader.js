
const yaml = require('js-yaml');
const fs = require('fs');
// Add this at the top of elementsLoader.js
const path = require('path');
const elementsPath = path.join(__dirname, '../../test/elements/elements.yml');

const elements = yaml.load(fs.readFileSync(elementsPath, 'utf8'));
// Carrega o arquivo YAML
function getPageElements(pageName) {
    return elements[pageName] || {};
  }

  module.exports = { getPageElements };