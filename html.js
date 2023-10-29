function showGamePage() {
  return /*html*/ `
      <h5 id="question" class="card-title text-center">Frage</h5>
      <div class="card mb-2">
        <div id="answer_1" class="card-body quiz-answer" onclick="answer(1)">
          Antwort 1
        </div>
      </div>
      <div class="card mb-2">
        <div id="answer_2" class="card-body quiz-answer" onclick="answer(2)">
          Antwort 2
        </div>
      </div>
      <div class="card mb-2">
        <div id="answer_3" class="card-body quiz-answer" onclick="answer(3)">
          Antwort 3
        </div>
      </div>
      <div class="card mb-2">
        <div id="answer_4" class="card-body quiz-answer" onclick="answer(4)">
          Antwort 4
        </div>
      </div>
      <div class="question-footer">
        <span id="question-counter" class="question-footer-counter">
        Frage <b id="question-number"></b> von <b id="question-total"></b>
        </span>
        <button id="next-question-btn" onclick="nextQuestion()" disabled class="btn btn-primary">Nächste Frage</button>
      </div>`;
}

function showScorePage(score) {
  return /*html*/ `
    <div class="text-center end-screen width-100">
      <img src="./img/brain result.png" alt="">
      <h5 class="">COMPLETE HTML QUIZ</h5>
      <div>
        <span class="score-text">YOUR SCORE</span>
        <span class="score"><b>${score}/${questions.length}</b></span>
      </div>
      <button class="btn" onclick="resetQuiz()">REPLAY</button>
    </div>
  `;
}
