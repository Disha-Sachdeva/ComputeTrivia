const questions = [
  {
    question: "What's the significance of a primary key in a database?",
    answer: "A primary key uniquely identifies each record, ensuring data integrity and efficient retrieval."
  },
  {
    question: "Differentiate between a database index and a view.",
    answer: "An index speeds up data retrieval, while a view simplifies complex queries by creating a virtual table."
  },
  {
    question: "Define normalization in database design.",
    answer: "Normalization minimizes redundancy and dependency in data, ensuring integrity and reducing anomalies."
  },
  {
    question: "What's the purpose of a foreign key in a relational database?",
    answer: "A foreign key establishes relationships between tables, enforcing referential integrity and maintaining consistency."
  },
  {
    question: "Explain the ACID properties in database transactions.",
    answer: "ACID (Atomicity, Consistency, Isolation, Durability) ensures transactions are complete, maintain data integrity, operate independently, and are permanent even after system failure."
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
