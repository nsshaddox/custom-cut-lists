// const Handsontable = require('handsontable').default;
const path = require('path');
const Table = require(path.join(__dirname, './src/renderer/components/Table'));
const ToggleButton = require(path.join(__dirname, './src/renderer/components/ToggleButton'));
// const container = document.getElementById('container');

const header = [
  ["Q", "Label", "Depth", "Width", "Height", "",            ""],
  ["2", "D-B2",  "24",  , "31.5",  "32.5",   "Description", ""]
];

const data = [
  ["Quan.", "Description",  "d",    "w",     "thick",  "material",   "notes"],
  [4,       "sides",        24.00,  28.5,    .75,      "Melamine",   ""],
  [4,       "webs",         7.68,   30.00,   .75,      "Melamine",   "split at 96"],
  [4,       "nailers",      7.68,   30.00,   .75,      "Melamine",   "split at 96"]
];

const table = new Table('container');
table.loadData(header, data);
table.render();

const table2 = new Table('container');
table2.loadData(header, data);
table2.render();

// const toggleButton = new ToggleButton('toggleButton', 'partsTable');

document.getElementById('toggleButton').addEventListener('click', function() {
  const tableDiv = document.getElementById('partsTable');
  
  if (tableDiv.style.display === "none") {
      tableDiv.style.display = "block";
  } else {
      tableDiv.style.display = "none";
  }
});

window.onerror = function (message, source, lineno, colno, error) {
  console.error("Detailed error:", message, source, lineno, colno, error);
};
