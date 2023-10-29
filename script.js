let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    correct_answer: 3,
  },
  {
    question: "Wer ist das Oberhaupt der katholischen Kirche?",
    answer_1: "Das Kardinalskollegium",
    answer_2: "Die Illuminati",
    answer_3: "Der römische Kaiser",
    answer_4: "Der Papst",
    correct_answer: 4,
  },
  {
    question: "Was beendete der Westfälische Frieden 1648?",
    answer_1: "Die Bauernaufstände",
    answer_2: "Den 30 jährigen Krieg",
    answer_3: "Die Reformation",
    answer_4: "Die Besetzung des Saarlandes",
    correct_answer: 2,
  },
  {
    question: "Wie deklariert man in C die Hauptfunktion?",
    answer_1: "int main() {}",
    answer_2: "function main() {}",
    answer_3: "def main() {}",
    answer_4: "main() {}",
    correct_answer: 1,
  },
  {
    question: "Was versteht man unter einem Parameter?",
    answer_1: "Eine Variable die nur innerhalb einer Funktion gilt",
    answer_2: "Den Namen einen Funktion",
    answer_3: "Den Rückgabewert einer Funktion",
    answer_4: "Einen Übergabewert an eine Funktion",
    correct_answer: 4,
  },
];

let currentQuestion = 0;
let score = 0;
let quizLocked = false;

function init() {
  showGame();
}

function showGame() {
  document.getElementById("question-card").innerHTML = showGamePage();
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("question").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
  document.getElementById("question-number").innerHTML = currentQuestion + 1;
  document.getElementById("question-total").innerHTML = questions.length;
}

function answer(answer_number) {
  let correctAnswer = questions[currentQuestion]["correct_answer"];
  if (!quizLocked) {
    quizLocked = true;
    document.getElementById("next-question-btn").disabled = false;
    if (answer_number === correctAnswer) {
      score++;
      document
        .getElementById("answer_" + answer_number)
        .parentNode.classList.add("bg-success");
    } else {
      document
        .getElementById("answer_" + answer_number)
        .parentNode.classList.add("bg-danger");
      document
        .getElementById("answer_" + correctAnswer)
        .parentNode.classList.add("bg-success");
    }
  }
}

function nextQuestion() {
  quizLocked = false;
  document.getElementById("next-question-btn").disabled = true;
  removeLastAnswer();
  currentQuestion++;
  showNextQuestion();
}

function showNextQuestion() {
  if (currentQuestion < questions.length) {
    showQuestion();
    if (currentQuestion == questions.length - 1) {
      document.getElementById("next-question-btn").innerHTML = "Endergebnis";
    }
  } else {
    showScore();
  }
}

function removeLastAnswer() {
  for (let i = 1; i <= 4; i++) {
    document
      .getElementById("answer_" + i)
      .parentNode.classList.remove("bg-danger", "bg-success");
  }
}

function showScore() {
  document.getElementById("question-card").innerHTML = showScorePage(score);
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  showGame();
}
