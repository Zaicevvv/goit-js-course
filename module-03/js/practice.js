'use strict';
// function buildLaser() {
//   const message = 'Laser Built';
//   console.log(message);
// }

// function buildMoonBase() {
//   const message = 'Moon Base Built';
//   buildLaser();
//   console.log(message);
// }

// function ransomTheWorld() {
//   const message = "Give us moneys u puny hoomans or else it's lazer time!";
//   buildMoonBase();
//   console.log(message);
// }

// ransomTheWorld();

// level 1

/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// const checkNumberType = function(num) {
//   if (num % 2 === 0) {
//     num = 'Even';
//   } else {
//     num = 'Odd';
//   }
//   return num;
// };
// // Вызовы функции для проверки
// console.log(checkNumberType(2)); // 'Even'

// console.log(checkNumberType(46)); // 'Even'

// console.log(checkNumberType(3)); // 'Odd'

// console.log(checkNumberType(17)); // 'Odd'

// level 2

/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

// const formatString = function(str) {
//   if (str.length < 40) {
//     return str;
//   } else {
//     str = str.slice(0, 40);
//     return str + '...';
//   }
// };

// // Вызовы функции для проверки
// console.log(formatString('Curabitur ligula sapien, tincidunt non.')); // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.')); // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.')); // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// ); // вернется форматированная строка

// level 3

/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// function checkForSpam(str) {
//   if (
//     str.includes('spam') ||
//     str.includes('sale') ||
//     str.includes('SPAM') ||
//     str.includes('SALE')
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Вызовы функции для проверки
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// level 4

/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

// function getPx(str) {
//   if (typeof str === 'string') {
//     str = Number.parseFloat(str);
//     return str;
//   } else {
//     return null;
//   }
// }

// // Вызовы функции для проверки
// console.log(getPx('10px') === 10); // должно быть:  true
// console.log(getPx('10.5') === 10.5); // должно быть:  true
// console.log(getPx('0') === 0); // должно быть:  true
// console.log(getPx(-1)); // должно быть:  null
// console.log(getPx(10)); // должно быть:  null

// level 5

/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/

// const findLongestWord = str => {
//   const arr = str.split(' ');
//   let longestWord = arr[0];
//   for (const element of arr) {
//     if (element.length > longestWord.length) {
//       longestWord = element;
//     }
//   }
//   return longestWord;
// };

// // Вызовы функции для проверки
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // вернет 'jumped'

// console.log(findLongestWord('Google do a roll')); // вернет 'Google'

// console.log(findLongestWord('May the force be with you')); // вернет 'force'

// level 6

/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

// const findLargestNumber = numbers => {
//   let largestNumber = numbers[0];
//   for (const number of numbers)
//     if (number > largestNumber) largestNumber = number;
//   return largestNumber;
// };

// // Вызовы функции для проверки
// console.log(findLargestNumber([1, 2, 3])); // вернет 3

// console.log(findLargestNumber([27, 12, 18, 5])); // вернет 27

// console.log(findLargestNumber([31, 128, 14, 74])); // вернет 128

// level 7

/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers = [2, 1, 4, 9];

// const addUniqueNumbers = (...numbers) => {
//   for (const number of numbers)
//     if (!uniqueNumbers.includes(number)) uniqueNumbers.push(number);
// };

// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(uniqueNumbers); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19, 5, 8]

// level 8

/*
  Создайте функцию removeFromArray(arr), 
  которая объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Удалите все элементы из исходного массива, 
  которые имеют такое же значение, что и аргументы.
*/

const removeFromArray = (arr, ...values) => {
  // console.log(arr);
  // console.log(values);
  for (let i = 0; i < arr.length; i += 1) {
    if (values.includes(arr[i])) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

// Вызовы функции для проверки
console.log(removeFromArray([1, 2, 3, 4, 5], 2, 4)); // [1, 3, 5]

console.log(removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)); // [12, 8, 17]
