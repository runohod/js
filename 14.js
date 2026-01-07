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





















