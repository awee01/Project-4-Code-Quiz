//Declare some variables that will be used
var timeleft = 60;

//Questions
const questions = [
  {
    title: "An array always begins at an index of:",
    choices: ["-1", "0", "1", "null"],
    answer: "0"
  }, 
  {
    title: "A function within an object is called a ____.",
    choices: ["Property", "Key", "Value", "Method"],
    answer: "Method"
  }, 
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
    answer: "Parentheses"
  },
  {
    title: "Arrays in Javascript can be used to store ____.",
    choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
    answer: "All of the above"
  }, 
  {
    title: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
    answer: "Quotes"
  }, 
  {
    title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "Terminal / Bash", "For Loops", "Console Log"],
    answer: "Console Log"
  },
  
  ];


//renders the questions
function renderQuestions() {
for (var i = 0; i < questions.length; i++) {}
}

//timer countdown
function startTimer(){

  var Timer = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(Timer);
      document.getElementById("countdowntimer").innerHTML = "Time's Up!";
      quizEnd();
    } else {
      document.getElementById("countdowntimer").innerHTML = timeleft;
    }
    timeleft -= 1;
  }, 1000);

}

//saving initials and scores to local storage

//


//starts the quiz upon click
  document.querySelector("#start").addEventListener("click", function() {
    startTimer();
    renderQuestions();
})
