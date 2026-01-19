/*
   Вернемся к заданию со списком дел. Напомню условия задачи:
   Финальное мини-приложение "Список дел". Реализовать через CLASS!
   Создай UI:
     - input
     - button "Добавить"
     - список ul > li
  
   Функционал:
     1. Добавление задач
     2. Удаление задач
     3. Отмечать задачу выполненной (клик по li → добавляется класс "done")
        
        
    Теперь, нужно доработать существующий код и реализовать функциональность сохранения списка дел и его состояний в localStorage. 
    Чтобы при перезагрузке страницы, состояние списка не изменилось.
*/



class TodoApp {
  constructor() {
    this.input = document.querySelector('#todo-input');
    this.button = document.querySelector('#add-btn');
    this.list = document.querySelector('#todo-list');

    this.init();
  }

  init() {
    this.button.addEventListener('click', () => this.addTask());

    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.addTask();
    });

    this.list.addEventListener('click', (e) => {
      const target = e.target;

      if (target.tagName === 'LI') {
        this.toggleDone(target);
      } else if (target.classList.contains('delete-btn')) {
        this.deleteTask(target.parentElement);
      }
    });
  }

  addTask() {
    const text = this.input.value.trim();
    if (text === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
      <span>${text}</span>
      <button class="delete-btn">×</button>
    `;

    this.list.appendChild(li);
    this.input.value = ''; 
  }

  toggleDone(taskElement) {
    taskElement.classList.toggle('done');
  }

  deleteTask(taskElement) {
    taskElement.remove();
  }
}

const myTodo = new TodoApp();





saveToLocalStorage() {
    const tasks = localStorage.getItem(this.storageKay)
}
