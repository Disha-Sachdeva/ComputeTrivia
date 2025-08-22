const questions = [
  {
    question: "What does the volatile keyword do in C? ",
    answer: " It indicates that a variable's value can change unexpectedly, often due to external factors like hardware interrupts."
  },
  {
    question: "In C, what is the purpose of the 'sizeof' operator?",
    answer: "It returns the size in bytes of a data type or variable."
  },
  {
    question: "What does the 'static' keyword do when applied to a variable in C?",
    answer: "It retains the variable's value between function calls and initializes it only once at program startup."
  },
  {
    question: "What is the purpose of the 'typedef' keyword in C?",
    answer: "It creates new data type names, allowing programmers to define aliases for existing data types."
  },
  {
    question: "What is the difference between '++i' and 'i++' in C?",
    answer: " '++i' increments 'i' and returns the incremented value, while 'i++' returns the current value of 'i' and then increments it."
  }

];

let currentQuestion = 0;

const flipButton = document.getElementById('flip-button');
const nextButton = document.getElementById('next-button');
const backButton = document.getElementById('back');
const questionDiv = document.getElementById('question');
const answerDiv = document.getElementById('answer');
const flashcard = document.getElementById('flashcard');

function showQuestion() {
  flashcard.classList.remove('flipped');
  questionDiv.textContent = questions[currentQuestion].question;
  answerDiv.textContent = questions[currentQuestion].answer;
}

flipButton.addEventListener('click', function() {
  flashcard.classList.toggle('flipped');
});

nextButton.addEventListener('click', function() {
  currentQuestion = (currentQuestion + 1) % questions.length;
  showQuestion();
});

backButton.addEventListener('click', function() {
  currentQuestion = (currentQuestion - 1 + questions.length) % questions.length;
  showQuestion();
});

// Setup flashcard faces
showQuestion();
