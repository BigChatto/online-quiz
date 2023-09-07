// Getting DOM elements
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

const quitBtn = document.querySelector(".quit-btn");

const welcome = document.querySelector(".welcome");

const backHomeBtn = document.querySelector(".back-home-btn");
// Event listeners for buttons
startBtn.onclick = () => {
    // Show pop-up and main content when "Start Quiz" is clicked
    main.classList.add("active");
    if (username.value) {
        const username = document.getElementById("username").value;
        popUp.classList.add("active");
        welcome.textContent = `Welcome, ${username}`;
    } else {
        alert("Please enter your username");
        main.classList.remove("active");
    }



};

exitBtn.onclick = () => {
    // Close pop-up and main content when "Exit" is clicked
    popUp.classList.remove("active");
    main.classList.remove("active");

};

continueBtn.onclick = () => {
    // Show quiz questions when "Continue Quiz" is clicked
    quizPart.classList.add("active");
    popUp.classList.remove("active");
    main.classList.remove("active");
    quizQuestions.classList.add("active");
    showQuestions(0);
    questionCounter(1);

};

quitBtn.onclick = () => {
    if (confirm("Are you sure you want to exit?")) {
        quizPart.classList.remove("active");
        nextBtn.classList.remove("active");
        resultSection.classList.remove("active");
        questionCount = 0;
        questionNumber = 1;
        userScore = 0;
        showQuestions(questionCount);
        questionCounter(questionNumber);
        headerScore();
    }
};


retryBtn.onclick = () => {
    // Restart the quiz when "Retry" is clicked
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
    // Return to the home screen when "Back to Home" is clicked
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

// Initialize variables for quiz tracking
let questionCount = 0;
let questionNumber = 1;
let userScore = 0;

// Event listener for the "Next" button
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


// Function to display quiz questions
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


// Function to handle user-selected option
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

// Function to update the question counter
function questionCounter(index) {
    const totalQuestion = document.getElementById("total-questions");
    totalQuestion.textContent = `${index} of ${questions.length} questions`;
}

// Function to update the header score
function headerScore() {
    const headerScoretext = document.querySelector(".header-score");
    headerScoretext.textContent = `score: ${userScore} / ${questions.length}`;
};

// Function to display the quiz result
function showResult() {
    quizQuestions.classList.remove("active");
    resultSection.classList.add("active");

    const scoreText = document.querySelector(".score");
    scoreText.textContent = `You scored ${userScore} out of ${questions.length}`;
}
;


