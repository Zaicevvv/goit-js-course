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

// const num = animals.firstElementChild.children.length;
// console.log('Количество вложенных li:', num);

// level 2
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
const list = document.querySelector('.list');

const firstChild = list.firstElementChild;
console.log(firstChild);

const lastChild = list.lastElementChild;
console.log(lastChild);

firstChild.classList.add('color-red');
lastChild.classList.add('color-blue');

// level 3
