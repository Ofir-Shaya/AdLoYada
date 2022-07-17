let Link = document.getElementById("triviaLink");
if (Link !== null) {
  Link.onclick = openTrivia;

  function openTrivia() {
    window.open(
      "./Trivia.html",
      "NewWin",
      "toolbar=no,status=no,width=350,height=500"
    );
  }
}

const questionArea = document.getElementById("Questions");
const answerArea = document.getElementById("Answers");
const checker = document.getElementById("checker");
const total = document.getElementById("total");
const allQuestions = {
  "When do the Mardi Gras ends?": [
    "Same Day",
    "The Day After",
    "Fat Tuesday",
    2,
  ],
  "How can children get a clear view of the parade?": [
    "They don't",
    "Colorful ladders with seats",
    "Sitting on their parents shoulders",
    1,
  ],

  "What is the theme of the parade ": [
    "Different every year",
    "Magic",
    "Clowns",
    0,
  ],
  "What is the magic words to catch all the throws?": [
    "Abracadabra ",
    "Hocus pocus",
    "Throw Me Something, Mister",
    2,
  ],
  "What float riders are required to do by law": [
    "Smile all day long",
    "Wear masks or face paint",
    "Wear a wig",
    1,
  ],
  "What is the day before Mardi Gras called?": [
    "Lundi Gras",
    "The day before",
    "Yom Kippur",
    0,
  ],
  "What day comes after Mardi Gras?": [
    "The day after",
    "Saturday",
    "Ash Wednesday",
    2,
  ],
  "Where was the first known carnival celebration?": [
    "New Orleans, US",
    "Nice, France",
    "Lehavim, Israel",
    1,
  ],
  "When was the earliest known carnival celebration?": [
    "1294",
    "1900",
    "2000",
    0,
  ],
  "What is the most popular food for Shrove Tuesday?": [
    "Pizza",
    "Icecream",
    "Pancakes",
    2,
  ],
};
let current = 0;
let sumCorrect = 0;

function loadQuestions(current) {
  let question = Object.keys(allQuestions)[current];
  let createP = document.createElement("p");
  text = document.createTextNode(question);
  createP.appendChild(text);
  questionArea.innerHTML = "";
  questionArea.appendChild(createP);
}

function loadAnswers(current) {
  let answers = allQuestions[Object.keys(allQuestions)[current]];
  answerArea.innerHTML = "";
  for (let i = 0; i < answers.length - 1; i += 1) {
    let createDiv = document.createElement("div"),
      text = document.createTextNode(answers[i]);
    createDiv.appendChild(text);
    createDiv.addEventListener("click", checkAnswer(i, answers));
    answerArea.appendChild(createDiv);
  }
}

function checkAnswer(i, arr) {
  return function () {
    let answer = i,
      correctAnswer = arr[arr.length - 1];

    if (correctAnswer === answer) {
      addChecker(true);
    } else {
      addChecker(false);
    }
    if (current < Object.keys(allQuestions).length - 1) {
      current += 1;
      loadQuestions(current);
      loadAnswers(current);
    } else {
      questionArea.innerHTML = "Finished";
      answerArea.innerHTML = "";
    }
  };
}
function addChecker(bool) {
  let createDiv = document.createElement("div"),
    text = document.createTextNode(current + 1);
  createDiv.appendChild(text);
  if (bool) {
    createDiv.className = "correct";
    checker.appendChild(createDiv);
    sumCorrect++;
    total.innerHTML = `${sumCorrect}\\${current + 1}`;
  } else {
    createDiv.className = "false";
    checker.appendChild(createDiv);
    total.innerHTML = `${sumCorrect}\\${current + 1}`;
  }
}
loadQuestions(current);
loadAnswers(current);
total.innerHTML = `${sumCorrect}\\${current}`;
