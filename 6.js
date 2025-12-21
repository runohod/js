/////////////// ЗАДАЧА 1: Создание и базовая работа с объектами
// 1. Создай объект user с полями: name, age, city
// 2. Добавь метод greet(), который выводит "Привет, меня зовут имя"
// 3. Вызови метод greet()


// const user = {
//     name: "Andrey",
//     age: 24,
//     city: "NN",

//     greet() {
//         console.log(`Привет, меня зовут ${user.name}`);
//     }
// };

// user.greet();


////////////////// ЗАДАЧА 2: Перебор ключей и значений
// 1. Создай объект fruits с полями: apple: 3, banana: 5, orange: 2
// 2. Используя for...in, выведи ключи
// 3. Используя for...in, выведи значения

// const fruits = {
//     apple: 3, 
//     banana: 5, 
//     orange: 2
// }; 

// console.log("Названия фруктов:");
// for (const key in fruits) {
//     console.log(key);
// }

// console.log("Значения количества фруктов:");
// for (const key in fruits) {
//     console.log(fruits[key]); 
// }

////////////////////////// ЗАДАЧА 3: Сравнение объектов
// 1. Создай два объекта obj1 и obj2 с одинаковыми полями и значениями
// 2. Сравни их через == и === и выведи результат
// 3. Объясни в комментарии почему так происходит

// const obj1 = {
//     apple: 3, 
//     banana: 5, 
// }; 

// const obj2 = {
//     apple: 3, 
//     banana: 5, 
// }; 

// console.log(obj1 == obj2) 

// console.log(obj1 === obj2) // не имеет значение какое странение строгое или нет, результат все равно будет false т.к. js выделяет отдельную облять память для каждого объекта

//////// ЗАДАЧА 4: Поверхностное копирование
// 1. Создай объект original с вложенным объектом inner = {x: 1, y: 2}
// 2. Скопируй его через Object.assign и через spread {...original}
// 3. Измени original.inner.x и посмотри, что произошло в копиях. Объясни результат

// const original = {
// inner: {x: 1, y: 2} // у тебя тут ошибка 
// }; 

// const fake1 = Object.assign ({}, original)
// const fake2 = {...original}

// console.log("original.inner.x =", original.inner.x)
// console.log("fake1.inner.x =", fake1.inner.x)
// console.log("fake2.inner.x =", fake2.inner.x)

// original.inner.x = 2;

// console.log("original.inner.x =", original.inner.x)
// console.log("fake1.inner.x =", fake1.inner.x)
// console.log("fake2.inner.x =", fake2.inner.x)

// изменение каснулось и копий т.к. мы скопировали только первый уровень свойств, вложенные объекты (как inner) не копируются, а копируются ссылки на них

// ЗАДАЧА 5: Глубокое копирование
// 1. Создай объект original с вложенным объектом inner = {x: 1, y: 2}
// 2. Напиши функцию, которая глубоко копируют объект переданный в параметры и возвращает его
// 3. Измени original.inner.x и проверь, что в копии inner.x не изменился

// const original = {
//     inner: {x: 1, y: 2}
// }; 

// function deepCopy (copy) {
//     return structuredClone(copy); 
// }

// const copy = deepCopy(original);

// console.log('original.inner.x =', original.inner.x);
// console.log('copy.inner.x =', copy.inner.x);     

// original.inner.x = 2;

// console.log('original.inner.x =', original.inner.x);
// console.log('copy.inner.x =', copy.inner.x);     

// благодаря structuredClone при изменении оригинала копия не поменялась


/////////////////// ЗАДАЧА 6: Объединение объектов
// 1. Создай два объекта: objA = {a:1, b:2}, objB = {b:3, c:4}
// 2. Объедини их всеми известными способами 
// 3. Выведи результат в console.log

// const objA = {a: 1, b: 2};
// const objB = {b: 3, c: 4};

// // const objC = Object.assign ({}, objA, objB)
// const objC = { ...objA, ...objB}

// console.log(objC)


////////////////// ЗАДАЧА 7: Опциональная цепочка (?.)
// 1. Создай объект user с полем profile = { email: "a@b.com" }
// 2. Попробуй обратиться к user.profile.phone.number
// 3. Выведи результат — убедись, что ошибок нет. Если есть, как исправить?

// const user = {
//     profile: { email: "a@b.com" }
// };

// console.log(user.profile.phone?.number)


//////////////// ЗАДАЧА 8: Деструктуризация объектов
// 1. Создай объект person = {name: "Alice", age: 25, city: "London"}
// 2. Вытяни name через деструктуризацию, остальное в rest
// 3. Выведи их в console.log

// const person = {name: "Alice", age: 25, city: "London"};

// const { name, ...rest } = person;

// console.log(name); 
// console.log(rest); 


///////////// ЗАДАЧА 9: Rest и Spread
// 1. Создай функцию sumAll(...nums), которая суммирует все переданные числа
// 2. Вызови её с разным количеством аргументов

// function sumAll(...numbers) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }
//     return total;
// }

// const nums = [1, 2];
// console.log(sumAll(...nums));  


