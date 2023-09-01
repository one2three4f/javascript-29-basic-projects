const increaseBtn = document.querySelector(".btn.increase");

const decreaseBtn = document.querySelector(".btn.decrease");

const resetBtn = document.querySelector(".btn.reset");
const numCounter = document.querySelector("#value");
const buttons = document.querySelector(".buttons");

// cleaner code (review: ?) but click detection less precise
buttons.addEventListener("click", (event) => {
    // console.log(event.target);
    const classList = event.target.classList;
    let count = parseInt(numCounter.textContent);

    const clr_white = "#fff";
    const clr_green = "green";
    const clr_red = "red";

    if (classList.contains("reset")) {
        numCounter.textContent = 0;
        numCounter.style.color = "#fff";
    } else if (classList.contains("increase")) {
        numCounter.textContent = count + 1;
    } else if (classList.contains("decrease")) {
        numCounter.textContent = count - 1;
    }
    count = parseInt(numCounter.textContent);
    if (count > 0) {
        console.log(numCounter);
        numCounter.style.color = clr_green;
    } else if (count < 0) {
        numCounter.style.color = clr_red;
    } else {
        numCounter.style.color = clr_white;
    }

})