const allFrontSwitches = document.querySelectorAll('.switch-front');

allFrontSwitches.forEach((frontSwitch) => {
  frontSwitch.addEventListener('click', (event) => {
    let activeSection = document.querySelector('section.active');

    activeSection.classList.remove('active');
    activeSection.classList.add('hidden');
    activeSection.nextElementSibling.classList.remove('hidden');
    activeSection.nextElementSibling.classList.add('active');
  });
});

const allBackSwitches = document.querySelectorAll('.switch-back');

allBackSwitches.forEach((backSwitch) => {
  backSwitch.addEventListener('click', (event) => {
    let activeSection = document.querySelector('section.active');

    activeSection.classList.remove('active');
    activeSection.classList.add('hidden');
    activeSection.previousElementSibling.classList.remove('hidden');
    activeSection.previousElementSibling.classList.add('active');
  });
});