const path = require('path');
const Table = require(path.join(__dirname, './Table'));
const ToggleButton = require(path.join(__dirname, './ToggleButton'));

class Entry {
  constructor() {
    const cabinetOverview = [
        ["Cabinet Overview"],
        ["Name", "Cabinet A"],
        ["Style", "Modern"],
        ["Dimensions(W,D,H)", 30, 20, 35],
        ["Purpose", "Kitchen Base Cabinet"],
        ["Material", "Oak, Plywood backing"],
        [],
      ];
      
      const componentsBreakdown = [
        ["Quantity", "Description", "Width (in)", "Depth (in)", "Height (in)", "Material", "Notes"],
        [1, "Top Panel", 30, 20, 0.75, "Oak", "Rounded edges"],
        [1, "Bottom Panel", 30, 20, 0.75, "Oak", ""],
        [2, "Side Panels", 20, 0.75, 35, "Oak", ""],
        [1, "Back Panel", 29.5, 19.5, 34.5, "Plywood", ""],
        [1, "Front Frame", 30, 0.75, 35, "Oak", "Includes pre-drilled holes for hinges"],
        [2, "Shelves", 29.5, 19.5, 0.75, "Oak", "Adjustable height"],
        [4, "Legs", "", "", 4, "Metal", "Adjustable for leveling"],
        [2, "Door Panels", 14.75, 0.75, 34.5, "Oak", "Inset style"],
        [],
      ];
      
      const hardwareDetails = [
        ["Quantity", "Description", "Size", , , "Material", "Notes"],
        [8, "Shelf Pegs", 0.25, , , "Metal", "For adjustable shelf height"],
        [4, "Hinges", "STD", , , "Metal", "Soft-close"],
        [2, "Handles", 5, , ,"Stainless Steel", "Modern pull style"],
        [16, "Screws", 1.5, , ,"Steel", "For assembly"],
        [],
      ];
    
    const parentElement = document.body;
    const toggleButton = new ToggleButton('toggleButton', 'partsTable', parentElement);
    
    const table = new Table('partsTable');
    table.loadData(cabinetOverview, componentsBreakdown, hardwareDetails);
    table.render();
  }
}

module.exports = Entry;