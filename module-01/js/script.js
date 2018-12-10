'use strict';
// const adminLogin = 'admin';
// const adminPassword = 'm4ng0h4ckz';
// const cansel = 'Отменено пользователем!';
// const wrongLogin = 'Доступ запрещен, неверный логин!';
// const wrongPassword = 'Доступ запрещен, неверный пароль!';
// const welcome = 'Добро пожаловать!';
// const inputLogin = prompt('Введите логин');
// let inputPassword;
// if (!inputLogin) {
//   alert(cansel);
// } else if (inputLogin !== adminLogin) {
//   alert(wrongLogin);
// } else {
//   inputPassword = prompt('Введите пароль');
//   if (!inputPassword) {
//     alert(cansel);
//   } else if (inputPassword !== adminPassword) {
//     alert(wrongPassword);
//   } else {
//     alert(welcome);
//   }
// }

// Дополнительное задание

const sharm = 15;
const hurgada = 25;
const taba = 6;
let max = Math.max(sharm, hurgada, taba);
const userInput = prompt('Введите число необходимых мест');
const cansel = 'Нам очень жаль, приходите еще!';
let userConfirm;
if (!userInput) {
  alert(cansel);
}
if (userInput % 1 === 0 && userInput > 0) {
  if (userInput <= sharm) {
    userConfirm = confirm('Есть места в группе Sharm, хотите присоединиться?');
    if (userConfirm === true) {
      alert('Приятного путешествия в группе Sharm');
    } else {
      alert(cansel);
    }
  }
  if (userInput <= hurgada && userConfirm === false) {
    userConfirm = confirm(
      'Есть места в группе Hurgada, хотите присоединиться?',
    );
    if (userConfirm === true) {
      alert('Приятного путешествия в группе Hurgada');
    } else {
      alert(cansel);
    }
  }
  if (userInput <= taba && userConfirm === false) {
    userConfirm = confirm('Есть места в группе Taba, хотите присоединиться?');
    if (userConfirm === true) {
      alert('Приятного путешествия в группе Taba');
    } else {
      alert(cansel);
    }
  } else if (userInput > max) {
    alert('Извините, столько мест нет ни в одной группе!');
  }
} else {
  alert('Ошибка ввода!');
}
