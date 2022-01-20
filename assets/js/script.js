
//Declared Variables
var startButton = document.getElementById('start_btn');
var saveButton = document.getElementById('save_btn');
var restartButton = document.getElementById('restart_btn');
var questionContainer = document.getElementById('question_container');
var questionElement = document.getElementById('question');
var answerElement = document.getElementById('answer_button');
var timerElement = document.querySelector(".timer-count");
var userScore = document.querySelector(".user_score");
var scoreboard = document.querySelector(".scoreboard");
var randomQuestion, currentQuestionIndex;
var timer;
var timerCount = 30;
var penaltyTime = 5;
var score = [];
var highScore = [];



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

//removes starter html
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
//provides next question if correct and questions remain, adds a point to your score
  } else if (correct && randomQuestion.length > currentQuestionIndex + 1){
    currentQuestionIndex++
    score ++
    userScore.textContent = score;
    nextQuestion()
//adds a point to your score upon correct answer as well as remainder of time when quiz is finished. 
  } else {
    score ++
    userScore.textContent = score + timerCount;
    timesUp()
  }
}
//changes status of elements depending on user answers
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

//announces the end of the game when time runs out
function timesUp() {
  timerElement.classList.add('hide');
  questionContainer.classList.add('hide');
  saveButton.classList.remove('hide');
  restartButton.classList.remove('hide')
}

// starts function to save game score
saveButton.addEventListener('click', savePrompt)

function savePrompt(){
  let player = prompt("Enter initials to save your score!");
  if (player != null) { 
    highScore.push (" "+ player +" - " + userScore.textContent + "")
    scoreboard.textContent = highScore
  }

}

//restarts the quiz
restartButton.addEventListener('click', restart)

function restart(){
  timerCount = 30
  score = []
  timerElement.classList.remove('hide');
  saveButton.classList.add('hide');
  restartButton.classList.add('hide');
  clearInterval(timer);
  startGame()
}


//questions used in the quiz
var quizQuestions =[
  {
    question: "What does CSS stand for?",
    answers:[
      {text: "Cinematic Style Support", correct: false},
      {text: "Corrupted System Selector", correct: false},
      {text: "Cascading Style Sheets", correct: true},
      {text: "Computer System Sanction", correct: false}
    ]
  },

  {
    question: "What does HTML stand for?",
    answers:[
      {text: "Higher Talent Module Learner", correct: false},
      {text: "Hyper Text Markup Language", correct: true},
      {text: "Horizon Text Marker Length", correct: false},
      {text: "History Table Memory Leak", correct: false}
    ]
  },

  {
    question: "What does JS stand for?",
    answers:[
      {text: "JuiceStaple", correct: false},
      {text: "JunkStop", correct: false},
      {text: "JerrySeinfeld", correct: false},
      {text: "JavaScript", correct: true}
    ]
  },

  {
    question: "What does RGB coloring stand for?",
    answers:[
      {text: "red green blue", correct: true},
      {text: "Ruth Ginsberg Baby", correct: false},
      {text: "royal glowing black", correct: false},
      {text: "rich gray background", correct: false}
    ]
  }

];

