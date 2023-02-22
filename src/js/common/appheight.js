const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--app-height', `${window.innerHeight}px`);
};
window.addEventListener('resize', appHeight);
appHeight();

// ----------------
const modal = document.querySelector('.modal');

if (window.innerHeight < innerWidth || window.innerWidth > 540) {
  modal.classList.add('active');
}

window.onresize = () => {
  if (window.innerHeight < innerWidth || window.innerWidth > 540) {
    modal.classList.add('active');
  } else {
    modal.classList.remove('active');
  }
};
