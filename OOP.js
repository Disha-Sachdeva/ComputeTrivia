const questions = [
  {
    question: "What's the main goal of object-oriented programming (OOP)?",
    answer: "Organizing code into objects for reusability and maintainability."
  },
  {
    question: "What's inheritance in C++, and how does it aid code reuse?",
    answer: "Inheritance allows classes to inherit properties and behaviors, aiding code reuse by creating class hierarchies."
  },
  {
    question: "Define polymorphism in C++.",
    answer: "Polymorphism enables objects of different classes to be treated as objects of a common superclass, allowing flexible behavior."
  },
  {
    question: "Why are access specifiers important in C++ classes?",
    answer: "They control the visibility of class members: public for external access, private for internal, and protected for inheritance."
  },
  {
    question: "What does encapsulation mean in C++?",
    answer: "Encapsulation bundles data and methods within a class, hiding internal details for data integrity and security."
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
