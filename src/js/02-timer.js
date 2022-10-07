// commonjs
const flatpickr = require('flatpickr');
// es modules are recommended, if available, especially for typescript
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('input'),
  btn: document.querySelector('button'),
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
    console.log(selectedDates[0]);
    console.log(Date.parse(selectedDates[0]));
    if (Date.parse(selectedDates[0]) <= Date.now()) {
      window.alert('Please choose a date in the future');
      return;
    }
    refs.btn.removeAttribute('disabled');
    const delta = Date.parse(selectedDates[0]) - Date.now();
    console.log(delta);
  },
};
const fp = flatpickr(refs.input, options); // flatpickr
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
function updateTimer() {
  setInterval(() => {
    // const currentTime = options.defaultDate;
    // console.log(currentTime);
    // // const targetTime = selectedDates[0];
    // const delta = targetTime - currentTime;
    console.log(delta);
    const { days, hours, minutes, seconds } = convertMs(delta);
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
  }, 1000);
}
refs.btn.addEventListener('click', () => {
  console.log('Таймер обратного отсчета запущен');
  updateTimer();
});
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
