// pseudo code
//needed variables
var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start-btn");
var quizTitle = document.querySelector(".title");
var introText = document.querySelectorAll(".intro-text");
var secondsLeft = 75;
var quizArea = document.querySelector(".main-zone");
// play game function

var questions = [
  {
  question: "Which notation is correct on a CSS sheet when making an ID selector?",
    answers: [
    {text: ".id-selector", correct: false},
    {text: "#id selector", correct: false},
    {text: "id=id-selector", correct: false},
    {text: "#id-selector", correct: true}
    ]
  },
  {
  question: "What does HTML stand for??",
    answers: [
    {text: "Hypertext Markup Language", correct: true},
    {text: "Hyper Textual Markdown Language", correct: false},
    {text: "Hyper Textual Machine Learning", correct: false},
    {text: "Hypertext Machine Language", correct: false}
    ]
  },
  {
  question: "What does querySelector select if there are multiple instances of what its looking for?",
    answers: [
    {text: "It will work like querySelectorAll and apply to all of the selected elements", correct: true},
    {text: "It will select the first element that matches", correct: false},
    {text: "It will select the last element that matches", correct: false},
    {text: "It will return an error", correct: false}
   ]
  },
]

// starts on button press, button triggers timer and changes content to first question
// function to start timer
  function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = "Timer: " + secondsLeft;
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }


// function to change content
  function quizQuestions() {
    for (let i=0; i < questions.length; i++) {
      introText.textContent = "";
      quizTitle.textContent = questions[i].question;
      var answerList = document.createElement("ol");
      quizArea.appendChild(answerList);
        for (let x=0; x < questions[i].answers.length; x++) {
        var answersEl = document.createElement("li");
        answersEl.textContent = questions[i].answers[x];
        answerList.appendChild(answersEl);
      }
    }
}


function startQuiz() {
  setTime();
  quizQuestions();
}
startBtn.addEventListener("click", startQuiz);

// answering question triggers right or wrong
// answering question wrong triggers timer -10
// both answers trigger next question
// on timer complete, score is given as time left – if time out, score is 0

// store questions and answers as an object array with properties as answers

// on game complete
// static page with submission to local storage of name
//submit button stores name and also takes to Highscore

//highscore is static, make buttons on click to clear local storage or go back to main page at start of game