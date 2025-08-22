const questions = [
  {
      question: 'What data structure is commonly used to implement a LIFO (Last In, First Out) structure?',
      answer: 'Stack'
  },
  {
      question: 'What sorting algorithm works by repeatedly swapping adjacent elements if they are in the wrong order?',
      answer: 'Bubble Sort'
  },
  {
      question: 'Which data structure supports operations like push, pop, and peek, and follows the principle of "First In, First Out"?',
      answer: 'Queue'
  },
  {
      question: 'What is the worst-case time complexity for searching in a binary search tree?',
      answer: 'O(n), where n is the number of nodes in the tree, if the tree is unbalanced. O(log n) if the tree is balanced.'
  },
  {
      question: 'In graph theory, what does BFS stand for, and what type of data structure is typically used to implement it?',
      answer: 'BFS stands for Breadth-First Search. It is typically implemented using a queue data structure.'
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
