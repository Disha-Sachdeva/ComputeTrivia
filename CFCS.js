const questions = [
  {
    question: "What is the primary function of a CPU in a computer system? ",
    answer: " The CPU (Central Processing Unit) executes instructions, performs calculations, and manages data movement within the computer."
  },
  {
    question: "Which hardware component is responsible for storing permanent data on a computer system?",
    answer: "The hard disk drive (HDD) or solid-state drive (SSD) is responsible for storing permanent data on a computer system."
  },
  {
    question: " In Microsoft Excel, what function would you use to find the highest value in a range of cells?",
    answer: "The MAX function is used to find the highest value in a range of cells in Microsoft Excel."
  },
  {
    question: "What is the purpose of the ribbon in Microsoft Word?",
    answer: "The ribbon contains all the tools necessary for formatting text, inserting objects, and performing various other tasks within the application."
  },
  {
    question: "Which software program would you use to create a professional presentation with slides, animations, and multimedia elements?",
    answer: " Microsoft PowerPoint is commonly used to create professional presentations with slides, animations, and multimedia elements."
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
