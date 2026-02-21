let currentAnswer = 0;
let score = 0;
let currentType = '';

function startGame(type) {
    currentType = type;
    generateQuestion();
}

function generateQuestion() {

    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    let questionText = "";

    if (currentType === 'add') {
        currentAnswer = num1 + num2;
        questionText = `${num1} + ${num2} = ?`;
    }
    else if (currentType === 'sub') {
        currentAnswer = num1 - num2;
        questionText = `${num1} - ${num2} = ?`;
    }
    else if (currentType === 'mul') {
        currentAnswer = num1 * num2;
        questionText = `${num1} × ${num2} = ?`;
    }
    else if (currentType === 'div') {
        currentAnswer = num1;
        questionText = `${num1 * num2} ÷ ${num2} = ?`;
    }
    else if (currentType === 'frac') {
        currentAnswer = "1/2";
        questionText = "Half of 1 is ?";
    }

    document.getElementById("question").innerText = questionText;

    generateOptions();
}

function generateOptions() {
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    for (let i = 0; i < 4; i++) {
        let option = document.createElement("button");
        let randomOption = currentAnswer + Math.floor(Math.random() * 5) - 2;

        if (i === 0) {
            option.innerText = currentAnswer;
            option.onclick = () => checkAnswer(currentAnswer);
        } else {
            option.innerText = randomOption;
            option.onclick = () => checkAnswer(randomOption);
        }

        optionsDiv.appendChild(option);
    }
}

function checkAnswer(answer) {
    if (answer == currentAnswer) {
        document.getElementById("result").innerHTML = "🎉 Correct!";
        document.getElementById("result").className = "correct";
        score++;
    } else {
        document.getElementById("result").innerHTML = "Try Again!";
    }

    document.getElementById("score").innerText = score;
    setTimeout(generateQuestion, 1000);
}

function checkFillAnswer() {
    let userAnswer = document.getElementById("answerBox").value;

    if (userAnswer == currentAnswer) {
        document.getElementById("result").innerHTML = "🎉 Correct!";
        score++;
    } else {
        document.getElementById("result").innerHTML = "Try Again!";
    }

    document.getElementById("score").innerText = score;
    document.getElementById("answerBox").value = "";
    setTimeout(generateQuestion, 1000);
}