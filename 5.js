////////// ЗАДАЧА 1: Базовый синтаксис функции
// 1. Создай функцию sayHello, которая принимает имя (name) и выводит "Привет, name!"
// 2. Если имя не передано — используй значение по умолчанию "Гость"
// 3. Вызови функцию 3 раза с разными аргументами

// function sayHello (name) {
//     if (name === undefined) {
//         console.log("Гость")
//     }
//     console.log(`Привет, ${name}!`)
// }

// sayHello("Андрей")
// sayHello("Виктор")
// sayHello("Кирилл")

//////////////// ЗАДАЧА 2: Параметры, аргументы и return
// 1. Создай функцию sum(a, b), которая возвращает сумму двух чисел
// 2. Выведи результат её работы в console.log
// 3. Сделай вторую функцию multiply(a, b), где b имеет значение по умолчанию

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(5, 2));

// function multiply(a, b = 5) {
//     return a * b;
// }

// console.log(multiply(5));

//////////////////////// ЗАДАЧА 3: Область видимости
// 1. Создай переменную outside = "Я снаружи"
// 2. Создай функцию testScope(), внутри которой объяви переменную inside = "Я внутри"
// 3. Попробуй вывести inside снаружи функции (ожидаем ошибку)
// 4. Выведи outside внутри функции. Объясни результат

// let outside = "Я снаружи"

// function testScope() {
//     let inside = "Я внутри"
//     console.log(outside)
// }

// console.log(inside)

// все из за разной области видимости, outside объявлена снаружи (глобальная обл видимости),а мы вызываем ее внутри => не можем ссылаться на неё, тоже самое и с inside (локальной обл видимости)

///////////////////// ЗАДАЧА 4: Виды функций — практика
// 1. Создай function declaration
// 2. Создай function expression
// 3. Создай стрелочную функцию
// 4. Все функции должны выводить разные фразы

// function declaration () {
//     console.log(1)
// }

// const expression = function() {
//     console.log(2)
// }

// const arrow = () => {
//     console.log(3)
// }

// declaration()
// expression()
// arrow()

///////////////// ЗАДАЧА 5: Callback-функции
// 1. Создай функцию calc(a, b, operation), где operation — callback
// 2. Передай в неё callback для сложения, затем для умножения

// function calc (a, b, operation) {
//     return operation(a, b);
// }

// function add(x, y) {
//     return x + y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// const a = 5
// const b = 10

// console.log("Сложение:", calc(a, b, add));
// console.log("Умножение:", calc(a, b, multiply));

////////////////////////// ЗАДАЧА 6: arguments — работа с неизвестным числом аргументов
// 1. Создай функцию logAll(), которая выводит ВСЕ переданные аргументы
// 2. Вызови её с разным количеством аргументов

// function logAll() {
//     console.log('Все аргументы:', arguments);
// }

// logAll(6)
// logAll(5)
// logAll(4)
// logAll(3)

//////////////// ЗАДАЧА 7: Замыкание — базовая практика
// 1. Создай функцию createCounter(), которая возвращает внутреннюю функцию
// 2. Внутренняя функция должна увеличивать счётчик и выводить его
// 3. Создай два независимых счётчика и протестируй

// function createCounter() {
//     let count = 0;

//     function plusCount () {
//         count++
//         console.log(count);
//     }
//     return plusCount;
// }

// const count1 = createCounter();
// const count2 = createCounter();

// console.log('Счётчик 1:');
// count1(); // 1
// count1(); // 2
// count1(); // 3

// console.log('\nСчётчик 2:');
// count2(); // 1
// count2(); // 2

/////////// ЗАДАЧА 10: Замыкание — параметризация
// 1. Создай функцию makeAdder(n), которая возвращает функцию,
//    прибавляющую к числу значение n
// 2. Например: const add5 = makeAdder(5); add5(10) → 15

// function makeAdder(n) {
//     function addNumver(x) {
//         return n + x;
//     }
//     return addNumver;
// }

// const add5 = makeAdder(5);
// console.log(add5(10)); // → 15


////////////// ЗАДАЧА 11: Рекурсия — факториал
// 1. Создай функцию factorial(n), которая считает факториал рекурсивно
// 2. Вызови её для нескольких значений
// P.S. Формулу факториала можно подгуглить, только формулу, без решения в коде

// function factorial(n) {
//     if (n <= 1) {
//         return 1;
//     }

//     return n * factorial(n-1);
// }

// console.log(factorial(3));


/////// ЗАДАЧА 12: Рекурсия — вывод чисел от N до 1
// 1. Создай функцию printDown(n), которая выводит числа: n, n-1, ..., 1
// 2. Используй только рекурсию

// function printDown(n) {
//     console.log(n); 
//     if (n <= 1) {
//         return 1;
//     }
//     return printDown(n - 1)
// }

// (printDown(9));
