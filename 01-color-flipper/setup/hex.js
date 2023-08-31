const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.querySelector(".btn-hero");
const colorText = document.querySelector(".color");

button.addEventListener("click", () => {
    const hexColor = getRandomHexColor();
    setHexColor(hexColor);
});

const currColor = getRandomHexColor();

window.addEventListener("load", () => setHexColor(currColor))

function setHexColor(hexColor) {
    document.body.style.backgroundColor = hexColor;
    colorText.textContent = hexColor;
}

function getRandomHexColor() {
    const hexColor = "#" + [...Array(6)].map(() => hex[Math.floor(Math.random() * 16)]).join('');
    console.log(hexColor);
    return hexColor;
}
