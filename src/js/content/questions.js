const allQuestions = document.querySelectorAll('.question');

allQuestions.forEach((question) => {
  question.classList.add('hidden');
  allQuestions[0].classList.remove('hidden');
  allQuestions[0].classList.add('active');
});

// --------------------

const backQuestion = document.querySelector('.questions__back');

backQuestion.addEventListener('click', (event) => {
  let activeQuestion = document.querySelector('.question.active');

  document.prevQuestion();

  if (activeQuestion.previousElementSibling === null) {
    document.prevSection();
  }
});

// --------------------

const noButton = document.querySelector('.questions__no');

noButton.addEventListener('click', (event) => {
  let activeQuestion = document.querySelector('.question.active');

  document.nextQuestion();
  document.leftedQuestion();

  if (activeQuestion.nextElementSibling === null) {
    activeQuestion.classList.add('hidden');
    activeQuestion.classList.remove('active');
    activeQuestion.classList.add('lefted');
    document.questionsOver()
  }
});

// --------------------

const yesButton = document.querySelector('.questions__yes');

yesButton.addEventListener('click', (event) => {
  let activeQuestion = document.querySelector('.question.active');

  document.nextQuestion();
  document.rightedQuestion();

  if (activeQuestion.nextElementSibling === null) {
    activeQuestion.classList.add('hidden');
    activeQuestion.classList.remove('active');
    activeQuestion.classList.add('righted');
    document.questionsOver()
  }
});