const path = require('path');
const { loadProject, loadTemplates } = require(path.join(__dirname, './src/renderer/components/load'));

const templatesFolder = path.join(__dirname, './src/templates/standard');
const templatesTab = document.getElementById('templates');

const projectFolder = path.join(__dirname, './src/templates/custom')
const projectTab = document.getElementById('project');

// Populate the Templates tab
loadTemplates(templatesFolder, templatesTab);
loadProject(projectFolder, projectTab);

window.onerror = function (message, source, lineno, colno, error) {
  console.error('Detailed error:', message, source, lineno, colno, error);
};
