var timerEl = document.querySelector("p.timer");
var timeLeft = 150
var scoreEl = document.querySelector("#score");
var intro = document.querySelector("#start");
var questions = document.querySelector("#questions");
var question = document.querySelector("#question");
var questionnum = 0;
var rightwrong = document.querySelector("#rightwrong");
var endpage = document.querySelector("#end-page");
var initials = document.querySelector("#initials");
var score = document.querySelector("#score");
var scorelistEl = document.querySelector("scores-list");
var scorelist = [];
var starter = document.querySelector("#start-button");
var button = document.querySelector("button.btn")
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var submit = document.querySelector("submitit");


var questionlist = [
{
  question: "What is Javascript?",
  answers: ["1. A coding language", "2. A type of bird"],
  correctanswer: "1"
},
{
  question: "Is Javascript useful?",
  answers: ["1. Yes", "2. No"],
  correctanswer: "1"
},
{
  question: "Javascript is cool",
  answers: ["1. False", "2. True"],
  correctanswer: "2"
}
];

function Timer() {
  var timer = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft;

      if (timeLeft === 0 || questionnum === questions.length) {
          clearInterval(timerInterval);
          questions.style.display = "none";
          endpage.style.display = "block";
          scoreEl.textContent = timeLeft;
      }
  }, 1000);
}

function start() {
  intro.style.display = "none";
  questions.style.display = "block";
  questionCount = 0;

  Timer();
 theQuestions(questionCount);
}

starter.addEventListener("click", start);

function theQuestions(id) {
  if (id < questions.length) {
      questionEl.textContent = questions[id].question;
      answer1.textContent = questions[id].answers[1];
      answer2.textContent = questions[id].answers[2];
  }
}

function isitright(event) {
  event.preventDefault();
  rightwrong.style.display = "block";
  var p = document.createElement("p");
  rightwrong.appendChild(p);

  losetime(function () {
    p.style.display = 'none';
}, 1500);

if (questionlist[questionnum].correctanswer === event.target.value) {
    p.textContent = "Yes";
} else if (questionlist[questionnum].correctanswer !== event.target.value) {
    timeLeft = timeLeft - 5;
    p.textContent = "No";
}
if (questionnum < questionlist.length) {
    questionnum++;
}
theQuestions(questionnum);
}
