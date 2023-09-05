const questionsList = document.querySelectorAll(".question");

questionsList.forEach((question) => {
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", () => {
        questionsList.forEach((item) => {
            // remove selection for all but clicked
            if (item !== question) {
                item.classList.remove("question-open");
            }
        })
        // toggles the status of clicked one
        question.classList.toggle("question-open");
    })
})