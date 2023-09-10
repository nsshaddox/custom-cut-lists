const Handsontable = require('handsontable').default;

class Table {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.cabinetOverview = [];
    this.components = [];
    this.hardware = [];
    this.combinedData = [];
    this.hot = null;
  }

  loadData(cabinetOverview, components, hardware) {
    this.cabinetOverview = cabinetOverview;
    this.components = components;
    this.hardware = hardware;
    this.combinedData = this.cabinetOverview.concat(this.components).concat(this.hardware);
  }

  render() {
    console.log(this.combinedData);
    this.hot = new Handsontable(this.container, {
      data: this.combinedData,
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

      // // Bold the first row
      // cells: function(row, col) {
      //   var cellProperties = {};
      //   if (row === 0) {
      //     cellProperties.renderer = boldRenderer;
      //   }
      // },
      colWidths: [60, 150, 60, 60, 45, 150, 325],
      licenseKey: 'non-commercial-and-evaluation',
    });
  }
}

module.exports = Table;
