const form = document.querySelector('.form');

const formValue = {};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  createFormValue(event);
  createPromise(1, formValue.delay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  console.log(createPromise(1, formValue.step));
}

function createFormValue(event) {
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    formValue[name] = value;
  });
  console.log(formValue);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setInterval(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }

      reject({ position, delay });
    }, delay);
  });
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
