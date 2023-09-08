const path = require('path');
const Entry = require(path.join(__dirname, './src/renderer/components/Entry'));

const entry = new Entry;

window.onerror = function (message, source, lineno, colno, error) {
  console.error("Detailed error:", message, source, lineno, colno, error);
};
