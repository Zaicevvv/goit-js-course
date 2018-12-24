'use strict';

// level 1

/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// console.group('Task');
// user.mood = 'happy';
// user.hobby = 'javascript';
// delete user.premium;
// console.log(user);
// console.groupEnd('Task');

// console.group('Task');
// for (const element in user) {
//   console.log(element + ':', user[element]);
// }
// console.groupEnd('Task');

// console.group('Task');
// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(key + ':', user[key]);
// }
// console.groupEnd('Task');

// console.group('Task');
// const entries = Object.entries(user);
// for (const entry of entries) {
//   console.log(entry[0] + ':', entry[1]);
// }
// console.groupEnd('Task');

// level 2

/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };

// let mostComletedTasks;
// for (const name in tasksCompleted) {
//   mostComletedTasks = name;
//   if (name > mostComletedTasks) {
//     mostComletedTasks = name;
//   }
// }
// console.log(mostComletedTasks);

// level 3

/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// const countProps = obj => Object.entries(obj).length;

// // Вызовы функции для проверки
// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 3, c: 'hello' })); // 3

// level 4

/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// const isObjectEmpty = obj => Object.entries(obj).length === 0;

// // Вызовы функции для проверки
// console.log(isObjectEmpty({})); // true

// console.log(isObjectEmpty({ a: 1 })); // false

// console.log(isObjectEmpty({ a: 1, b: 2 })); // false

// level 5

/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

// const countTotalSalary = salaries => {
//   const values = Object.values(salaries);
//   let total = 0;
//   for (const value of values) {
//     total += value;
//   }
//   return total;
// };
// // Вызовы функции для проверки
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// level 6

/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

const users = [
  { name: 'Poly', age: 7, mood: 'happy' },
  { name: 'Mango', age: 4, mood: 'blissful' },
  { name: 'Ajax', age: 3, mood: 'tired' },
];

const getAllPropValues = (arr, prop) => {
  const propValues = [];
  for (const element of arr) {
    if (element[prop]) propValues.push(element[prop]);
  }
  return propValues;
};

// Вызовы функции для проверки
console.log(getAllPropValues(users, 'name')); // ['Poly', 'Mango', 'Ajax']

console.log(getAllPropValues(users, 'mood')); // ['happy', 'blissful', 'tired']

console.log(getAllPropValues(users, 'active')); // []
