const questions = [
  {
    question: "What's the main difference between HTTP and HTTPS?",
    answer: "HTTPS encrypts data for secure transmission, while HTTP doesn't."
  },
  {
    question: "What's AJAX in web programming and its purpose?",
    answer: "AJAX allows asynchronous communication between client and server, updating content without reloading the entire page."
  },
  {
    question: " Explain responsive web design's importance.",
    answer: "It ensures web pages adapt to different devices and screen sizes, enhancing user experience and SEO."
  },
  {
    question: "What does a CDN do and how does it improve website performance?",
    answer: "CDNs (Content Delivery Networks) deliver web content from servers closer to users, reducing latency and improving page load times."
  },
  {
    question: "What do CSS preprocessors like Sass or Less do?",
    answer: "They extend CSS with features like variables and mixins for easier styling."
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
