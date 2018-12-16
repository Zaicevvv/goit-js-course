'use strict';

// let userInput;
// const numbers = [];
// let total = 0;

// do {
//   userInput = prompt('Введите число');
//   numbers.push(userInput);
// } while (userInput !== null);

// for (const number of numbers) {
//   total += Number(number);
// }

// console.log('Общая сумма чисел равна', total);

// Дополнительное

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let n = 0;
let userInput;

do {
  userInput = prompt('Введите пароль!');
  attempts -= 1;
  if (!userInput) break;
  if (attempts === 0) {
    alert('У вас закончились попытки, аккаунт заблокирован!');
    break;
  }
  if (passwords.includes(userInput)) {
    alert('Добро пожаловать!');
    break;
  } else {
    alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
  }
} while (attempts !== 0);
