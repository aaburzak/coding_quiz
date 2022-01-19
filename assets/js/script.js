//Timer function
//If timer starts - first question
//if answer submitted - new question starts
// if wrong function (subtract time, new question)
// If timer zero or last question finished = game over
//game over function (save initials and score)
//displays yor score and past attempts (initials)


//var for quiz questions.


// //variables
// var qQuestionIndex = 0;
// var score = 0;

// //variables needed to start code
// var start = document.querySelector(".start_button");
// var 
// var questionDisplay = document.querySelector(".question");


// var timervalue = 0


// function.first_question();
//   if(userAnswer = correctAnswer1){
//     //var userAnswer =
//   var correctAnswer1 = answerA
// }




//Declared Variables
var startButton = document.getElementById('start_btn');
var nextButton = document.getElementById('next_btn');
var questionContainer = document.getElementById('question_container');
var questionElement = document.getElementById('question');
var answerElement = document.getElementById('answer_button');
var timerElement = document.querySelector(".timer-count");
var randomQuestion, currentQuestionIndex;
var timer;
var timerCount = 30;
var penaltyTime = 5;


//begins the game upon click of start button
startButton.addEventListener('click', startGame)


//starts countdown when game begins and prompts a random question in the quiz
function startGame(){
  startButton.classList.add('hide')
  randomQuestion = quizQuestions.sort(() => Math.random() -.5)
  currentQuestionIndex = 0
  questionContainer.classList.remove('hide')
  startTimer()
  nextQuestion()
}

//prompts the next question in the quiz

//announces the end of the game when time runs out
function timesUp() {
  questionElement.textContent = "Time's Up!";
}

function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    // Tests if time has run out
    if (timerCount <= 0) {
      // Clears interval
      clearInterval(timer);
      timesUp();
    }
  }, 1000);
}

//prompts the next question in the quiz
function nextQuestion(){
  reset()
  showQuestion(randomQuestion[currentQuestionIndex])
}

//creates and displays the questions and answers for the quiz
function showQuestion(question){
  questionElement.innerText = question.question
  question.answers.forEach(answer =>{
    var button = document.createElement('button')
    button.innerText = answer.text
    if (answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerElement.appendChild(button)
  })
}

//removes the starter html quiz question and answers and replaces them with those stored in var quizQuestions
function reset(){
  clearStatusClass(document.body)
  while(answerElement.firstChild){
    answerElement.removeChild
    (answerElement.firstChild)
  }
}
//determines if user's answer is correct
function selectAnswer(e){
  var userAnswer = e.target
  var correct = userAnswer.dataset.correct

  setStatusClass(document.body, correct)
  Array.from(answerElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  });
//penalizes the user by subtracting 5 seconds from time if incorrect.
  if (!correct){
    timerCount = timerCount - penaltyTime;
//provides next question if correct and questions remain
  } else if (correct && randomQuestion.length > currentQuestionIndex + 1){
    currentQuestionIndex++
    nextQuestion()
//starts over if at end of quiz
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }

  }
  // if(randomQuestion.length > currentQuestionIndex + 1){
  //   currentQuestionIndex++
  //   nextQuestion()
  // } else {
  //   startButton.innerText = 'Restart'
  //   startButton.classList.remove('hide')
  // }
  






function setStatusClass(element, correct){
  clearStatusClass(element)
  if(correct){
    element.classList.add('correct')

  }else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


var quizQuestions =[
  {
    question: "test question one, the answer is C",
    answers:[
      {text: "A", correct: false},
      {text: "B", correct: false},
      {text: "C", correct: true},
      {text: "D", correct: false}
    ]
  },

  {
    question: "test question two, the answer is B",
    answers:[
      {text: "A", correct: false},
      {text: "B", correct: true},
      {text: "C", correct: false},
      {text: "D", correct: false}
    ]
  },

  {
    question: "test question three, the answer is D",
    answers:[
      {text: "A", correct: false},
      {text: "B", correct: false},
      {text: "C", correct: false},
      {text: "D", correct: true}
    ]
  },

  {
    question: "test question four, the answer is A",
    answers:[
      {text: "A", correct: true},
      {text: "B", correct: false},
      {text: "C", correct: false},
      {text: "D", correct: false}
    ]
  }

];