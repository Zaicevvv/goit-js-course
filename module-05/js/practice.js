'use strict';

// level 1
/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, необходимо передать 
  как аргументы при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/

// const User = function User(
//   name = 'user',
//   isActive = 'false',
//   age = 0,
//   friends = 0,
// ) {
//   this.name = name;
//   this.isActive = isActive;
//   this.age = age;
//   this.friends = friends;

//   this.getUserInfo = function() {
//     console.log(
//       `User ${name} is ${age} years old, activity status ${isActive} and has ${friends} friends`,
//     );
//   };
// };

// const user = new User();
// user.getUserInfo();

// const vova = new User('Vova', true, 27, 10);
// vova.getUserInfo();

// const mary = new User('Mary', true, 26, 100);
// mary.getUserInfo();

// level 2
/*  
  Расставьте отсутствующие this в методах объекта store
*/

// const store = {
//   products: ['bread', 'cheese', 'milk', 'apples'],
//   managers: ['poly', 'mango', 'ajax'],
//   addManager(manager) {
//     this.managers.push(manager);

//     console.log(this.managers);
//   },
//   removeManager(manager) {
//     const idx = this.managers.indexOf(manager);

//     this.managers.splice(idx, 1);

//     console.log(this.managers);
//   },
//   getProducts() {
//     console.log(this.products);

//     return this.products;
//   },
// };

// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

// store.removeManager('mango'); // ['poly', ajax', 'chelsey']

// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

// level 3
/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

function Account(login, password, type = 'regular') {
  this.login = login;
  this.password = password;
  this.type = type;

  this.changePassword = function(newPassword) {
    this.password = newPassword;

    console.log(this.password);
  };

  this.getAccountInfo = function() {
    console.log(
      `Login: ${this.login}, Pass: ${this.password}, Type: ${this.type}`,
    );
  };
}

const account = new Account('Mango', 'qwe123', 'premium');

console.log(account.login); // 'Mango'
console.log(account.password); // 'qwe123'
console.log(account.type); // 'premium'

account.changePassword('asdzxc'); // 'asdzxc'

account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
