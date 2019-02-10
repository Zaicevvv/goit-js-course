'use strict';

// level 1
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
// const refs = {
//   button: document.querySelector('.button'),
// };

// let count = 0;

// const hendleClick = e => {
//   count += 1;
//   refs.button.textContent = count;
// };

// refs.button.addEventListener('click', hendleClick);

// level 2
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/
// const refs = {
//   result: document.querySelector('.result'),
//   inputs: document.querySelectorAll('input'),
//   button: document.querySelector('.container button[data-action="add"]'),
// };

// let value = 0;

// const hendleInput = e => {
//   value += Number(e.target.value);
//   console.log(e.target.value);
// };

// const hendleButton = e => {
//   refs.result.textContent = value;
// };

// refs.inputs[0].addEventListener('change', hendleInput);
// refs.inputs[1].addEventListener('change', hendleInput);
// refs.button.addEventListener('click', hendleButton);

// level 3
/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/
// const refs = {
//   sub: document.querySelector('.btn[data-action="sub"]'),
//   add: document.querySelector('.btn[data-action="add"]'),
//   value: document.querySelector('.value'),
// };

// let value = 0;

// const hendleClickSub = e => {
//   refs.value.textContent = value -= 1;
// };

// const hendleClickAdd = e => {
//   refs.value.textContent = value += 1;
// };

// refs.sub.addEventListener('click', hendleClickSub);
// refs.add.addEventListener('click', hendleClickAdd);

// level 4
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/
// const refs = {
//   check: document.querySelector('.options'),
//   submit: document.querySelector('.question-form'),
//   result: document.querySelector('.result'),
// };

// let target = '';

// const hendleSubmit = e => {
//   e.preventDefault();

//   refs.result.textContent = 'Result: ' + target;
// };

// const hendleChange = e => {
//   target = e.target.value;
// };

// refs.submit.addEventListener('submit', hendleSubmit);
// refs.check.addEventListener('change', hendleChange);

// level 5
/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/
// const refs = {
//   images: document.querySelector('.images'),
// };

// const hendleClick = e => {
//   alert(e.target.src);
// };

// refs.images.addEventListener('click', hendleClick);

// level 6
/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/
// const refs = {
//   list: document.querySelector('.list'),
// };

// const remove = el => {
//   const listItem = el.parentNode;

//   listItem.remove();
// };

// const hendleButton = e => {
//   remove(e.target);
// };

// refs.list.addEventListener('click', hendleButton);

// level 7
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/
// const refs = {
//   list: document.querySelector('.input-list'),
// };

// let value = 0;
// let inputLength = 0;

// const inputCheck = (value, el) => {
//   if (inputLength !== value) {
//     el.classList.add('invalid');
//     el.classList.remove('valid');

//     return;
//   }

//   el.classList.add('valid');
//   el.classList.remove('invalid');
// };

// const hendleFocusout = e => {
//   value = Number(e.target.getAttribute('data-length'));
//   inputLength = e.target.value.length;

//   inputCheck(value, e.target);
// };

// refs.list.addEventListener('focusout', hendleFocusout);

// level 8
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/
// const refs = {
//   message: document.querySelector('.message'),
//   input: document.querySelector('.input'),
//   value: document.querySelector('.input-value'),
// };

// const hendleFocus = e => {
//   refs.message.textContent = 'Input is in focus!';
// };

// const hendleInput = e => {
//   refs.value.textContent = e.target.value;
// };

// const hendleFocusout = e => {
//   refs.message.textContent = '';
//   refs.value.textContent = 'Current input value:';
// };

// refs.input.addEventListener('focus', hendleFocus);
// refs.input.addEventListener('input', hendleInput);
// refs.input.addEventListener('focusout', hendleFocusout);

// level 9
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/
// const refs = {
//   openModalBtn: document.querySelector('button[data-action="open-modal"]'),
//   closeModalBtn: document.querySelector(
//     '.close-btn[data-action="close-modal"]',
//   ),
//   modal: document.querySelector('.js-modal-backdrop'),
// };

// const openModal = () => {
//   refs.modal.classList.remove('modal-hidden');
// };

// const closeModal = () => {
//   refs.modal.classList.add('modal-hidden');
// };

// const hendleOpenModalBtnClick = e => {
//   openModal();
// };

// const hendleCloseModalBtnClick = e => {
//   closeModal();
// };

// const hendleCloseModalBackdropClick = e => {
//   if (e.target !== e.currentTarget) return;

//   closeModal();
// };

// const hendleEscapeKeyPress = e => {
//   if (e.code !== 'Escape') return;

//   closeModal();
// };

// refs.openModalBtn.addEventListener('click', hendleOpenModalBtnClick);
// refs.closeModalBtn.addEventListener('click', hendleCloseModalBtnClick);
// refs.modal.addEventListener('click', hendleCloseModalBackdropClick);
// window.addEventListener('keydown', hendleEscapeKeyPress);

// level 10
/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/
// const refs = {
//   menu: document.querySelector('.js-menu'),
// };

// const setActiveLink = nextActiveLink => {
//   const currentActiveLink = refs.menu.querySelector('a.active');

//   if (currentActiveLink) currentActiveLink.classList.remove('active');

//   nextActiveLink.classList.add('active');
// };

// const hendleMenuItemClick = e => {
//   e.preventDefault();

//   const target = event.target;

//   if (target.nodeName !== 'A') return;

//   setActiveLink(target);
// };

// refs.menu.addEventListener('click', hendleMenuItemClick);

