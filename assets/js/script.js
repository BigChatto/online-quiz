const startBtn = document.getElementById("start-btn");
const popUp = document.getElementById("pop-up");
const exitBtn = document.querySelector(".exit-btn");
const main = document.getElementById("main");
const continueBtn = document.querySelector(".continue-btn");
const quizPart = document.getElementById("quiz-part");
const quizQuestions = document.getElementById("quiz-questions");

const optionSections = document.getElementById("option-sections");

const resultSection = document.getElementById("result-section");

const retryBtn = document.querySelector(".retry-btn");

const backHomeBtn = document.querySelector(".back-home-btn");

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
    questionCounter(1);

};

retryBtn.onclick = () => {
    quizQuestions.classList.add("active");
    nextBtn.classList.remove("active");
    resultSection.classList.remove("active");
    questionCount = 0;
    questionNumber = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumber);
    headerScore();
};

backHomeBtn.onclick = () => {
    quizPart.classList.remove("active");
    nextBtn.classList.remove("active");
    resultSection.classList.remove("active");
    questionCount = 0;
    questionNumber = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumber);
    headerScore();
};

let questionCount = 0;
let questionNumber = 1;
let userScore = 0;


const nextBtn = document.querySelector(".next-btn");
nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);
        questionNumber++;
        questionCounter(questionNumber);
        nextBtn.classList.remove("active");
    } else {
        showResult();
    }

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
        userScore += 1;
        headerScore();

    } else {
        ans.classList.add("wrong");
        for (let i = 0; i < allOptions; i++) {
            if (optionSections.children[i].textContent === correctAnswer) {
                optionSections.children[i].setAttribute("class", "option correct");
            }
        }


    }
    for (let i = 0; i < allOptions; i++) {
        optionSections.children[i].style.pointerEvents = "none";

    }

    nextBtn.classList.add("active");

}

function questionCounter(index) {
    const totalQuestion = document.getElementById("total-questions");
    totalQuestion.textContent = `${index} of ${questions.length} questions`;
}

function headerScore() {
    const headerScoretext = document.querySelector(".header-score");
    headerScoretext.textContent = `score: ${userScore} / ${questions.length}`;
};

function showResult() {
    quizQuestions.classList.remove("active");
    resultSection.classList.add("active");

    const scoreText = document.querySelector(".score");
    scoreText.textContent = `You scored ${userScore} out of ${questions.length}`;
}
;


