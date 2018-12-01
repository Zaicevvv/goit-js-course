'use strict';
// const adminLogin = 'admin';
// const adminPassword = 'password';
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
const cansel = 'Нам очень жаль, приходите еще!';
let userInput = prompt('Введите число необходимых мест');
let userConfirm;
if (!userInput) {
  alert(cansel);
} else {
  userInput = Number(userInput);
  if (userInput % 1 === 0 && userInput > 0) {
    if (userInput <= sharm) {
      userConfirm = confirm(
        'Есть места в группе Sharm, хотите присоединиться?',
      );
      if (userConfirm === true) {
        alert('Приятного путешествия в группе Sharm');
      } else {
        alert(cansel);
      }
    }
    if (userInput <= hurgada) {
      userConfirm = confirm(
        'Есть места в группе Hurgada, хотите присоединиться?',
      );
      if (userConfirm === true) {
        alert('Приятного путешествия в группе Hurgada');
      } else {
        alert(cansel);
      }
    }
    if (userInput <= taba) {
      userConfirm = confirm('Есть места в группе Taba, хотите присоединиться?');
      if (userConfirm === true) {
        alert('Приятного путешествия в группе Taba');
      } else {
        alert(cansel);
      }
    }
    if (userInput > 25) {
      alert('Извините, столько мест нет ни в одной группе!');
    }
  } else {
    alert('Ошибка ввода!');
  }
}
