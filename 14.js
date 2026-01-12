///////////////////////////////////////////////////////////////// Задание 1:///////////////////////////////////////////////////////////////
// Создание элементов через JS
// 1. Создай <div> и добавь ему класс "card"
// 2. Внутрь div добавь текст: "Это динамически созданный блок"
// 3. Добавь этот div в body

// const htmlElement = document.createElement("div");
// htmlElement.classList.add("card");
// htmlElement.textContent = "Это динамически созданный блок";
// document.body.appendChild(htmlElement);


// ///////////////////////////////////////////////////////////////// Задание 2:///////////////////////////////////////////////////////////////
// //    Изменение стилей элемента
// //    1. Найди созданный .card
// //    2. Задай ему стили:
// //         - padding: 20px
// //         - background: #f0f0f0
// //         - border-radius: 10px
// //         - margin-bottom: 20px

// const myElement = document.querySelector(".card");

// myElement.style.padding = '20px';
// myElement.style.background = '#f0f0f0';
// myElement.style.borderRadius = '8px';
// myElement.style.marginBottom = '20px';


///////////////////////////////////////////////////////////////// Задание 3:///////////////////////////////////////////////////////////////
//    Работа с атрибутами
//    1. Создай <img>
//    2. Задай src любому изображению (может быть любой URL)
//    3. Задай alt = "Картинка"
//    4. Добавь картинку под card

// const imgElement = document.createElement("img");
// imgElement.src = "";
// imgElement.alt = "Картинка";
// const card = document.querySelector('.card');
// card.after(imgElement);


///////////////////////////////////////////////////////////////// Задание 4:///////////////////////////////////////////////////////////////
//    Добавление нескольких элементов из массива
//    1. Создай массив строк: ["Пункт 1", "Пункт 2", "Пункт 3"]
//    2. Создай <ul>
//    3. Для каждого элемента массива создай <li> и добавь текст
//    4. Добавь ul в body

// const point = ["Пункт 1", "Пункт 2", "Пункт 3"];
// const ulElement = document.createElement("ul");

// point.forEach((itemText) => {
//     const liElement = document.createElement("li"); 
//     liElement.textContent = itemText;              
//     ulElement.appendChild(liElement);       
// });

// document.body.appendChild(ulElement);


///////////////////////////////////////////////////////////////// Задание 5:///////////////////////////////////////////////////////////////
//    Навигация по DOM
//    1. Найди <ul>
//    2. Выведи в консоль:
//         - первый li
//         - последний li
//         - всех детей ul одной строчкой

// const ul = document.querySelector('ul');

// console.log('Первый li:', ul.firstElementChild);
// console.log('Последний li:', ul.lastElementChild);
// console.log('Все дети:', ul.children);


///////////////////////////////////////////////////////////////// Задание 6:///////////////////////////////////////////////////////////////
//    Обработчики событий
//    1. Добавь кнопке (создай заранее <button> "Нажми меня") обработчик click
//    2. При клике меняй цвет фона card на случайный цвет

// const buttonElement = document.createElement("button");
// buttonElement.textContent = "Нажми меня";
// document.body.appendChild(buttonElement);

// const card = document.querySelector('.card');

// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// buttonElement.addEventListener('click', () => {
//     const newColor = getRandomColor();
//     card.style.backgroundColor = newColor;
//     console.log(newColor);
// });


///////////////////////////////////////////////////////////////// Задание 7:///////////////////////////////////////////////////////////////
// Удаление элементов
// 1. Добавь каждому li кнопку "Удалить" (создавай при добавлении)
// 2. При клике на "Удалить" — удалить соответствующий li

// const li = document.createElement("li");
// li.textContent = "Новая задача ";

// const deleteBtn = document.createElement("button");
// deleteBtn.textContent = "Удалить";

// deleteBtn.addEventListener('click', () => {
//     li.remove();
// });

// li.appendChild(deleteBtn);


///////////////////////////////////////////////////////////////// Задание 8:///////////////////////////////////////////////////////////////
// dataset
// 1. Каждому li добавь data-id с уникальным номером
// 2. Выведи data-id при клике на li в консоль

