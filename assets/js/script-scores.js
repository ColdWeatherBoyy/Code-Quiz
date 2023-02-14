var clearBtn = document.querySelector("#clear-btn");
var backBtn = document.querySelector("#back-btn");

displayScores();

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

clearBtn.addEventListener("click", clearScores);
backBtn.addEventListener("click", function() {
  document.location.href = "./index.html";
});

function clearScores() {
  localStorage.clear();
}