'use strict';

// level 1
/*
 * Ознакомься с содержанием панелей HTML и CSS.
 *
 * Напиши скрипт который сохраняет выбранную пользователем
 * тему в localStorage и, при следующих посещениях страницы,
 * устанавливает ее автоматически. По умолчанию пусть будет светлая тема.
 *
 * При выборе темы, добавляй на элемент body соответствующий класс.
 */

// const body = document.body;
// const lightBtn = document.querySelector('[data-theme="light"]');
// const darkBtn = document.querySelector('[data-theme="dark"]');

// body.classList.add(localStorage.getItem('value'));

// const handleLightClick = () => {
//   body.classList.remove(localStorage.getItem('value'));
//   localStorage.setItem('value', 'theme-light');
//   body.classList.add(localStorage.getItem('value'));
// };

// const handleDarkClick = () => {
//   body.classList.remove(localStorage.getItem('value'));
//   localStorage.setItem('value', 'theme-dark');
//   body.classList.add(localStorage.getItem('value'));
// };

// lightBtn.addEventListener('click', handleLightClick);
// darkBtn.addEventListener('click', handleDarkClick);

// level 2
/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop.
 *
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 *
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
 */

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

const timer = {
  timerRun: false,
  time: null,
  randomNum() {
    return Math.floor(Math.random() * 6);
  },

  handleStartBtnClick() {
    if (this.timerRun) return;
    this.timerRun = true;

    this.time = setInterval(() => {
      document.body.style.backgroundColor = colors[this.randomNum()];
    }, 1000);
  },

  handleStopBtnClick() {
    this.timerRun = false;

    clearInterval(this.time);
  },
};

refs.startBtn.addEventListener('click', timer.handleStartBtnClick.bind(timer));
refs.stopBtn.addEventListener('click', timer.handleStopBtnClick.bind(timer));
