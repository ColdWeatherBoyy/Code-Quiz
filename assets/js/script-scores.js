// needed variables
var clearBtn = document.querySelector("#clear-btn");
var backBtn = document.querySelector("#back-btn");

// call of displayScores function
displayScores();

// utilizes localstorage to display text on page
function displayScores() {
  var userScores = JSON.parse(localStorage.getItem("storedScores"));
  var highscoreList = document.querySelector("#highscore-list");
  if (userScores !== null) {
    for (let x = 0; x < userScores.length; x++)  {
      var highscoreEls = document.createElement("li");
      highscoreEls.textContent = userScores[x].user + ": " + userScores[x].score;
      highscoreList.appendChild(highscoreEls);
    }
  }
}

// event listener to clear scores
clearBtn.addEventListener("click", clearScores);

// event listener to navigate back to quiz
backBtn.addEventListener("click", function() {
  document.location.href = "./index.html";
});

function clearScores() {
  localStorage.clear();
  var highscoreList = document.querySelector("#highscore-list");
  highscoreList.textContent = ""; 
}