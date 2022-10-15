import { Notify } from 'notiflix/build/notiflix-notify-aio';

// import throttle from 'lodash.throttle';
// Напиши скрипт, который при сабмите формы вызывает функцию
// createPromise(position, delay) столько раз, сколько ввели в поле amount.
// При каждом вызове передай ей номер создаваемого промиса(position) и
// задержку учитывая введенную пользователем первую задержку(delay) и шаг(step).
const refs = {
  firstDelay: document.querySelector('input[name="delay"]'),
  delayStep: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  submit: document.querySelector('.form'),
};

const onSubmitForm = event => {
  event.preventDefault();
  const firstDelay = refs.firstDelay.value;
  const delayStep = refs.delayStep.value;
  const amount = refs.amount.value;
  let delay = +firstDelay;

  for (let position = 1; position <= +amount; position += 1) {
    // let position = i;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += +delayStep;
  }
};
refs.submit.addEventListener('submit', onSubmitForm);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
