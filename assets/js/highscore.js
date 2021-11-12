// variable declaration
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var ReturnHome = document.querySelector("#ReturnHome");


// score cleared
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

ReturnHome.addEventListener("click", function () {
  window.location.replace("/index.html");
});