const fs = require('fs');
const path = require('path');
const Template = require(path.join(__dirname, './src/renderer/components/Template'));

const templatesFolder = path.join(__dirname, './src/templates/standard');

const parent = document.createElement('div');
parent.id = 'templates'
document.body.append(parent);

const templateElements = [];
const templates = [];

// Read the files in the templates folder
fs.readdir(templatesFolder, (err, files) => {
  if (err) {
    console.error('Error reading templates folder:', err);
    return;
  }

  let i = 0;
  files.forEach((file) => {
    templateElements.push(document.createElement('div'));
    templateElements[i].id = file;
    parent.append(templateElements[i]);
    // templateElements[i].append(document.createElement('div'));
    i++;
  });

  console.log(templateElements);

  // Loop through each file
  let j = 0;
  files.forEach((file) => {
    const templateElement = templateElements[j];


    // Read the contents of the file as a JSON object
    fs.readFile(path.join(templatesFolder, file), 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading template file:', err);
        return;
      }

      // Parse the JSON object
      const templateObject = JSON.parse(data);
      // console.log(templateObject);

      // Create an HTML element for the template to live in
      // templateElement = document.createElement('div');
      // templateElements[i].append(document.createElement('div'));

      // // Create a new template object
      const template = new Template(templateObject, templateElement);

      // Add the template object to the array
      templates.push(template);

      // Check if all templates have been created
      if (templates.length === files.length) {
        // You can now use the templates array to do further processing
        console.log('Templates:', templates);
      }
    });
    j++;
  });
});

window.onerror = function (message, source, lineno, colno, error) {
  console.error('Detailed error:', message, source, lineno, colno, error);
};
