const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--app-height', `${window.innerHeight}px`);
};
window.addEventListener('resize', appHeight);
appHeight();

// ----------------
const modal = document.querySelector('.modal');

if (window.innerHeight < window.innerWidth) {
  modal.classList.add('active');
} else {
  modal.classList.remove('active');
}

window.onresize = () => {
  if (window.innerHeight < window.innerWidth) {
    modal.classList.add('active');
  } else {
    modal.classList.remove('active');
  }
};
