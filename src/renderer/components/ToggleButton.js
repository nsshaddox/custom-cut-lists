class ToggleButton {
    constructor(buttonId, targetElementId) {
        this.button = document.getElementById(buttonId);
        this.targetElement = document.getElementById(targetElementId);
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
