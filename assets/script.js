//DEPOSITORIES
var highScoreButton = document.querySelector("#high-score");
var timeEl = document.querySelector("#time");
var startButton = document.querySelector("#start");
var questEl = document.querySelector("#quest");
var choiceEl = document.querySelector("#choices-container");

var firstChoice = document.querySelector("#first-choice");
var secondChoice = document.querySelector("#second-choice");
var thirdChoice = document.querySelector("#third-choice");
var fourthChoice = document.querySelector("#fourth-choice");

// firstChoice.textElement = "Javascript is a language";
// var choiceOne = firstChoice.textElement;

//GLOBAL VARIABLES
var timeLeft = 75;
var correctOne = false;
var correctTwo = false;
var correctThree = false;
var correctFour = false;
var timeId;
var questionIndex = 0;
var body = document.body;
//DOM ELEMENTS
var questionsEl = body.querySelector(".question-container");

var questions = [
  {
    quest: "What ?",
    choices: [
      { text: "Answer A", isCorrect: true },
      { text: "Answer B", isCorrect: false },
      { text: "Answer C", isCorrect: false },
      { text: "Answer D", isCorrect: false },
    ],
  },
  {
    quest: "This is question 2",
    choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
    answer: "This is the answer",
  },
  {
    quest: "This is question 3",
    choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
    answer: "This is the answer",
  },
  {
    quest: "This is question 4",
    choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
    answer: "This is the answer",
  },
];

//FUNCTIONS
function displayScore() {
  //
}

function startGame() {
  //Get the Question
  //   questEl.textContent = JSON.stringify(questions[i].quest);
  var randQuest = getRandomQuestion();
  questEl.textContent = randQuest.quest;

  firstChoice.textContent = randQuest.choices[0].text;
  secondChoice.textContent = randQuest.choices[1].text;
  thirdChoice.textContent = randQuest.choices[2].text;
  fourthChoice.textContent = randQuest.choices[3].text;

  correctOne = randQuest.choices[0].isCorrect;
  console.log(correctOne);
  correctTwo = randQuest.choices[1].isCorrect;
  correctThree = randQuest.choices[2].isCorrect;
  correctFour = randQuest.choices[3].isCorrect;

  //Display the choices for each random question

  //Question click
}

function checkAnswer(value) {
  if (value) {
    //Delete previous question
    //Get next question and choices
  } else {
    //Get next question and choices
    //decrease time by 5 seconds
  }
}

function getRandomQuestion() {
  var index = Math.floor(Math.random() * questions.length);
  var randomQuest = questions[index];
  return randomQuest;
}

//Start the quiz
//Get the Question
//Question click
//End game
//Timer ends
//Shows scores
//Track the time

//USER INTERACTIONS
highScoreButton.addEventListener("click", displayScore);

startButton.addEventListener("click", startGame);

firstChoice.addEventListener("click", function () {
  checkAnswer(correctOne);
});
secondChoice.addEventListener("click", function () {
  checkAnswer(correctTwo);
});
thirdChoice.addEventListener("click", function () {
  checkAnswer(correctThree);
});
fourthChoice.addEventListener("click", function () {
  checkAnswer(correctFour);
});

//INITIALIZATION
