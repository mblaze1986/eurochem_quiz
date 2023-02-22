let rangeInputs = document.querySelectorAll('.range-button__input');

rangeInputs.forEach((rangeInput) => {
  let startVal = rangeInput.value;
  const rangeProgress = rangeInput.nextElementSibling;

  rangeProgress.style.width = (startVal / rangeInput.max) * 100 + '%';

  rangeInput.oninput = function () {
    rangeProgress.style.width = (this.value / rangeInput.max) * 100 + '%';
  };

  rangeInput.addEventListener('change', (event) => {
    if (rangeInput.value < 30) {
      rangeInput.value = 0;
      rangeProgress.style.width = 0;
    } else {
      setTimeout(() => {
        rangeInput.value = 0;
        rangeProgress.style.width = 0;
      }, 1000);
      document.nextSection();
    }
  });
});
