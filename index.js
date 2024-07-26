// References
let questionField = document.getElementById("question-field");
let option1 = document.getElementById("option-btn-1");
let option2 = document.getElementById("option-btn-2");
let option3 = document.getElementById("option-btn-3");
let option4 = document.getElementById("option-btn-4");

let nextBtn = document.querySelector(".next-btn")

let index = 0;
let quesIndex = 1;
let isAnsGiven = false;

// Creating an array
const QUIZARRAY = [
    ["What is the capital city of France?", "Paris", ["Berlin", "Madrid", "Paris", "Rome"]],
    ["Which planet is known as the Red Planet?", "Mars",  ["Earth", "Mars", "Jupiter", "Venus"]],
    ["What is the largest ocean on Earth?", "Pacific Ocean",  ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"]],
    ["What is the chemical symbol for water?", "H₂O", ["H₂O", "O₂", "CO₂", "H₂"]]
]

let correctAns;
let randArray = GetRandomElements(QUIZARRAY, QUIZARRAY.length);


console.log(randArray)

// Sending data to the DOM
let SendData = function () {
    let randOpt = GetRandomElements(randArray[index][2]);

    questionField.innerHTML = quesIndex + ". " + randArray[index][0];
    option1.innerHTML = randOpt[0];
    option2.innerHTML = randOpt[1];
    option3.innerHTML = randOpt[2];
    option4.innerHTML = randOpt[3];

    correctAns = randArray[index][1];
}

SendData();

// changing index on btn clikced
nextBtn.onclick = () => {
    if(isAnsGiven) {
        index++;
        ResetBColor();
        SendData();
        isAnsGiven = false;
    }
    else {
        console.log("the answer is not given yet.")
    }
}

option1.onclick = () => {
    CheckAns(option1, correctAns);
}

option2.onclick = () => {
    CheckAns(option2, correctAns);
}

option3.onclick = () => {
    CheckAns(option3, correctAns);
}

option4.onclick = () => {
    CheckAns(option4, correctAns);
}


function CheckAns (_clickedBtn, _correctBtn) {
    if(!isAnsGiven) {
        if(_clickedBtn.innerHTML === _correctBtn) {
            _clickedBtn.style.backgroundColor = "green";
            isAnsGiven = true;
        }
        else {
            _clickedBtn.style.backgroundColor = "red";
        }
    }
}

function ResetBColor() {
    option1.style.backgroundColor = "#e7e7e7";
    option2.style.backgroundColor = "#e7e7e7";
    option3.style.backgroundColor = "#e7e7e7";
    option4.style.backgroundColor = "#e7e7e7";
}

function GetRandomElements(list, items) {
    return [...list].sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, items);
};
