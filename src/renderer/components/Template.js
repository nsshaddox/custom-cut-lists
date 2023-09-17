const path = require('path');
const Table = require(path.join(__dirname, './Table'));
const ToggleButton = require(path.join(__dirname, './ToggleButton'));

class Template {
  constructor(jsonData, parent) {
    this.jsonData = jsonData;

    // Convert jsonData into a format the table needs
    this.formatedData = this.formatDataForTable(this.jsonData);
      
    // create button
    const toggleButton = new ToggleButton('toggleButton', this.jsonData, parent);

    // create table
    const table = new Table(this.jsonData.Cabinet.Name)
    table.loadData(this.formatedData);
    table.render(this.jsonData);
      
  }

  // Take the data from the json file and format into something that HandsOnTable can use.
  formatDataForTable(data) {
    // default header
    const cabinetParts = [];
      
    for (const key in data.Cabinet) {
      if (data.Cabinet[key].PartName) {
        const part = data.Cabinet[key];
        if (part.Quantity > 0) {
          const partArray = [
            part.Quantity,
            part.PartName,
            part.Width.toFixed(2),
            part.Length.toFixed(2),
            part.Thickness.toFixed(2),
            part.Material,
            part.Notes
          ];
          cabinetParts.push(partArray);
        }//end if
      }//end if
    }//end for

    return cabinetParts;
  }//end function

}

module.exports = Template;