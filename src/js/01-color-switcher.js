let timeoutId = null;
let isButtonStartActive = true;
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');

start.addEventListener('click', onStartChangeBodyColor);
stop.addEventListener('click', onStopChangeBodyColor);

stop.setAttribute('disabled', '');

function onStartChangeBodyColor() {
  if (isButtonStartActive) {
    timeoutId = setInterval(ChangeColor, 1000);
    isButtonStartActive = false;
    start.setAttribute('disabled', '');
    stop.removeAttribute('disabled');
  }
}

function onStopChangeBodyColor() {
  clearInterval(timeoutId);
  isButtonStartActive = true;
  start.removeAttribute('disabled');
  stop.setAttribute('disabled', '');
}

function ChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  console.log('chage color');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
