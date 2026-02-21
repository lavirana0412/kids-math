// ----------------------------
// Kids Math Game JS
// ----------------------------

let currentAnswer = 0;
let currentType = "";

// ---------- Start Functions ----------
function startAddition() {
    currentType = "add";
    showGame();
    generateQuestion(currentType);
}

function startSubtraction() {
    currentType = "sub";
    showGame();
    generateQuestion(currentType);
}

function startMultiplication() {
    currentType = "mul";
    showGame();
    generateQuestion(currentType);
}

function startDivision() {
    currentType = "div";
    showGame();
    generateQuestion(currentType);
}

function startFractions() {
    currentType = "frac";
    showGame();
    generateQuestion(currentType);
}

// ---------- Show / Hide ----------
function showGame() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("feedback").innerText = "";
    document.getElementById("answer").value = "";
}

function backToMenu() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("game").style.display = "none";
}

// ---------- Generate Questions ----------
function generateQuestion(type) {
    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;
    let questionEl = document.getElementById("question");

    if(type === "add") {
        currentAnswer = a + b;
        questionEl.innerText = `What is ${a} + ${b}?`;
    } else if(type === "sub") {
        currentAnswer = a - b;
        questionEl.innerText = `What is ${a} - ${b}?`;
    } else if(type === "mul") {
        currentAnswer = a * b;
        questionEl.innerText = `What is ${a} × ${b}?`;
    } else if(type === "div") {
        currentAnswer = Math.floor(a / b);
        questionEl.innerText = `What is ${a * b} ÷ ${b}?`;
    } else if(type === "frac") {
        currentAnswer = Math.floor(a / 2);
        questionEl.innerText = `What is 1/2 of ${a}?`;
    }

    // Animate question
    questionEl.style.color = "#ff3399";
    questionEl.style.fontSize = "24px";
    questionEl.style.transition = "all 0.5s";
    questionEl.style.transform = "scale(1.2)";
    setTimeout(() => {
        questionEl.style.transform = "scale(1)";
    }, 300);
}

// ---------- Check Answer ----------
function checkAnswer() {
    let userAnswer = Number(document.getElementById("answer").value);
    let feedback = document.getElementById("feedback");
    let correctSound = new Audio('sounds/correct.mp3');
    let wrongSound = new Audio('sounds/wrong.mp3');

    if(userAnswer === currentAnswer) {
        feedback.innerText = "Correct! 🎉✨";
        feedback.style.color = "green";
        correctSound.play();
    } else {
        feedback.innerText = `Oops! The correct answer is ${currentAnswer} 😅`;
        feedback.style.color = "red";
        wrongSound.play();
    }

    // Auto next question after 1 second
    setTimeout(() => {
        document.getElementById("answer").value = "";
        feedback.innerText = "";
        generateQuestion(currentType);
    }, 1000);
}
