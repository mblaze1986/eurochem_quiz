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

  if (activeQuestion.previousElementSibling) {
    activeQuestion.classList.add('hidden');
    activeQuestion.classList.remove('active');
    activeQuestion.previousElementSibling.classList.add('active');
    activeQuestion.previousElementSibling.classList.remove('hidden');
  }

  if (activeQuestion.previousElementSibling === null) {
    let activeSection = document.querySelector('section.active');

    activeSection.classList.remove('active');
    activeSection.classList.add('hidden');
    activeSection.previousElementSibling.classList.remove('hidden');
    activeSection.previousElementSibling.classList.add('active');
  }
});

// --------------------

const noButton = document.querySelector('.questions__no');

noButton.addEventListener('click', (event) => {
  let activeQuestion = document.querySelector('.question.active');

  if (activeQuestion.nextElementSibling) {
    activeQuestion.classList.add('hidden');
    activeQuestion.classList.remove('active');
    activeQuestion.nextElementSibling.classList.add('active');
    activeQuestion.nextElementSibling.classList.remove('hidden');
  }
});

// --------------------

const yesButton = document.querySelector('.questions__yes');

yesButton.addEventListener('click', (event) => {
  let activeQuestion = document.querySelector('.question.active');

  if (activeQuestion.nextElementSibling) {
    activeQuestion.classList.add('hidden');
    activeQuestion.classList.remove('active');
    activeQuestion.nextElementSibling.classList.add('active');
    activeQuestion.nextElementSibling.classList.remove('hidden');
  }
});
