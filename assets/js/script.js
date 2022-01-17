//Timer function
//If timer starts - first question
//if answer submitted - new question starts
// if wrong function (subtract time, new question)
// If timer zero or last question finished = game over
//game over function (save initials and score)
//displays yor score and past attempts (initials)


//var for quiz questions.
var quiz_questions =[
  {
    question: "test question one, the answer is C",
    answers:["A","B","C","D"],
    correct: "C"
  },
  {
    question: "test question two, the answer is B",
    answers:["A","B","C","D"],
    correct: "B"
  },
  {
    question: "test question three, the answer is D",
    answers:["A","B","C","D"],
    correct: "D"
  },
  {
    question: "test question four, the answer is A",
    answers:["A","B","C","D"],
    correct: "A"
  },
];

//variables
var start = document.querySelector(".start_button");
var questionDisplay = document.querySelector(".question");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var score = 0
var timervalue = 0


function.first_question();
  if(userAnswer = correctAnswer1){
    //var userAnswer =
  var correctAnswer1 = answerA
}
