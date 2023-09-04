const show_btn = document.querySelector(".sidebar-toggle")
const sidebar = document.querySelector(".sidebar");
const close_btn = document.querySelector(".close-btn")

show_btn.addEventListener("click", () => {
    sidebar.classList.add("show-sidebar")
})

close_btn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
})