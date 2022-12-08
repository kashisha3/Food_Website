var quizdata = [
  {
    question: "Which framework is related to JS?",
    a: ".net",
    b: "django",
    c: "react",
    d: "flask",
    correct: "c",
  },

  {
    question: "Which is not a programming language?",
    a: "python",
    b: "html",
    c: "c",
    d: "javascript",
    correct: "b",
  },

  {
    question: "Which is not a framework?",
    a: "angular",
    b: "django",
    c: "react",
    d: "javascript",
    correct: "d",
  },

  {
    question: "CSS stands for",
    a: "cascading style sheet",
    b: "cascading style state",
    c: "cascading of style sheet",
    d: "none of the abive",
    correct: "a",
  },
];

var quiz = document.getElementById("quiz");

var answers = document.querySelectorAll(".answer");
var question = document.getElementById("question");
var option_a = document.getElementById("a_value");
var option_b = document.getElementById("b_value");
var option_c = document.getElementById("c_value");
var option_d = document.getElementById("d_value");

var submitbtn = document.getElementById("submit");

var currentquestion = 0;
var quizscore = 0;

loadquiz();

function loadquiz() {
  deselect();
  question.innerText = quizdata[currentquestion].question;
  option_a.innerText = quizdata[currentquestion].a;
  option_b.innerText = quizdata[currentquestion].b;
  option_c.innerText = quizdata[currentquestion].c;
  option_d.innerText = quizdata[currentquestion].d;
}
function deselect() {
  answers.forEach(function(answer){
    answer.checked = false;
  });
}

submitbtn.addEventListener("click", () => {
  var selectedoption;

  answers.forEach((answer) => {
    if (answer.checked) {
      selectedoption = answer.id;
    }
  });

  if (selectedoption == quizdata[currentquestion].correct) {
    quizscore = quizscore + 1;
  }

  currentquestion = currentquestion + 1;

  if (currentquestion == quizdata.length) {
    document.querySelector(
      ".quiz"
    ).innerHTML = `<h2> you have answered ${quizscore} correctly out of ${quizdata.length} </h2>`;
  } else {
    loadquiz();
  }
});
