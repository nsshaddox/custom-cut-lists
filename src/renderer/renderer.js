const path = require('path');
const Entry = require(path.join(__dirname, './src/renderer/components/Entry'));
const Template = require(path.join(__dirname, './src/renderer/components/Template'));

// Entry should pass in the json file.
const entry = new Entry('table1');
const entry2 = new Entry('table2');

const entry3 = new Template(path.join(__dirname, './src/templates/standard/example2.json'))

window.onerror = function (message, source, lineno, colno, error) {
  console.error("Detailed error:", message, source, lineno, colno, error);
};
