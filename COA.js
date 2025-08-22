const questions = [
  {
    question: "What's the primary function of the ALU in a computer's CPU?",
    answer: "The ALU (Arithmetic Logic Unit) performs arithmetic and logical operations on data."
  },
  {
    question: "What's the purpose of the CPU cache in computer architecture?",
    answer: "The CPU cache stores frequently accessed data and instructions, reducing the time it takes for the CPU to access them from main memory."
  },
  {
    question: "Explain the role of the control unit in a computer's CPU.",
    answer: "The control unit directs the flow of data and instructions within the CPU, coordinating the execution of instructions and managing the operation of other hardware components."
  },
  {
    question: "What's the difference between RISC and CISC architectures?",
    answer: "RISC (Reduced Instruction Set Computing) architectures use a smaller set of simple instructions, while CISC (Complex Instruction Set Computing) architectures use a larger set of complex instructions."
  },
  {
    question: "What's the purpose of the memory hierarchy in computer organization?",
    answer: "The memory hierarchy manages data storage at different levels of speed and capacity, optimizing performance by providing faster access to frequently used data."
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
