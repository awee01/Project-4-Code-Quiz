// variable declaration
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var ReturnHome = document.querySelector("#ReturnHome");
var highscorelist = document.querySelector("#highscorelist");
var Scores = [];

//get local storage if it exists
if(localStorage.getItem("Scores")){

  Scores = JSON.parse(localStorage.getItem("Scores"))

}

//display local storage as highscores
for (let i = 0; i < Scores.length; i++) {

  var list = document.createElement("li");
  list.textContent = Scores[i].initial + " - " + Scores[i].timeleft

  highscorelist.appendChild(list)
  
}

// score cleared
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

//return back to homepage
ReturnHome.addEventListener("click", function () {
  window.location.replace("/index.html");
});

