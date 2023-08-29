const startBtn = document.getElementById("start-btn");
const popUp = document.getElementById("pop-up");
const exitBtn = document.querySelector(".exit-btn");
const main = document.getElementById("main");
const continueBtn = document.querySelector(".continue-btn");
const quizPart = document.getElementById("quiz-part");
const quizQuestions = document.getElementById("quiz-questions");

const optionSections = document.getElementById("option-sections");



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
    showQuestions(0);

};

let questionCount = 0;
const nextBtn = document.querySelector(".next-btn");
nextBtn.onclick = () => {
    questionCount++;
    showQuestions(questionCount);
};


function showQuestions(index) {
    const questionContent = document.querySelector(".question-content");
    questionContent.textContent = `${questions[index].id}. ${questions[index].question}`;

    let optionTag = "";
    for (let i = 0; i < questions[index].options.length; i++) {
        optionTag += `<div id="option">${questions[index].options[i]}</div>`;
    }

    optionSections.innerHTML = optionTag;

    const option = document.querySelectorAll("#option");
    for (let k = 0; k < option.length; k++) {
        option[k].setAttribute("onclick", "selectedOption(this)");
    }
}


function selectedOption(ans) {
    let userAnswer = ans.textContent;
    let correctAnswer = questions[questionCount].ans;
    let allOptions = optionSections.children.length;
    if (userAnswer === correctAnswer) {
        ans.classList.add("correct");

    } else {
        ans.classList.add("wrong");
    }

    for (let i = 0; i < allOptions; i++) {
        if (optionSections.children[i].textContent === correctAnswer) {
            optionSections.children[i].setAttribute("class", "option correct");
        }
    }

}


