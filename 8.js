///////////////////////////////////////////////////////////////// Задание 1:///////////////////////////////////////////////////////////////
// Создание и базовая работа с массивами
// 1. Создай массив fruits = ["apple", "banana", "orange", "mango"]
// 2. Выведи первый и последний элемент массива
// 3. Добавь новый элемент в конец массива
// 4. Удали первый элемент массива

// const fruits = ["apple", "banana", "orange", "mango"]

// console.log(fruits[0])
// console.log(fruits[fruits.length -1])

// fruits.push("A")
// console.log(fruits)

// console.log(fruits.shift())
// console.log(fruits)


///////////////////////////////////////////////////////////////// Задание 2:///////////////////////////////////////////////////////////////
// 1. Создай массив numbers = [1, 2, 3, 4, 5]
// 2. С помощью forEach выведи каждый элемент умноженный на 2

// const numbers = [1, 2, 3, 4, 5]

// numbers.forEach((number) => {
//     console.log(number * 2);
// })


///////////////////////////////////////////////////////////////// Задание 3:///////////////////////////////////////////////////////////////

// 1. Создай массив numbers = [1, 2, 3, 4, 5]
// 2. Используй map, чтобы создать новый массив, где каждый элемент увеличен на 10

// const numbers = [1, 2, 3, 4, 5]

// const newNumber = numbers.map((number) => {
//     return number + 10;
// })

// console.log(newNumber);


///////////////////////////////////////////////////////////////// Задание 4:///////////////////////////////////////////////////////////////

// 1. Из массива numbers = [5, 10, 15, 20, 25] оставь только числа больше 15

// let numbers = [5, 10, 15, 20, 25]

// console.log(
//     numbers.filter((number) => number > 15)
// )

///////////////////////////////////////////////////////////////// Задание 5:///////////////////////////////////////////////////////////////

// 1. Пусть numbers = [2, 4, 6, 8, 10]
// 2. проверь, есть ли хотя бы одно число больше 8
// 3. проверь, все ли числа чётные

// let numbers = [2, 4, 6, 8, 10]

// let findEight = numbers.some((number) => number > 8);
// console.log(findEight);

// let evenNumbers = numbers.every(number => number % 2 === 0);
// console.log(evenNumbers);

///////////////////////////////////////////////////////////////// Задание 6:///////////////////////////////////////////////////////////////

// 1. Используя numbers = [1, 2, 3, 4, 5], посчитай сумму всех элементов через reduce
// 2. Посчитай произведение всех элементов через reduce

// let numbers = [1, 2, 3, 4, 5]

// const sum = numbers.reduce((currentSum, currentNumber) => currentSum + currentNumber);
// console.log(sum);


// const composition = numbers.reduce((acc, curr) => acc * curr);
// console.log(composition);


///////////////////////////////////////////////////////////////// Задание 7:///////////////////////////////////////////////////////////////

// 1. Пусть fruits = ["apple", "banana", "orange"]
// 2. Проверь, содержит ли массив "banana" с помощью includes
// 3. Найди индекс элемента "orange" с помощью indexOf

// let fruits = ["apple", "banana", "orange"]

// const isBanana = fruits.includes('banana')
// console.log(isBanana)

// console.log(fruits.indexOf('orange'))


///////////////////////////////////////////////////////////////// Задание 8:///////////////////////////////////////////////////////////////

// 1. Пусть numbers = [5, 2, 9, 1, 5, 6]
// 2. Отсортируй массив по возрастанию
// 3. Отсортируй массив по убыванию

// let numbers = [5, 2, 9, 1, 5, 6]

// console.log(numbers.sort((a, b) => a - b))
// console.log(numbers.sort((a, b) => b - a))


///////////////////////////////////////////////////////////////// Задание 9:///////////////////////////////////////////////////////////////

// 1. Пусть numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 2. Сначала фильтруй числа больше 4
// 3. Потом умножь оставшиеся числа на 2 с помощью
// 4. Выведи каждое число через метод цикла

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let moreFour = numbers.filter((number) => number > 4)
// console.log(moreFour) // [5, 6, 7, 8, 9]

let lessFour = numbers.filter((number) => number <= 4)
let composition = lessFour.map((num) => num * 2);
// console.log(composition) //[2, 4, 6, 8]

moreFour.forEach((number) => {console.log(number);});

composition.forEach((number) => {console.log(number);});