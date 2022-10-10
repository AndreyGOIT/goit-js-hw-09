// Task 1: Напиши скрипт, который после нажатия кнопки «Start», раз в секунду
// меняет цвет фона < body > на случайное значение используя инлайн стиль.
// При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.
const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};
console.log(refs.body);
console.log(refs.start);
console.log(refs.stop);
let timerId = null;

refs.start.addEventListener('click', () => {
  refs.start.setAttribute('disabled', 'disabled');
  timerId = setInterval(() => {
    console.log('изменение цвета фона');
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

refs.stop.addEventListener('click', () => {
  refs.start.removeAttribute('disabled');
  clearInterval(timerId);
  console.log(`Процесс изменения цвета фона остановлен`);
});

// Для генерации случайного цвета используй функцию getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
