//Declare some variables that will be used
var timeleft = 100;
var questionArray = 0;
var main = document.querySelector("#main");
var ulCreate = document.createElement("ul");
var Timer
var Scores = [];

//get local storage if it exists
if(localStorage.getItem("Scores")){

  Scores = JSON.parse(localStorage.getItem("Scores"))

}

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

  //clears intro
  main.innerHTML = "";
  ulCreate.innerHTML = "";


//loops questions
for (var i = 0; i < questions.length; i++) {

  var currentquestion = questions[questionArray].title;
  var currentchoices = questions[questionArray].choices;

  //displays question
  main.textContent = currentquestion

}
  //displays choices for user
  currentchoices.forEach(function(newData){
    var listChoices = document.createElement("li");
    listChoices.textContent = newData

    main.appendChild(ulCreate);
    ulCreate.appendChild(listChoices);
    
    //on click of choice, activate compareAnswer function
    listChoices.addEventListener("click", (compareAnswer));
  })

}


//compare Answer function, determines if answer is correct or incorrect, then proceeds to loop renderQuestions function or ends quiz

function compareAnswer(userAnswer) {

  var selectedAnswer = userAnswer.target;

  if (selectedAnswer.matches("li")) {

    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");

    if (selectedAnswer.textContent == questions[questionArray].answer) {
   
      createDiv.textContent = "Correct!" 
      createDiv.setAttribute('style', 'font-size:20px; font-style: italic; border-top: 1px solid black;');
      
    } else {
 
      timeleft = timeleft - 10;
      createDiv.textContent = "Incorrect!"
      createDiv.setAttribute('style', 'font-size:20px; font-style: italic; border-top: 1px solid black;');
    }
}


//endQuiz function if no more questions, else keeps looping renderQuestions
questionArray++;
if (questionArray >= questions.length) {
  quizEnd();
} else {
  renderQuestions();
}
main.appendChild(createDiv);
}

//timer countdown, activates endQuiz function if timer reaches 0
function startTimer(){

  Timer = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(Timer);
      document.getElementById("countdowntimer").innerHTML = "Time's Up!";
      quizEnd();
      
    } 
      document.getElementById("countdowntimer").innerHTML = timeleft;
    
    timeleft -= 1;
  }, 1000);

}


//starts the quiz upon click
  document.querySelector("#start").addEventListener("click", function() {
    startTimer();
    renderQuestions();
})


//end function of the quiz, appends new content to create results page and save option for highscores

function quizEnd(){

  main.innerHTML = "";
  ulCreate.innerHTML = "";

  var createH1 = document.createElement("h1");
  createH1.setAttribute("id", "createH1");
  createH1.textContent = "Quiz Completed!"
  main.appendChild(createH1);



  if (timeleft >= 0) {
    
    clearInterval(Timer);

    var createH2 = document.createElement("h2");
    createH2.setAttribute("id", "createH2");  
    createH2.textContent = "Your Final Score Is: " + timeleft;
    document.getElementById("countdowntimer").innerHTML = timeleft;
    main.appendChild(createH2);

    var createH3 = document.createElement("h3");
    createH3.setAttribute("id", "createH3");
    createH3.textContent = "Input Your Name and Save your Score"
    main.appendChild(createH3);



    
    var createInput = document.createElement("input");
    createInput.setAttribute("id", "initial");
    main.appendChild(createInput);


    var createButton = document.createElement("button");
    createButton.setAttribute("id", "savebutton");
    createButton.textContent = "Save your Score";
    main.appendChild(createButton);


    //save to local storage
    document.getElementById("savebutton").addEventListener("click", function(){

      var initial = document.getElementById("initial").value

      Scores.push({

        initial,timeleft

      })

      localStorage.setItem("Scores",JSON.stringify(Scores))
      location.replace("./highscore.html")

    } )


    // prevents null error for removing last "correct/incorrect" statement in line 109
    if( document.getElementById("createDiv")  || document.getElementById("createDiv") === null){
    document.getElementById("createDiv").textContent = "";

    }

  }


};