let currentAnswer = 0;
let solutionText = "";

// 🔹 Start Addition
function startAddition() {
    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;

    currentAnswer = a + b;
    solutionText = a + " + " + b + " = " + currentAnswer;

    showQuestion(a + " + " + b);
}

// 🔹 Start Subtraction
function startSubtraction() {
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

// 🔹 Start Multiplication
function startMultiplication() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;

    currentAnswer = a * b;
    solutionText = a + " × " + b + " = " + currentAnswer;

    showQuestion(a + " × " + b);
}

// 🔹 Start Division
function startDivision() {
    let b = Math.floor(Math.random() * 10) + 1;
    let answer = Math.floor(Math.random() * 10) + 1;
    let a = b * answer; // ensures clean division

    currentAnswer = answer;
    solutionText = a + " ÷ " + b + " = " + answer;

    showQuestion(a + " ÷ " + b);
}

// 🔹 Show Question
function showQuestion(q) {
    document.getElementById("question").innerText = q;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").innerText = "";
    document.getElementById("solution").innerText = "";

    document.getElementById("game").style.display = "block";
    document.getElementById("menu").style.display = "none";
}

// 🔹 Check Answer
function checkAnswer() {
    let userAnswer = Number(document.getElementById("answer").value);

    if (userAnswer === currentAnswer) {
        document.getElementById("feedback").innerText = "Correct 🎉";
    } else {
        document.getElementById("feedback").innerText = "Wrong 😅";
    }

    // Always show solution
    document.getElementById("solution").innerText =
        "Solution: " + solutionText;
}

// 🔹 Back to Menu
function backToMenu() {
    document.getElementById("game").style.display = "none";
    document.getElementById("menu").style.display = "block";
}
