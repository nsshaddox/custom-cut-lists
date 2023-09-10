class ToggleButton {
  constructor(buttonId, targetElementId, parentElement) {
    this.button = document.createElement('button');
    this.button.id = buttonId;
    this.button.innerHTML = `
    <b>
    <span class="name">4 Drawer Cabinet</span> ||
    <span class="style">Euro</span> || 
    <span class="width">W: 16</span> || 
    <span class="depth">D: 24</span> || 
    <span class="height">H: 34</span> || 
    <span class="inner-mat">Inner Mat: Grey Lam</span> || 
    <span class="outer-mat">Outer Mat: Oak</span>
    </b>`;

    // this.button.textContent = "Name: 4 Drawer || Style: Euro  || Size: 16,24,34 || Inner Mat: Grey Lam || Outer Mat: Oak";

    this.targetElement = document.createElement('div')
    this.targetElement.id = targetElementId;
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

  setButtonText(text) {
    this.button.textContext = text;
  }
}

module.exports = ToggleButton;
