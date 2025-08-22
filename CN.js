const questions = [
  {
    question: "What's the role of an IP address in computer networks?",
    answer: "An IP address uniquely identifies devices on a network, enabling communication and routing of data packets."
  },
  {
    question: "Explain the difference between TCP and UDP.",
    answer: "TCP provides reliable, ordered data transmission, while UDP offers faster but unreliable transmission without guaranteed delivery."
  },
  {
    question: "What's the purpose of a router in a network?",
    answer: "A router forwards data packets between different networks, directing traffic based on IP addresses."
  },
  {
    question: "Define DNS in computer networks.",
    answer: "DNS (Domain Name System) translates domain names to IP addresses, facilitating human-readable web addresses."
  },
  {
    question: "Explain the concept of subnetting.",
    answer: "Subnetting divides a network into smaller, manageable sub-networks, improving efficiency and security."
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
