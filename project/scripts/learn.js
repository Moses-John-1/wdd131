const quizData = [
    {
        question: "What is a budget?",
        answers: [
            { text: "A spending plan", correct: true },
            { text: "A shopping list", correct: false },
            { text: "A bank account", correct: false }
        ]
    },
    {
        question: "What is interest?",
        answers: [
            { text: "A type of loan", correct: false },
            { text: "Money earned or paid for borrowing/saving", correct: true },
            { text: "A coin", correct: false }
        ]
    },
    {
        question: "Which is a good saving habit?",
        answers: [
            { text: "Spend first, save later", correct: false },
            { text: "Save what’s left", correct: false },
            { text: "Pay yourself first", correct: true }
        ]
    }
];

let currentQuestion = 0;
let score = 0;

const startBtn = document.getElementById("start-quiz");
const quizBox = document.getElementById("quiz-box");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");

// Add these programmatically
const progressText = document.createElement("p");
const submitBtn = document.createElement("button");
const restartBtn = document.createElement("button");
submitBtn.textContent = "Submit Quiz";
submitBtn.id = "submit-btn";
submitBtn.style.display = "none";

restartBtn.textContent = "Restart Quiz";
restartBtn.id = "restart-btn";
restartBtn.style.display = "none";

quizBox.appendChild(progressText);
quizBox.appendChild(submitBtn);
quizBox.appendChild(restartBtn);

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
submitBtn.addEventListener("click", showScore);
restartBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startBtn.style.display = "none";
    quizBox.style.display = "block";
    currentQuestion = 0;
    score = 0;
    submitBtn.style.display = "none";
    restartBtn.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    const current = quizData[currentQuestion];
    questionEl.textContent = current.question;
    progressText.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;

    current.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.textContent = answer.text;
        btn.classList.add("answer-btn");
        btn.addEventListener("click", () => selectAnswer(btn, answer.correct));
        answersEl.appendChild(btn);
    });

    nextBtn.style.display = "none";
}

function resetState() {
    questionEl.style.color = "";
    nextBtn.disabled = false;
    answersEl.innerHTML = "";
}

function selectAnswer(button, correct) {
    const allButtons = document.querySelectorAll(".answer-btn");
    allButtons.forEach(btn => {
        btn.disabled = true;
        const isCorrect = quizData[currentQuestion].answers.find(ans => ans.text === btn.textContent).correct;
        btn.classList.add(isCorrect ? "correct" : "wrong");
    });

    if (correct) score++;
    nextBtn.style.display = "inline-block";

    if (currentQuestion === quizData.length - 1) {
        submitBtn.style.display = "inline-block";
        nextBtn.style.display = "none";
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    }
}

function showScore() {
    resetState();
    questionEl.textContent = `🎉 You scored ${score} out of ${quizData.length}!`;
    progressText.textContent = "";
    submitBtn.style.display = "none";
    restartBtn.style.display = "inline-block";
}

document.addEventListener("DOMContentLoaded", () => {
    // Set current year
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Set last modified date
    const modifiedSpan = document.getElementById("last-modified");
    if (modifiedSpan) {
        modifiedSpan.textContent = new Date(document.lastModified).toLocaleString();
    }
});
