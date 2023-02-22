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
    activeQuestion.previousElementSibling.classList.remove('hidden');
    activeQuestion.previousElementSibling.classList.remove('lefted');
    activeQuestion.previousElementSibling.classList.remove('righted');
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
