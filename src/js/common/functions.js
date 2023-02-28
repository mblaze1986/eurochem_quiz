document.nextSection = () => {
  let activeSection = document.querySelector('section.active');

  activeSection.classList.remove('active');
  activeSection.classList.add('hidden');
  activeSection.nextElementSibling.classList.remove('hidden');
  activeSection.nextElementSibling.classList.add('active');
};

document.prevSection = () => {
  let activeSection = document.querySelector('section.active');

  activeSection.classList.remove('active');
  activeSection.classList.add('hidden');
  activeSection.previousElementSibling.classList.remove('hidden');
  activeSection.previousElementSibling.classList.add('active');
};

document.nextQuestion = () => {
  let activeQuestion = document.querySelector('.question.active');

  if (activeQuestion.nextElementSibling) {
    activeQuestion.classList.add('hidden');
    activeQuestion.classList.remove('active');
    activeQuestion.nextElementSibling.classList.add('active');
    activeQuestion.nextElementSibling.classList.remove('hidden');
  }
};

document.prevQuestion = () => {
  let activeQuestion = document.querySelector('.question.active');

  if (activeQuestion.previousElementSibling) {
    activeQuestion.classList.add('hidden');
    activeQuestion.classList.remove('active');
    activeQuestion.previousElementSibling.classList.add('active');
    activeQuestion.previousElementSibling.classList.remove('hidden', 'lefted', 'righted');
  }
};

document.leftedQuestion = () => {
  let activeQuestion = document.querySelector('.question.active');

  if (!activeQuestion.previousElementSibling.classList.contains('righted')) {
    activeQuestion.previousElementSibling.classList.add('lefted');
  }
};

document.rightedQuestion = () => {
  let activeQuestion = document.querySelector('.question.active');

  if (!activeQuestion.previousElementSibling.classList.contains('lefted')) {
    activeQuestion.previousElementSibling.classList.add('righted');
  }
};

document.questionsOver = () => {
  const questionsSection = document.querySelector('section.questions');
  questionsSection.classList.remove('active');
  questionsSection.classList.add('hidden');
  questionsSection.nextElementSibling.classList.remove('hidden');
  questionsSection.nextElementSibling.classList.add('active');
};

document.questionsBack = () => {
  const allQuestions = document.querySelectorAll('.question');

  document.prevSection();

  allQuestions[allQuestions.length - 1].classList.add('active');
  allQuestions[allQuestions.length - 1].classList.remove('hidden', 'lefted', 'righted');

  let letftedQuestions = document.querySelectorAll('.question.lefted');
  let rightedQuestions = document.querySelectorAll('.question.righted');

  const bar = document.querySelector('.questions__bar');

  if (letftedQuestions || rightedQuestions) {
    bar.style.width = ((letftedQuestions.length + rightedQuestions.length) / allQuestions.length) * 100 + '%';
  }
};

document.questionsCount = () => {
  const allQuestions = document.querySelectorAll('.question');
  let letftedQuestions = document.querySelectorAll('.question.lefted');
  let rightedQuestions = document.querySelectorAll('.question.righted');

  const bar = document.querySelector('.questions__bar');

  if (letftedQuestions || rightedQuestions) {
    bar.style.width = ((letftedQuestions.length + rightedQuestions.length) / allQuestions.length) * 100 + '%';

    letftedQuestions.forEach((letftedQuestion) => {
      letftedQuestion.setAttribute('bal', 0);
    });

    rightedQuestions.forEach((rightedQuestion) => {
      rightedQuestion.setAttribute('bal', 5);
    });
  }
};
