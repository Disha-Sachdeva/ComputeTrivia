const questions = [
  {
    question: 'What is the purpose of "Option Strict" in VB.NET?',
    answer: '"Option Strict" enforces explicit data type conversions, reducing errors and enhancing code clarity.'
  },
  {
    question: "How does VB.NET handle exceptions, and what is its main keyword for exception handling?",
    answer: 'VB.NET uses structured exception handling with the "Try...Catch" block to handle runtime errors efficiently.'
  },
  {
    question: 'Explain the difference between "ByVal" and "ByRef" parameters in VB.NET.',
    answer: '"ByVal" passes parameters by value, while "ByRef" passes parameters by reference, allowing modifications to the original value.'
  },
  {
    question: "What is a namespace in VB.NET, and why is it used?",
    answer: "A namespace organizes code into logical groups, preventing naming conflicts and enhancing code maintainability."
  },
  {
    question: 'Describe the role of "Handles" in event handling in VB.NET.',
    answer: '"Handles" associates an event procedure with a specific event, allowing code to respond to user actions or system events.'
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
