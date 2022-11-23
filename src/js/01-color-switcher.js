let timeoutId = null;
let isButtonStartActive = true;
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');

start.addEventListener('click', onStartChangeBodyColor);
stop.addEventListener('click', onStopChangeBodyColor);

function onStartChangeBodyColor() {
  if (isButtonStartActive) {
    timeoutId = setInterval(ChangeColor, 1000);
    isButtonStartActive = false;
  }
}

function onStopChangeBodyColor() {
  clearInterval(timeoutId);
  isButtonStartActive = true;
}

function ChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  console.log('chage color');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
