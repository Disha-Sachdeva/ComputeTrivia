const questions = [
  {
    question: "What's the purpose of PHP in web development?",
    answer: "PHP is a server-side scripting language used to create dynamic web pages and interact with databases."
  },
  {
    question: "How does PHP differ from HTML?",
    answer: "PHP is a programming language used for server-side processing, while HTML is a markup language for structuring web content."
  },
  {
    question: "What does the term 'superglobals' refer to in PHP?",
    answer: "Superglobals are built-in PHP variables that are accessible across all scopes of a script, containing information such as form data and server details."
  },
  {
    question: "Explain the difference between == and === operators in PHP.",
    answer: "The == operator checks for equality without considering data types, while the === operator checks for equality including data types."
  },
  {
    question: "What does the term 'session' refer to in PHP?",
    answer: "A session in PHP is a way to store information across multiple pages or visits by a user, facilitating stateful communication between the server and client."
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
