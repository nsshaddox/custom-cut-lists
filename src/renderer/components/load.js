const fs = require('fs');
const Template = require('./Template');


function loadTemplates(folder, tab) {
  const templateElements = [];
  const templates = [];
  // Read the files in the templates folder
  fs.readdir(folder, (err, files) => {
    if (err) {
      console.error('Error reading templates folder:', err);
      return;
    }

    let i = 0;
    files.forEach((file) => {
      templateElements.push(document.createElement('div'));
      templateElements[i].id = file;
      tab.append(templateElements[i]);
      i++;
    });

    console.log(templateElements);

    // Loop through each file
    i = 0;
    files.forEach((file) => {
      const templateElement = templateElements[i++];

      // Read the contents of the file as a JSON object
      fs.readFile(path.join(folder, file), 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading template file:', err);
          return;
        }

        // Parse the JSON object
        const templateObject = JSON.parse(data);

        // // Create a new template object
        const template = new Template(templateObject, templateElement);

        // Add the template object to the array
        templates.push(template);

        // Check if all templates have been created
        if (templates.length === files.length) {
          console.log('Templates:', templates);
        }
      });
    });
  });

  // Get the tab elements
  const tabElements = document.querySelectorAll("#tab-container .tabs li");
  const contentElements = document.querySelectorAll("#tab-container .tab-content > div");

  // Attach event listeners to the tabs
  tabElements.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Remove active classes from all tabs and content
      tabElements.forEach((tab) => tab.classList.remove("active"));
      contentElements.forEach((content) => content.classList.remove("active"));

      // Add active class to the selected tab and content
      tab.classList.add("active");
      contentElements[index].classList.add("active");
    });

    // Set the main tab as active on page load
    window.addEventListener("load", () => {
      // Add active class to the main tab and its content
      tabElements[0].classList.add("active");
      contentElements[0].classList.add("active");
    });
  });
}
  

function loadProject(folder, tab) {
  loadTemplates(folder, tab);
}

module.exports = {
  loadTemplates: loadTemplates,
  loadProject: loadProject
};