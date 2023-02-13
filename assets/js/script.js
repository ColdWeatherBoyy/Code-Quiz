// pseudo code
//needed variables
var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start-btn");
var quizTitle = document.querySelector(".title");
var introNeeds = document.querySelectorAll(".intro-needs");
var secondsLeft = 75;
var quizArea = document.querySelector(".main-zone");
var currentQuestion = 0;
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
  question: "What does HTML stand for?",
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
    for (let j=0; j < introNeeds.length; j++) {
      introNeeds[j].remove();
    }
    startBtn.remove();
    quizTitle.setAttribute("style", "font-size: 1.5em; text-decoration: none;");
    quizTitle.textContent = questions[currentQuestion].question;
    var answerList = document.createElement("ol");
    answerList.setAttribute("style", "display: flex; flex-flow: column; justify-content: flex-start;")
    quizArea.appendChild(answerList);
      for (let x=0; x < questions[currentQuestion].answers.length; x++) {
      var answersEl = document.createElement("button");
      answersEl.setAttribute("class", "btn");
      answersEl.setAttribute("style", "text-align: left; white-space: nowrap; width: fit-content; padding: 3% 5%")
      answersEl.textContent = questions[currentQuestion].answers[x].text;
      answerList.appendChild(answersEl);
      
    answersEl.addEventListener("click", function() {
      if (questions[currentQuestion].answers[x].correct === true) {
        var confirmation = document.createElement("p");
        confirmation.textContent = "That is correct!";
        quizArea.appendChild(confirmation);
        confirmation.setAttribute("style", "color: var(--text-dark); font-size: 1.5em;")
        currentQuestion++;
        quizTitle.textContent = questions[currentQuestion].question;
        answersEl.textContent = questions[currentQuestion].answers[x].text;
      } else {
        var confirmation = document.createElement("p");
        confirmation.textContent = "That is wrong!";
        quizArea.appendChild(confirmation);
        confirmation.setAttribute("style", "color: var(--text-dark); font-size: 1.5em;")
        secondsLeft -= 10;
        currentQuestion++;
        return quizQuestions();
      }

      // NEED TO FIX REPLACING ANSWER TEXT. SOLUTION HAS TO DO WITH HOW FOR LOOP WORKS AND HOW TO JUST REPLACE TEXT CONTENT. ELSE SHOWS ORIGINAL ATTEMPT BY RECALLING FUNCTION, BUT BETTER SOLUTION MAY BE FINDING A NEW WAY TO CYCLE THROUGH BUTTONS AND REPLACE TEXT CONTENT

    })
    } 
  }

  // checking correct or false mechanism needs to add to current question

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