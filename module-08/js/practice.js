'use strict';

// level 1
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
// const animals = document.querySelector('.categories').firstElementChild;

// const categorie = animals.childNodes[0].textContent;
// console.log('Категория:', categorie);

// const number = animals.firstElementChild.children.length;
// console.log('Количество вложенных li:', number);

// level 2
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
// const list = document.querySelector('.list');

// const firstChild = list.firstElementChild;
// console.log(firstChild);

// const lastChild = list.lastElementChild;
// console.log(lastChild);

// firstChild.classList.add('color-red');
// lastChild.classList.add('color-blue');

// level 3
/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// const list = document.querySelector('.list');

// for (let i = 0; i < elements.length; i += 1) {
//   const listItem = document.createElement('li');

//   listItem.textContent = elements[i];
//   list.appendChild(listItem);
// }

// level 4
/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const galleryItems = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Two Brown Hen and One Red Rooster',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Macaw Birds',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: '2 Lion on Grass Field during Daytime',
//   },
// ];

// const list = document.querySelector('.gallery');

// const createListItem = ({ url, alt }) => {
//   const listItem = document.createElement('li');
//   const listItemImg = document.createElement('img');

//   listItemImg.setAttribute('url', url);
//   listItemImg.setAttribute('alt', alt);
//   listItem.appendChild(listItemImg);

//   return listItem;
// };

// const listItems = galleryItems.map(item => createListItem(item));
// list.append(...listItems);

// level 5
/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

// const inputs = document.querySelectorAll('.size-filter input[checked]');

// const collectInputData = inputs =>
//   inputs.forEach(input => console.log(input.getAttribute('value')));

// collectInputData(inputs);

// level 6
/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

// const div = document.querySelector('.movie');

// const button = document.createElement('button');
// button.classList.add('button');
// button.textContent = 'rate movie';
// div.appendChild(button);

// const rateButton = {
//   button: 'rate movie',
// };

// const movieCard = {
//   image: 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
//   imageDesc: 'movie image',
//   title: 'The Godfather',
//   description:
//     'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
//   date: 'Released: 1972-03-14',
//   rating: 'Rating: 8.6',
// };

// const createMovieCard = ({
//   image,
//   imageDesc,
//   title,
//   description,
//   date,
//   rating,
// }) => {
//   const card = document.createElement('div');
//   card.classList = 'movie';

//   const cardImg = document.createElement('img');
//   cardImg.classList = 'movie__image';
//   cardImg.setAttribute('src', image);
//   cardImg.setAttribute('alt', imageDesc);

//   const cardBody = document.createElement('div');
//   cardBody.classList = 'movie__body';

//   const cardTitle = document.createElement('h2');
//   cardTitle.classList = 'movie__title';
//   cardTitle.textContent = title;

//   const cardDescription = document.createElement('p');
//   cardDescription.classList = 'movie__description';
//   cardDescription.textContent = description;

//   const cardDate = document.createElement('p');
//   cardDate.classList = 'movie__date';
//   cardDate.textContent = date;

//   const cardRating = document.createElement('p');
//   cardRating.classList = 'movie__rating';
//   cardRating.textContent = rating;

//   const cardButton = document.createElement('button');
//   cardButton.classList = 'button';
//   cardButton.textContent = rateButton.button;

//   cardBody.append(cardTitle, cardDescription, cardDate, cardRating);
//   card.append(cardImg, cardBody, cardButton);

//   return card;
// };

// const body = document.querySelector('body');

// body.appendChild(createMovieCard(movieCard));

// level 7
/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(number), которая принимает 1 параметр number - число.
  
  Функция создает столько div, сколько указано в number и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

const num = 5;

const rootDiv = document.querySelector('#root');

const createBoxes = number => {
  const boxes = [];
  let size = '30px';
};

createBoxes(num);

const color = [];
for (let i = 0; i < 3; i += 1) {
  const value = Math.floor(Math.random() * 255);
  color.push(value);

  // return color;
}
console.log(color[0], ',', color[1], ',', color[2]);
