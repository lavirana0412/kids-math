let currentAnswer = 0;
let solutionText = "";
let currentOperation = "";

// 🔹 Show Question
function showQuestion(questionText) {
    document.getElementById("question").innerText = questionText;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").innerText = "";
    document.getElementById("solution").innerText = "";

    document.getElementById("game").style.display = "block";
    document.getElementById("menu").style.display = "none";
}

// 🔹 Addition
function startAddition() {
    currentOperation = "add";

    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;

    currentAnswer = a + b;
    solutionText = a + " + " + b + " = " + currentAnswer;

    showQuestion(a + " + " + b);
}

// 🔹 Subtraction
function startSubtraction() {
    currentOperation = "sub";

    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;

    if (b > a) {
        let temp = a;
        a = b;
        b = temp;
    }

    currentAnswer = a - b;
    solutionText = a + " - " + b + " = " + currentAnswer;

    showQuestion(a + " - " + b);
}

// 🔹 Multiplication
function startMultiplication() {
    currentOperation = "mul";

    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;

    currentAnswer = a * b;
    solutionText = a + " × " + b + " = " + currentAnswer;

    showQuestion(a + " × " + b);
}

// 🔹 Division
function startDivision() {
    currentOperation = "div";

    let divisor = Math.floor(Math.random() * 10) + 1;
    let answer = Math.floor(Math.random() * 10) + 1;
    let dividend = divisor * answer;

    currentAnswer = answer;
    solutionText = dividend + " ÷ " + divisor + " = " + answer;

    showQuestion(dividend + " ÷ " + divisor);
}

// 🔹 Check Answer
function checkAnswer() {
    let userAnswer = Number(document.getElementById("answer").value);

    if (userAnswer === currentAnswer) {
        document.getElementById("feedback").innerText = "Correct 🎉";
    } else {
        document.getElementById("feedback").innerText = "Wrong 😅";
    }

    document.getElementById("solution").innerText =
        "Solution: " + solutionText;

    // 🔥 Automatically next question
    setTimeout(() => {
        generateNextQuestion();
    }, 1500);
}

// 🔹 Generate Next Question
function generateNextQuestion() {
    if (currentOperation === "add") startAddition();
    else if (currentOperation === "sub") startSubtraction();
    else if (currentOperation === "mul") startMultiplication();
    else if (currentOperation === "div") startDivision();
}

// 🔹 Back to Menu
function backToMenu() {
    document.getElementById("game").style.display = "none";
    document.getElementById("menu").style.display = "block";
}
