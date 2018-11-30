'use strict';
const adminLogin = 'admin';
const adminPassword = 'm4ng0h4ckz';
const cansel = 'Отменено пользователем!';
const wrongLogin = 'Доступ запрещен, неверный логин!';
const wrongPassword = 'Доступ запрещен, неверный пароль!';
const welcome = 'Добро пожаловать!';
const inputLogin = prompt('Введите логин');
let inputPassword;
if (!inputLogin) {
  alert(cansel);
} else if (inputLogin !== adminLogin) {
  alert(wrongLogin);
} else {
  inputPassword = prompt('Введите пароль');
  if (!inputPassword) {
    alert(cansel);
  } else if (inputPassword !== adminPassword) {
    alert(wrongPassword);
  } else {
    alert(welcome);
  }
}
