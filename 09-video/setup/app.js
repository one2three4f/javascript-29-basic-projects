// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


const preloader = document.querySelector(".preloader");
document.addEventListener("DOMContentLoaded", () => {
    preloader.classList.add("hide-preloader");
});

const switchBtn = document.querySelector(".switch-button");
const videoCont = document.querySelector(".background-video");
switchBtn.addEventListener("click", () => {
    if (switchBtn.classList.contains("pause")) {
        switchBtn.classList.remove("pause");
        videoCont.play();
    } else {
        switchBtn.classList.add("pause");
        videoCont.pause();
    }
})
