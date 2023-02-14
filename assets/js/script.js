// pseudo code
//needed variables
var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start-btn");
var quizTitle = document.querySelector(".title");
var introNeeds = document.querySelectorAll(".intro-needs");
var secondsLeft = 40;
var quizArea = document.querySelector(".main-zone");
var currentQuestion = 0;
var timerInterval;
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
  {
  question: "What do you think my favorite color is?",
  answers: [
    {text: "Green", correct: false},
    {text: "Blue", correct: true},
    {text: "Pink", correct: false},
    {text: "Purple", correct: false}
   ]
  },
]

// overarching function that contains my whole quiz
function startQuiz() {
  setTime();
  removeStarter();
  createQuizContent();
}

startBtn.addEventListener("click", startQuiz);
// starts on button press, button triggers timer and changes content to first question
// function to start timer
function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Timer: " + secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
// function to change content
// takes away intro page content
function removeStarter() {
  for (let z=0; z < introNeeds.length; z++) {
    introNeeds[z].remove();
  }
  startBtn.remove();
}

// creates ol list and answers with initial question and answers in proper styling
  function createQuizContent() {  
    quizTitle.setAttribute("style", "font-size: 1.5em; text-decoration: none;");
    quizTitle.textContent = questions[currentQuestion].question;
    var answerList = document.createElement("ol");
    answerList.setAttribute("style", "display: flex; flex-flow: column; align-items: center;")
    quizArea.appendChild(answerList);
    for (let x=0; x < questions[currentQuestion].answers.length; x++) {
      var answersEl = document.createElement("button");
      answersEl.setAttribute("class", "btn");
      answersEl.setAttribute("style", "text-align: left; white-space: nowrap; width: fit-content; padding: 5px 10px")
      answersEl.textContent = questions[currentQuestion].answers[x].text;
      answerList.appendChild(answersEl);
      answersEl.addEventListener("click", function() {answerValidation(x)});
    }
    var confirmation = document.createElement("p");
    quizArea.appendChild(confirmation);
    confirmation.setAttribute("style", "color: var(--text-dark); font-size: 1.5em;")
    confirmation.classList.add('confirmation');
  }

  function answerValidation(x) {
    var confirmation = document.querySelector(".confirmation");
    var answersEls = document.querySelectorAll(".btn");
    
    if (questions[currentQuestion].answers[x].correct) {
      confirmation.textContent = "That is correct!";
    } else {
      confirmation.textContent = "That is wrong!";
      secondsLeft -= 10;
    }
    
    currentQuestion++;
    if (currentQuestion >= questions.length || secondsLeft <= 0) {
      return endGame();
    } else {
      quizTitle.textContent = questions[currentQuestion].question;
      for (let z=0; z < questions[currentQuestion].answers.length; z++) {
        answersEls[z].textContent = questions[currentQuestion].answers[z].text;
      }
    }
  };

  function endGame() {
    clearInterval(timerInterval);
    var answersEls = document.querySelectorAll(".btn");
    var confirmation = document.querySelector(".confirmation");

    for (let z = 0; z < answersEls.length; z++) {
      answersEls[z].remove();
    }
    confirmation.remove();

    if (secondsLeft > 0) {
      quizTitle.textContent = "Congratulations! You finished in time with a score of " +secondsLeft +". Please enter your initals below.";
    }

    var returnedValues = makeForm();
    var submitBtn = returnedValues[0];
    var initialSubmit = returnedValues[1];
    submitBtn.addEventListener("click", function(event) {
      event.preventDefault()
      var userScore = {
        user: initialSubmit.value,
        score: secondsLeft 
      }
      if (JSON.parse(localStorage.getItem("storedScores")) === null) {
        let userScores = [userScore];
        localStorage.setItem("storedScores", JSON.stringify(userScores)); 
      } else {
        let userScores = JSON.parse(localStorage.getItem("storedScores"));
        userScores.push(userScore);
        localStorage.setItem("storedScores", JSON.stringify(userScores));
      }
    });
  }

  function makeForm() {
    var initialForm = document.createElement("form");
    initialForm.setAttribute("style", "display: flex; flex-flow: column; align-content: center;")
    quizArea.appendChild(initialForm);
    var initialLabel = document.createElement("label");
    initialLabel.setAttribute("for", "initial");
    quizArea.appendChild(initialLabel);
    var initialSubmit = document.createElement("input");
    initialSubmit.setAttribute("type", "text");
    initialSubmit.setAttribute("placeholder", "initials please!");
    initialForm.appendChild(initialSubmit);
    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("class", "btn");
    submitBtn.textContent = "Submit now!"
    initialForm.appendChild(submitBtn);
    return [submitBtn, initialSubmit];
  }
  // checking correct or false mechanism needs to add to current question

 
  

    // NEED TO FIX REPLACING ANSWER TEXT. SOLUTION HAS TO DO WITH HOW FOR LOOP WORKS AND HOW TO JUST REPLACE TEXT CONTENT. ELSE SHOWS ORIGINAL ATTEMPT BY RECALLING FUNCTION, BUT BETTER SOLUTION MAY BE FINDING A NEW WAY TO CYCLE THROUGH BUTTONS AND REPLACE TEXT CONTENT

  

// answering question triggers right or wrong
// answering question wrong triggers timer -10
// both answers trigger next question
// on timer complete, score is given as time left – if time out, score is 0

// store questions and answers as an object array with properties as answers

// on game complete
// static page with submission to local storage of name
//submit button stores name and also takes to Highscore

//highscore is static, make buttons on click to clear local storage or go back to main page at start of game