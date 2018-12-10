'use strict';

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt('Введите число');
  numbers.push(userInput);
} while (userInput !== null);

for (const number of numbers) {
  total += Number(number);
}

console.log('Общая сумма чисел равна', total);
