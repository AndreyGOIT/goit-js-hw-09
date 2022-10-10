import Notiflix from 'notiflix';
// Напиши скрипт, который при сабмите формы вызывает функцию
// createPromise(position, delay) столько раз, сколько ввели в поле amount.
// При каждом вызове передай ей номер создаваемого промиса(position) и
// задержку учитывая введенную пользователем первую задержку(delay) и шаг(step).
const refs = {
  inputs: document.querySelectorAll('input'),
  submit: document.querySelector('button'),
};

// const STORAGE_KEY = 'input-values';
// let formData = localStorage.getItem(STORAGE_KEY)
//   ? JSON.parse(localStorage.getItem(STORAGE_KEY))
//   : {};

// const settings = {
//   firstDelay: refs.inputs[0].value,
//   delayStep: 'refs.inputs[1].value',
//   amount: 'refs.inputs[2].value',
// };
// console.log(refs.inputs[0]);
// localStorage.setItem('settings', JSON.stringify(settings));

// refs.inputs[0].addEventListener('input', onTextInput());

// function onTextInput(event) {
//   // console.log((formData[event.target.name] = event.target.value));
//   formData[event.target.name] = event.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }
// let delay = firstDelay;
// function onClickSubmit() {
//   console.log('Нажата кнопка Create promises');
//   for (let i = 1; i <= amount; i++) {
//     const position = i;
//     console.log(`Position value is ${position}`);
//     createPromise(position, delay);
//     delay += delayStep;
//     console.log(`Delay value is ${delay}`);
//   }
// }

refs.submit.addEventListener('submit', onSubmitForm());

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   } else {
//     // Reject
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   }
// }
// Дополни код функции createPromise так, чтобы она возвращала один промис,
// который выполянется или отклоняется через delay времени.Значением промиса
// должен быть объект, в котором будут свойства position и delay со значениями
// одноименных параметров.Используй начальный код функции для выбора того,
// что нужно сделать с промисом - выполнить или отклонить.
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

function onSubmitForm(evt) {
  evt.preventDefault();
  let delay = Number(evt.target.delay.value);
  let amount = Number(evt.target.amount.value);
  let step = Number(evt.target.step.value);

  for (let position = 1; position <= amount; position += 1) {
    setTimeout(() => {
      createPromise(position, delay)
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
    }, delay);
    delay += step;
    formats.reset();
  }
}
