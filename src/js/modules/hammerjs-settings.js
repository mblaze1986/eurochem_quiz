const allQuestions = document.querySelectorAll('.question');

allQuestions.forEach((question) => {
  let mc = new Hammer(question);

  mc.on('swipeleft', function (ev) {
    let activeQuestion = document.querySelector('.question.active');

    document.nextQuestion();
    document.leftedQuestion();

    if (activeQuestion.nextElementSibling === null) {
      activeQuestion.classList.add('hidden');
      activeQuestion.classList.remove('active');
      activeQuestion.classList.add('lefted');
      document.questionsOver()
    }

    document.questionsCount();
  });

  mc.on('swiperight', function (ev) {
    let activeQuestion = document.querySelector('.question.active');

    document.nextQuestion();
    document.rightedQuestion();

    if (activeQuestion.nextElementSibling === null) {
      activeQuestion.classList.add('hidden');
      activeQuestion.classList.remove('active');
      activeQuestion.classList.add('righted');
      document.questionsOver()
    }

    document.questionsCount();
  });
});
