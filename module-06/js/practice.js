'use strict';

// level 1

/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

// const Account = function Account(login, email, friendsCount) {
//   this.login = login;
//   this.email = email;
//   this.friendsCount = friendsCount;

//   Account.prototype.getAccountInfo = function() {
//     console.log('Login:', this.login);
//     console.log('Email:', this.email);
//     console.log('Count of friends:', this.friendsCount);
//   };
// };

// const mango = new Account('Mango', 'mango@email.xx', 10);
// const poly = new Account('Poly', 'poly@email.xx', 20);
// const ajax = new Account('Ajax', 'ajax@email.xx', 30);

// mango.getAccountInfo();
// poly.getAccountInfo();
// ajax.getAccountInfo();

// ES6

// class Account {
//   constructor(login, email, friendsCount) {
//     this._login = login;
//     this._email = email;
//     this._friendsCount = friendsCount;
//   }

//   getAccountInfo() {
//     console.log('Login:', this._login);
//     console.log('Email:', this._email);
//     console.log('Count of friends:', this._friendsCount);
//   }
// }

// const mango = new Account('Mango', 'mango@email.xx', 10);
// const poly = new Account('Poly', 'poly@email.xx', 20);
// const ajax = new Account('Ajax', 'ajax@email.xx', 30);

// mango.getAccountInfo();
// poly.getAccountInfo();
// ajax.getAccountInfo();

// level 2

/*
  Напишите ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в поле value.
  
  Добавьте классу следующие методы:
  
    - getValue() - выводит в консоль текущее значение поля value
  
    - append(str) - получает парметр str - строку и добавляет 
      ее в конец значения поля value
    
    - prepend(str) - получает парметр str - строку и добавляет 
      ее в начало значения поля value
  
    - pad(str) - получает парметр str - строку и добавляет 
      ее в начало и в конец значения поля value
*/

// class StringBuilder {
//   constructor(str) {
//     this.value = str;
//   }

//   showValue() {
//     console.log(this.value);
//   }

//   append(str) {
//     this.value = this.value + str;
//   }

//   prepend(str) {
//     this.value = str + this.value;
//   }

//   pad(str) {
//     this.value = str + this.value + str;
//   }
// }

// const stringBuilder = new StringBuilder('.');

// stringBuilder.append('^');
// stringBuilder.showValue(); // '.^'

// stringBuilder.prepend('^');
// stringBuilder.showValue(); // '^.^'

// stringBuilder.pad('=');
// stringBuilder.showValue(); // '=^.^='

// level 3

/*
  Создайте класс Car с указанными полями и методами.
*/

// class Car {
//   constructor(maxSpeed) {
//     /*
//         Добавьте свойства:
//           - speed - для отслеживания текущей скорости, изначально 0.

//           - maxSpeed - для хранения максимальной скорости

//           - running - для отслеживания заведен ли автомобиль,
//             возможные значения true или false. Изначально false.

//           - distance - содержит общий киллометраж, изначально с 0
//       */
//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this.running = false;
//     this.distance = 0;
//   }

//   turnOn() {
//     // Добавьте код для того чтобы завести автомобиль
//     // Просто записывает в свойство running значание true
//     this.running = true;
//   }

//   turnOff() {
//     // Добавьте код для того чтобы заглушить автомобиль
//     // Просто записывает в свойство running значание false
//     this.running = false;
//   }

//   accelerate(spd) {
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed
//     if (spd > this.maxSpeed)
//       return console.log('Вы пытаетесь ехать больше максимальной скорости');

//     this.speed += spd;
//   }

//   decelerate(spd) {
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     if (spd > this.maxSpeed || spd < 0) return;

//     this.speed -= spd;
//   }

//   drive(hours) {
//     // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//     // но только в том случае если машина заведена!
//     if (!this.running) return console.log('Машина не заведена');

//     this.distance = hours * this.speed;
//   }
// }

// const car = new Car(300);

// car.turnOn();
// console.log('Машина заведена:', car.running);

// car.accelerate(100);
// console.log(car.speed);

// car.decelerate(50);
// console.log(car.speed);

// car.drive(5);
// console.log(car.distance);

// car.turnOff();
// console.log('Машина заведена:', car.running);

// level 4

/*
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.
  
  Использование будет выглядеть следующим образом:
  
  const someCar = new Car(100);
  someCar.turnOn();
  someCar.drive(2);
  
  Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
*/

// class Car {
//   constructor(maxSpeed) {
//     /*
//         Добавьте свойства:
//           - speed - для отслеживания текущей скорости, изначально 0.

//           - maxSpeed - для хранения максимальной скорости

//           - running - для отслеживания заведен ли автомобиль,
//             возможные значения true или false. Изначально false.

//           - distance - содержит общий киллометраж, изначально с 0
//       */
//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this.running = false;
//     this.distance = 0;
//   }

//   turnOn() {
//     // Добавьте код для того чтобы завести автомобиль
//     // Просто записывает в свойство running значание true
//     this.running = true;
//   }

//   turnOff() {
//     // Добавьте код для того чтобы заглушить автомобиль
//     // Просто записывает в свойство running значание false
//     this.running = false;
//   }

//   accelerate(spd) {
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed
//     if (spd > this.maxSpeed)
//       return console.log('Вы пытаетесь ехать больше максимальной скорости');

//     this.speed += spd;
//   }

//   decelerate(spd) {
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     if (spd > this.maxSpeed || spd < 0) return;

//     this.speed -= spd;
//   }

//   drive(hours) {
//     // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//     // но только в том случае если машина заведена!
//     if (!this.running) return console.log('Машина не заведена');

//     this.distance = hours * this.speed;
//   }

//   static getSpecs(someCar) {
//     console.log('maxSpeed:', someCar.maxSpeed);
//     console.log('running:', someCar.running);
//     console.log('distance:', someCar.distance);
//   }
// }

// const someCar = new Car(100);
// someCar.turnOn();
// someCar.accelerate(100);
// someCar.drive(2);

// Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200

// level 5

/*
  Добавьте классу Car свойство value - цена автомобиля.
  
  Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
  Геттер вернет текущее значение поля this._value
  Сеттер запишет в поле this._value то что ему присвоят
  
  PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
    не this.value а this._value
    
  Использование выглядит следующим образом:
  
  const myCar = new Car(50, 2000);
  
  myCar.value; // 2000
  myCar.value = 4000;
  myCar.value; // 4000
*/

class Car {
  constructor(maxSpeed, value) {
    // ... код
    this.maxSpeed = maxSpeed;
    this._value = value;
  }
  // ... код
  get value() {
    console.log(this._value);
  }

  set value(value) {
    this._value = value;
  }
}

const myCar = new Car(50, 2000);

myCar.value; // 2000
myCar.value = 4000;
myCar.value; // 4000