// const myUl = document.querySelector("ul");
// const allLis = myUl.querySelectorAll("li");

// allLis.forEach((li, index) => {
//   li.dataset.id = index + 1;

//   li.addEventListener("click", function() {
//     console.log("data-id элемента:", this.dataset.id);
//   });
// });


///////////////////////////////////////////////////////////////// Задание 9:///////////////////////////////////////////////////////////////
// Создание модального окна (простая версия)
// 1. Реализуй модальное окно с помощью JS.
// 2. Как оно выглядит можно посмотреть в интернете, выбрать понравившуюся реализацию и постараться реализовать функционал открытия 
// и закрытия модального окна. Без ИИ и без копипаста с интернета.

// const modal = document.querySelector(".modal");
// const buttonOpen = document.querySelector(".buttonOpen");
// const buttonClose = document.querySelector(".buttonClose");

// buttonOpen.addEventListener('click', function() {
//     modal.classList.add("open")
// });

// buttonClose.addEventListener('click', function() {
//     modal.classList.remove("open")
// });


///////////////////////////////////////////////////////////////// Задание 10:///////////////////////////////////////////////////////////////
//    Прокрутка и координаты
//    1. Создай блок 3000px высотой
//    2. Повесь обработчик scroll на окно
//    3. При прокрутке выводи количество пикселей, которые проскроллил пользователь

// document.body.style.height = '3000px';
// document.body.style.background = 'linear-gradient(to bottom, #f0f2f5, #3498db)';

// window.addEventListener('scroll', () => {
//     const scrolled = window.scrollY;
//     console.log(`Прокручено: ${Math.round(scrolled)}px`);
// });


///////////////////////////////////////////////////////////////// Задание 11:///////////////////////////////////////////////////////////////
//    Работа с классами через classList
//    1. Создай блоку .card кнопку "Скрыть"
//    2. При клике скрывай card (add hidden)
//    3. При повторном клике — показывай (toggle hidden)

// const card = document.createElement("div");
// card.classList.add("card")
// document.body.append(card);

// const button = document.createElement("button");
// button.textContent = "Скрыть";
// document.body.append(button);

// button.addEventListener('click', () => {
//     card.classList.toggle('hidden')
// if (card.classList.contains('hidden')) {
//         button.textContent = "Показать";
//     } else {
//         button.textContent = "Скрыть";
//     }
// });


///////////////////////////////////////////////////////////////// Задание 12:///////////////////////////////////////////////////////////////
//  Финальное мини-приложение "Список дел". Реализовать через CLASS!
//    Создай UI:
//      - input
//      - button "Добавить"
//      - список ul > li
  
//    Функционал:
//      1. Добавление задач
//      2. Удаление задач
//      3. Отмечать задачу выполненной (клик по li → добавляется класс "done")

// class TodoApp {
//   constructor() {
//     this.input = document.querySelector('#todo-input');
//     this.button = document.querySelector('#add-btn');
//     this.list = document.querySelector('#todo-list');

//     this.init();
//   }

//   init() {
//     this.button.addEventListener('click', () => this.addTask());

//     this.input.addEventListener('keypress', (e) => {
//       if (e.key === 'Enter') this.addTask();
//     });

//     this.list.addEventListener('click', (e) => {
//       const target = e.target;

//       if (target.tagName === 'LI') {
//         this.toggleDone(target);
//       } else if (target.classList.contains('delete-btn')) {
//         this.deleteTask(target.parentElement);
//       }
//     });
//   }

//   addTask() {
//     const text = this.input.value.trim();
//     if (text === '') return;

//     const li = document.createElement('li');
//     li.innerHTML = `
//       <span>${text}</span>
//       <button class="delete-btn">×</button>
//     `;

//     this.list.appendChild(li);
//     this.input.value = ''; 
//   }

//   toggleDone(taskElement) {
//     taskElement.classList.toggle('done');
//   }

//   deleteTask(taskElement) {
//     taskElement.remove();
//   }
// }

// const myTodo = new TodoApp();












