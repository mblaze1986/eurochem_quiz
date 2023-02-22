const allFrontSwitches = document.querySelectorAll('.switch-front');

allFrontSwitches.forEach((frontSwitch) => {
  frontSwitch.addEventListener('click', (event) => {
    document.nextSection();
  });
});

const allBackSwitches = document.querySelectorAll('.switch-back');

allBackSwitches.forEach((backSwitch) => {
  backSwitch.addEventListener('click', (event) => {
    document.prevSection();
  });
});
