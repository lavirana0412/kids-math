let currentAnswer = 0;

function startAddition() {
    showGame();
    generateQuestion("add");
}

function startSubtraction() {
    showGame();
    generateQuestion("sub");
}

function startMultiplication() {
    showGame();
    generateQuestion("mul");
}

function startDivision() {
    showGame();
    generateQuestion("div");
}

function startFractions() {
    showGame();
    generateQuestion("frac");
}

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

// Generate a simple question
function generateQuestion(type) {
    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;
    if(type === "add") {
        currentAnswer = a + b;
        document.getElementById("question").innerText = `What is ${a} + ${b}?`;
    } else if(type === "sub") {
        currentAnswer = a - b;
        document.getElementById("question").innerText = `What is ${a} - ${b}?`;
    } else if(type === "mul") {
        currentAnswer = a * b;
        document.getElementById("question").innerText = `What is ${a} × ${b}?`;
    } else if(type === "div") {
        currentAnswer = Math.floor(a / b);
        document.getElementById("question").innerText = `What is ${a * b} ÷ ${b}?`;
    } else if(type === "frac") {
        currentAnswer = Math.floor(a / 2); 
        document.getElementById("question").innerText = `What is 1/2 of ${a}?`;
    }
}

function checkAnswer() {
    let userAnswer = Number(document.getElementById("answer").value);
    if(userAnswer === currentAnswer) {
        document.getElementById("feedback").innerText = "Correct! 🎉";
    } else {
        document.getElementById("feedback").innerText = `Oops! The correct answer is ${currentAnswer}`;
    }
    generateQuestion(document.getElementById("question").innerText.includes("+") ? "add" :
                     document.getElementById("question").innerText.includes("-") ? "sub" :
                     document.getElementById("question").innerText.includes("×") ? "mul" :
                     document.getElementById("question").innerText.includes("÷") ? "div" : "frac");
}
