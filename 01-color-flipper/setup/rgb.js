const button = document.querySelector(".btn-hero");
const colorText = document.querySelector(".color")

const currColor = randomRGBColor();

window.addEventListener("load", () => {
    setColor(currColor);
})

button.addEventListener("click", () => {
    setColor(randomRGBColor());
})

function setColor(color) {
    colorText.textContent = color;
    document.body.style.backgroundColor = color;
}

function randomRGBColor() {
    return `rgb(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()})`;
}

function randomRGBValue() {
    return Math.floor(Math.random() * 256);
}