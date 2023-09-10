const fs = require('fs');
const path = require('path');
const Table = require(path.join(__dirname, './Table'));
const ToggleButton = require(path.join(__dirname, './ToggleButton'));

class Template {
  constructor(jsonFilePath) {
    this.dataMap = new Map();
    this.tableData = {};
    this.jsonFilePath = jsonFilePath; //needs to be unique
    fs.readFile(this.jsonFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err);
        return;
      }

      // jsonData contains the json obect now
      this.jsonData = JSON.parse(data);

      // create a list (of lists) to load into the table.
      this.formatedData = this.formatData(this.jsonData);
      
      // create button
      const toggleButton = new ToggleButton('toggleButton', this.jsonData.Cabinet.Name, document.body);

      // create table
      const table = new Table(this.jsonData.Cabinet.Name)
      table.loadData(this.formatedData, [], []);
      table.render();
      

      //table.loadTable()
    });
    
  }

  // Take the data from the json file and format into something that HandsOnTable can use.
  formatData(data) {
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