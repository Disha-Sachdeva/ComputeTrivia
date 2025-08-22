const questions = [
  {
    question: "What is the role of an operating system (OS) in a computer?",
    answer: "The OS manages hardware resources, provides a user interface, and facilitates communication between software and hardware."
  },
  {
    question: "Explain the difference between multitasking and multiprocessing in an operating system.",
    answer: "Multitasking allows multiple tasks to run concurrently on a single processor, while multiprocessing utilizes multiple processors to execute tasks simultaneously."
  },
  {
    question: "What is virtual memory, and how does it benefit computer systems?",
    answer: "Virtual memory extends physical RAM by using disk space as temporary storage, allowing for efficient memory management and multitasking."
  },
  {
    question: "Define a file system in the context of an operating system.",
    answer: "A file system organizes and manages data on storage devices, providing methods for file storage, retrieval, and organization."
  },
  {
    question: "What is the purpose of device drivers in an operating system?",
    answer: "Device drivers enable communication between the operating system and hardware devices, allowing the OS to control and utilize peripheral devices such as printers and graphics cards."
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
