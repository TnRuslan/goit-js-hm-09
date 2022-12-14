import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { convertMs } from './convers-time';

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const btnStart = document.querySelector('button[data-start]');

btnStart.setAttribute('disabled', '');

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    btnStart.removeAttribute('disabled');
    btnStart.addEventListener('click', onStartTimer);

    let setTime = selectedDates[0].getTime();

    function onStartTimer() {
      btnStart.setAttribute('disabled', '');
      const timerId = setInterval(() => {
        let { days, hours, minutes, seconds } = convertMs(setTime - Date.now());

        addTextContent(days, hours, minutes, seconds);

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timerId);
        }
      }, 1000);
    }
  },
});

function addTextContent(days, hours, minutes, seconds) {
  daysEl.textContent = String(days).padStart(2, '0');
  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');
}
