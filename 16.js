///////////////////////////////////////////////////////////////// Задание 1:///////////////////////////////////////////////////////////////
// ЗАДАНИЕ 1, fetch.
// Напиши функцию, которая принимает url и делает fetch запрос на этот url.
// При вызове этой функции, мы должны получить результат через then.
// makeFetch(url).then(result = console.log(result))
// Само собой нужно сделать обработку ошибок на случай, если что-то пойдет не так.

// function makeFetch(url) {
//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Ошибка: ${response.status}`);
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.error('Произошла Ошибка:', error.message);
//       throw error; 
//     });
// }

// makeFetch(url).then(result => console.log(result))


///////////////////////////////////////////////////////////////// Задание 2:///////////////////////////////////////////////////////////////
// ЗАДАНИЕ 2. Подгрузка данных.
// 1. Сверстай кнопку "Получить данные"

// 2. Реализуй класс, который в одном методе будет получать данные с https://jsonplaceholder.typicode.com/posts и 
// сохранять их во внутренюю приватную переменную #posts.

// 3. Далее нужно написать метод, который будет принимать класс, по которому можно будет найти кнопку. 
// То есть код должен быть универсален и я могу подставить туда абсолютно любой класс кнопки и код должен работать. 
// После нахождения этой кнопки, нужно повесить на него обработчик события по клику. По клику мы вызываем метод из пункта 
// 2. Получается при клике на кнопку "Получить данные" мы получаем данные с сервера.

// 4. Следующим пунктом, нужно реализовать метод, который проверяет, есть ли у нас данные, пустые ли они? 
// Если данные есть и не пустые, то отображаем их в виде карточек постов в body.

const openButton = document.createElement("button");
openButton.textContent = "Получить данные";
openButton.classList.add("btn"); 
document.body.appendChild(openButton);

class PostManager {
  #posts = []; 

  async fetchPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      this.#posts = await response.json();
      
      console.log("Данные загружены!");
      this.render(); 
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  }

  bindButton(selector) {
    const button = document.querySelector(selector);
    if (button) {
      button.addEventListener('click', () => this.fetchPosts());
    } 
  }

  render() {
    if (this.#posts.length > 0) {
      const list = document.createElement('ul');
      this.#posts.slice(0, 50).forEach(post => {
        const item = document.createElement('li');
        item.textContent = post.title;
        list.appendChild(item);
      });
      document.body.appendChild(list);
    }
  }
}

const manager = new PostManager();
manager.bindButton(".btn");
