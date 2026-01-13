///////////////////////////////////////////////////////////////// Задание 1:///////////////////////////////////////////////////////////////
//    Базовый addEventListener
//    1. Создай кнопку "Нажми меня"
//    2. Добавь обработчик click
//    3. При клике выводи в консоль "Кнопка нажата!"

// const openButton = document.createElement("button");
// openButton.textContent = "Нажми меня";
// document.body.appendChild(openButton);

// openButton.addEventListener('click', () => {
//     console.log("Кнопка нажата!");
// });


///////////////////////////////////////////////////////////////// Задание 2:///////////////////////////////////////////////////////////////
//    Несколько обработчиков на один элемент
//    1. Добавь к кнопке два обработчика click:
//         - Первый выводит "Первый обработчик"
//         - Второй — "Второй обработчик"

// const openButton = document.createElement("button");
// openButton.textContent = "Кнопка";
// document.body.appendChild(openButton);

// openButton.addEventListener('click', () => {
//     console.log("Первый обработчик")
// })

// openButton.addEventListener('click', () => {
//     console.log("Второй обработчик")
// })


///////////////////////////////////////////////////////////////// Задание 3:///////////////////////////////////////////////////////////////
//    removeEventListener
//    1. Создай функцию handleClick
//    2. Добавь её как обработчик click к кнопке
//    3. После 3 кликов на эту кнопку, сделай removeEventListener

// const openButton = document.createElement("button");
// openButton.textContent = "Кнопка";
// document.body.appendChild(openButton);

// let count = 0;

// const handleClick = () => {
//     count++; 
//     console.log(`Клик номер: ${count}`);

//     if (count === 3) {
//         openButton.removeEventListener('click', handleClick)
//         console.log('Обработчик удален!');
//     }
//     else {
//         return
//     }
// };

// openButton.addEventListener('click', handleClick)


///////////////////////////////////////////////////////////////// Задание 4:///////////////////////////////////////////////////////////////
//    Всплытие
//    1. Создай вложенные div: outer → middle → inner
//    2. Добавь каждому обработчик click
//    3. Сделайт так, чтобы при клике на inner срабатывал обработчик inner, родители срабатывать не должны

// const outer = document.createElement('div');
// const middle = document.createElement('div');
// const inner = document.createElement('div');

// outer.className = 'outer';
// outer.textContent = 'текс в outer';
// middle.className = 'middle';
// middle.textContent = 'текс в middle';
// inner.className = 'inner';
// inner.textContent = 'текс в inner';

// outer.appendChild(middle);
// middle.appendChild(inner);

// document.body.appendChild(outer);

// outer.addEventListener('click', () => {
//     console.log("outer")
// })

// middle.addEventListener('click', () => {
//     console.log("middle")
// })

// inner.addEventListener('click', (event) => {
//     console.log("inner")
//     event.stopPropagation()
// })


///////////////////////////////////////////////////////////////// Задание 5:///////////////////////////////////////////////////////////////
//    Делегирование событий (список). Повторение.
//    1. Создай ul со списком li (3–5 элементов)
//    2. Добавь один обработчик click на ul
//    3. Если клик по li — выводи текст li

// const ul = document.createElement('ul');
// const li1 = document.createElement('li');
// const li2 = document.createElement('li');
// const li3 = document.createElement('li');

// li1.className = 'li1';
// li1.textContent = 'текс в li1';
// li2.className = 'li2';
// li2.textContent = 'текс в li2';
// li3.className = 'li3';
// li3.textContent = 'текс в li3';

// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);

// document.body.appendChild(ul);

// ul.addEventListener('click', (event) => {
//   const target = event.target;
//   if (target.tagName === 'LI') { 
//     console.log(target.textContent);
//   }
// });


///////////////////////////////////////////////////////////////// Задание 6:///////////////////////////////////////////////////////////////
//    Комбинации клавиш
//    Если нажаты:
//     - Ctrl + S → вывести alert "Сохранено"
//     - Ctrl + Shift + X → вывести "Комбо!"

// document.addEventListener('keydown', function(event) {

//     if (event.ctrlKey && event.code === 'KeyS') {
//         alert("Сохранено");
//     }

//     if (event.ctrlKey && event.shiftKey && event.code === 'KeyX') {
//         alert("Комбо!");
//     }
// });


///////////////////////////////////////////////////////////////// Задание 7:///////////////////////////////////////////////////////////////
//    Управление объектом с клавиатуры
//    1. Создай квадрат 50×50
//    2. На стрелки ↑ ↓ ← → двигая квадрат на 10px

// const player = document.createElement('div');
// player.id = 'player';
// document.body.appendChild(player);

// const style = document.createElement('style');
// style.textContent = `
//     #player {
//         width: 50px;
//         height: 50px;
//         background-color: black;
//         position: absolute;
//     }

// `;
// document.head.appendChild(style);

// let topPos = 0;
// let leftPos = 0;

// document.addEventListener('keydown', (event) => {
//     const step = 10;

//     switch (event.code) {
//         case 'ArrowUp':    topPos = topPos - step; break;
//         case 'ArrowDown':  topPos = topPos + step; break;
//         case 'ArrowLeft':  leftPos = topPos - step; break;
//         case 'ArrowRight': leftPos = topPos + step; break;
//         default: return;
//     }

//     player.style.top = topPos + 'px';
//     player.style.left = leftPos + 'px';
// });


///////////////////////////////////////////////////////////////// Задание 8:///////////////////////////////////////////////////////////////
//    Мини-проект "Калькулятор"
//    1. Реализуй верстку калькулятора с основными операциями
//    2. Реализуй весь функционал через class Calculator() {}
//    3. Обработай нажатия клавиш клавиатуры, чтобы по нажатию enter можно было подтвердить операцию и выполнить ее

class Calculator {
  constructor(currentTextElement) {
    this.currentTextElement = currentTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.updateDisplay();
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendSymbol(symbol) {
    let char = symbol === '÷' ? '/' : symbol;
    
    const lastChar = this.currentOperand.slice(-1);
    if (['+', '-', '*', '/'].includes(char) && ['+', '-', '*', '/'].includes(lastChar)) {
      return;
    }

    this.currentOperand = this.currentOperand.toString() + char;
  }

  compute() {
    if (this.currentOperand === '') return;
    try {
      this.currentOperand = eval(this.currentOperand).toString();
    } catch (e) {
      this.currentOperand = "Error";
    }
  }

  updateDisplay() {
    this.currentTextElement.innerText = this.currentOperand || '0';
  }
}

const currentTextElement = document.querySelector('.current');
const calculator = new Calculator(currentTextElement);

document.querySelectorAll('.number, .operation').forEach(button => {
  button.addEventListener('click', () => {
    if (button.innerText === 'DEL') {
      calculator.delete();
    } else {
      calculator.appendSymbol(button.innerText);
    }
    calculator.updateDisplay();
  });
});

document.querySelector('.result').addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
});

window.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.'].includes(e.key)) {
    calculator.appendSymbol(e.key);
  } else if (e.key === 'Enter' || e.key === '=') {
    calculator.compute();
  } else if (e.key === 'Backspace') {
    calculator.delete();
  } else if (e.key === 'Escape') {
    calculator.clear();
  }
  calculator.updateDisplay();
});
