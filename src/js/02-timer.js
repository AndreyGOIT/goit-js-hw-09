// commonjs
const flatpickr = require('flatpickr');
// es modules are recommended, if available, especially for typescript
// import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('input'),
  btn: document.querySelector('button'),
  block: document.querySelector('timer'),
  data: document.querySelectorAll('.value'),
  labels: document.querySelectorAll('.label'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.input.style.borderColor = 'blue';
refs.btn.style.background = 'lightblue';

// Вторым аргументом функции flatpickr(selector, options) можно передать
// необязательный объект параметров.
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.parse(selectedDates[0]) <= Date.now()) {
      // window.alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    refs.btn.removeAttribute('disabled');
  },
};
const fp = new flatpickr(refs.input, options); // flatpickr
// Для подсчета значений используй готовую функцию convertMs, где ms - разница
// между конечной и текущей датой в миллисекундах.
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
let timerID = null;

function updateTimer() {
  const delta = Date.parse(fp.selectedDates[0]) - Date.now();
  console.log(delta);
  let rest = delta;

  timerID = setInterval(() => {
    if (rest >= 0) {
      const { days, hours, minutes, seconds } = convertMs(rest);
      refs.days.textContent = addLeadingZeros(days, 2);
      refs.hours.textContent = addLeadingZeros(hours, 2);
      refs.minutes.textContent = addLeadingZeros(minutes, 2);
      refs.seconds.textContent = addLeadingZeros(seconds, 2);
      rest -= 1000;
    } else {
      clearInterval(timerID);
      console.log('Time out!');
    }
  }, 1000);
}
refs.btn.addEventListener('click', () => {
  console.log('Таймер обратного отсчета запущен');
  updateTimer();
});

// Напиши функцию addLeadingZero(value), которая использует метод метод padStart()
// и перед отрисовкой интерфейса форматируй значение.
function addLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, '0');
}
