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
      rowHeaders: true,
      colHeaders: true,
      columns: [{},{},{},{},{},{},{}], // 7 columns
      colWidths: [120, 150, 50, 50, 50, 120, 250],
      licenseKey: 'non-commercial-and-evaluation',
    });
  }
}

module.exports = Table;
