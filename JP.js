const questions = [
  {
    question: 'Explain the purpose of the "extends" keyword in Java.',
    answer: ' "extends" is used to create a subclass, inheriting properties and methods from a superclass.'
  },
  {
    question: "What's the significance of the 'final' keyword in Java?",
    answer: "'final' makes a variable, method, or class immutable or unextendable."
  },
  {
    question: "What is the purpose of the 'static' keyword in Java?",
    answer: "'static' is used to create class-level variables and methods, shared across all instances."
  },
  {
    question: "Explain the difference between == and .equals() in Java.",
    answer: "== compares object references, while .equals() compares object contents."
  },
  {
    question: "What does the 'this' keyword refer to in Java?",
    answer: "'this' refers to the current object instance."
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
