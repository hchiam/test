setTimeout(() => {
  showHint();
}, 3000);

function showHint() {
  document.getElementById('hint').style.visibility = 'visible';
}

function hideHint() {
  document.getElementById('hint').style.visibility = 'hidden';
}

function surprise() {
  document.getElementById('learning-link').style.visibility = 'visible';
  alert('Hi!');
  hideHint();
}
