class ToggleButton {
  constructor(buttonId, targetElementId, parentElement) {
    this.button = document.createElement('button');
    this.button.id = buttonId;
    this.button.textContent = "Name: 4 Drawer || Style: Euro  || Size: 16,24,34 || Inner Mat: Grey Lam || Outer Mat: Oak";

    this.targetElement = document.createElement('div')
    this.targetElement.id = targetElementId;

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
