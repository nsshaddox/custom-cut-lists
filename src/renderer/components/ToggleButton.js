class ToggleButton {
  constructor(buttonId, data, parentElement) {
    this.button = document.createElement('button');
    this.button.id = buttonId;
    this.button.innerHTML = `
    <b>
    <span class="name">${data.Cabinet.Name}</span> ||
    <span class="style">${data.Cabinet.Style}</span> || 
    <span class="width">W: ${data.Cabinet.Width}</span> || 
    <span class="depth">D: ${data.Cabinet.Depth}</span> || 
    <span class="height">H: ${data.Cabinet.Height}</span> || 
    <span class="inner-mat">Inner Mat: ${data.Cabinet.InnerMaterial}</span> || 
    <span class="outer-mat">Outer Mat: ${data.Cabinet.OuterMaterial}</span>
    </b>`;

    this.targetElement = document.createElement('div')
    this.targetElement.id = data.Cabinet.Name;
    this.targetElement.style.display = "none";

    parentElement.appendChild(this.button);
    parentElement.appendChild(this.targetElement);

    this.initEventListener();
  }

  initEventListener() {
    this.button.addEventListener('click', () => {
      if (this.targetElement.style.display === "none") {
        this.targetElement.style.display = "block";
      } else {
        this.targetElement.style.display = "none";
      }
    });
  }
}

module.exports = ToggleButton;
