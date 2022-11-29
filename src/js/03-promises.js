import Notiflix from 'notiflix';

const form = document.querySelector('.form');

const formValue = {};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  createFormValue(event);

  createMessageFromPromise(formValue.step, formValue.amount, formValue.delay);
}

function createMessageFromPromise(step, amount, delay) {
  let position = 0;
  let delayBeforePromise = delay;

  setTimeout(() => {
    const intervalId = setInterval(() => {
      if (position === Number(amount)) {
        clearInterval(intervalId);
        return;
      }

      createPromise(position, delayBeforePromise)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });

      position += 1;
      delayBeforePromise += step;
    }, step);
  }, delay);
}

function createFormValue(event) {
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    formValue[name] = Number(value);
  });
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve({ position, delay });
    }

    reject({ position, delay });
  });
}
