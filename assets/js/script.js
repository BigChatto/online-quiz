const startBtn = document.getElementById("start-btn");
const popUp = document.getElementById("pop-up");
const exitBtn = document.querySelector(".exit-btn");
const main = document.getElementById("main");
const continueBtn = document.querySelector(".continue-btn");
const quizPart = document.getElementById("quiz-part");
const quizQuestions = document.getElementById("quiz-questions");

startBtn.onclick = () => {
    popUp.classList.add("active");
    main.classList.add("active");

};

exitBtn.onclick = () => {
    popUp.classList.remove("active");
    main.classList.remove("active");

};

continueBtn.onclick = () => {
    quizPart.classList.add("active");
    popUp.classList.remove("active");
    main.classList.remove("active");
    quizQuestions.classList.add("active");

};
