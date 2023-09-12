const Handsontable = require('handsontable').default;
// import Handsontable from 'handsontable';
// import 'handsontable/dist/handsontable.full.min.css';

class Table {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.components = [];
    this.hot = null;
  }

  loadData(data) {
    this.components = data;
  }

  render(jsonData) {
    //console.log(this.components);
    console.log(jsonData.Cabinet.OuterMaterial),
    this.hot = new Handsontable(this.container, {
      data: this.components,
      rowHeaders: false,
      colHeaders: ["Quantity", "Description", "Width", "Length", "Thick", "Material", "Notes"],
      columns: [
        {className: 'htRight'},
        {className: 'htLeft'},
        {className: 'htRight'},
        {className: 'htRight'},
        {className: 'htRight'},
        {className: 'htLeft'},
        {className: 'htLeft'}
      ], // 7 columns
      colWidths: [60, 150, 60, 60, 45, 150, 325],
      licenseKey: 'non-commercial-and-evaluation',
    });
  }
}

module.exports = Table;
