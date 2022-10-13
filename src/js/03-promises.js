import Notiflix from 'notiflix';
// import throttle from 'lodash.throttle';
// Напиши скрипт, который при сабмите формы вызывает функцию
// createPromise(position, delay) столько раз, сколько ввели в поле amount.
// При каждом вызове передай ей номер создаваемого промиса(position) и
// задержку учитывая введенную пользователем первую задержку(delay) и шаг(step).
const refs = {
  firstDelay: document.querySelector('input[name="delay"]'),
  delayStep: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  submit: document.querySelector('button'),
};

const firstDelay = refs.firstDelay.value;
const delayStep = refs.delayStep.value;
const amount = refs.amount.value;
let delay = firstDelay;

const onSubmitForm = () => {
  for (let i = 1; i <= amount; i += 1) {
    let position = i;
    createPromise();
    createPromise(2, 1500)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += delayStep;
  }
};
refs.submit.addEventListener('submit', onSubmitForm);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve('Success! Value passed to resolve function');
      } else {
        reject('Error! Error passed to reject function');
      }
    }, 2000);
  });
  return promise;
}
// refs.inputs[0].addEventListener('input', throttle(onTextInput, 500));
// refs.inputs[1].addEventListener('input', throttle(onTextInput, 500));
// refs.inputs[2].addEventListener('input', throttle(onTextInput, 500));

// populateTextarea();

// function onTextInput(event) {
//   // console.log((formData[event.target.name] = event.target.value));
//   formData[event.target.name] = event.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// 2. При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные
// данные, заполняй ими поля формы.В противном случае поля должны быть пустыми.
// function populateTextarea() {
//   const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   console.log(savedMessage);
//   if (savedMessage) {
//     refs.inputs[0].value = savedMessage.delay || '';
//     refs.inputs[1].value = savedMessage.step || '';
//     refs.inputs[2].value = savedMessage.amount || '';
//   }
// }

// 3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с
// полями delay, step, amount  и текущими их значениями в консоль.
// function onFormSubmit(event) {
//   console.log('сработала функция onFormSubmit');
//   event.preventDefault();

//   if (refs.inputs[0].value && refs.inputs[1].value && refs.inputs[2].value) {
//     console.log('Отправляем форму');
//     event.currentTarget.reset();
//     console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
//     localStorage.removeItem(STORAGE_KEY);
//     formData = {};
//   }
// }

// function createPromise(position, delay) {
//   const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   let actualDelay = savedMessage.delay;
//   console.log(actualDelay);
//   console.log(savedMessage.amount);
//   for (
//     let position = 1;
//     position <= Number(savedMessage.amount);
//     position += 1
//   ) {
//     const promis = new Promise((resolve, reject) => {
//       const shouldResolve = Math.random() > 0.3;
//       setTimeout(() => {
//         if (shouldResolve) {
//           // Fulfill
//           console.log('создаем промис успешено');
//           Notiflix.Notify.success(
//             `✅ Fulfilled promise ${position} in ${actualDelay}ms`
//           );
//         } else {
//           // Reject
//           console.log('создаем промис неуспешно');
//           Notiflix.Notify.failure(
//             `❌ Rejected promise ${position} in ${actualDelay}ms`
//           );
//         }
//       }, actualDelay);
//       actualDelay += Number(savedMessage.step);
//     });
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
