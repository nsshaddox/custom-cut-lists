const Handsontable = require('handsontable').default;

// const container = document.createElement('div');
// document.body.appendChild(container);
const container = document.getElementById('container');

const data = [
  ["Q", "Label", "Depth", "Width", "Height", "",            ""],
  ["2", "D-B2",  "24",  , "31.5",  "32.5",   "Description", ""]
];

const data2 = [
  ["Quan.", "Description",  "d",    "w",     "thick",  "material",   "notes"],
  [4,       "sides",        24.00,  28.5,    .75,      "Melamine",   ""],
  [4,       "webs",         7.68,   30.00,   .75,      "Melamine",   "split at 96"],
  [4,       "nailers",      7.68,   30.00,   .75,      "Melamine",   "split at 96"]
];

const combinedData = data.concat(data2);

const hot = new Handsontable(container, {
  data: combinedData,
  rowHeaders: false,
  colHeaders: false,
  licenseKey: 'non-commercial-and-evaluation',
  cells: function(row, col) {
    const cellProperties = {};
    if(row === 0 || row === data.length) {
      cellProperties.renderer = function(instance, td) {
        Handsontable.renderers.TextRenderer.apply(this, arguments);
        td.style.backgroundColor = "#ccfff2";
      };
    }
    return cellProperties;
  }
});

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
