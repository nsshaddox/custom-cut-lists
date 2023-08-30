const Handsontable = require('handsontable').default;

class Table {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.header = [];
    this.data = [];
    this.combinedData = [];
    this.hot = null;
  }

  loadData(header, data) {
    this.header = header;
    this.data = data;
    this.combinedData = this.header.concat(this.data);
  }

  render() {
    this.hot = new Handsontable(this.container, {
      data: this.combinedData,
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
  }

}

module.exports = Table;
