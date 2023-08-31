const colors = ["red", "blue", "blue", "yellow", "orange", "pink", "black", "white"];

const button = document.querySelector(".btn-hero");
const colorText = document.querySelector(".color");

// const currColor = getRandomColor();

window.addEventListener("load", () => {
    // setColor(currColor);
    setColor(getRandomColor());
})

button.addEventListener("click", () => {
    setColor(getRandomColor());
})

function setColor(color) {
    document.body.style.backgroundColor = color;
    colorText.textContent = color;

}

function getRandomColor() {
    return colors[getRandomNumber()];
}

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}