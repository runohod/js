///////////////////////////////////////////////////////////////// Задание 1:///////////////////////////////////////////////////////////////
// Базовый класс
// 1. Создай класс Person
// 2. Добавь в него constructor(name, age)
// 3. Сохрани name и age в this
// 4. Создай метод sayHello(), который выводит "Привет, меня зовут <name>"
// 5. Создай экземпляр и вызови метод

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age 
//     }

//         sayHello() {
//         console.log(`Привет, меня зовут ${this.name}`)
//     }
// }

// const firstPerson = new Person('Вася', 25)
// console.log(firstPerson)
// firstPerson.sayHello() 


///////////////////////////////////////////////////////////////// Задание 2:///////////////////////////////////////////////////////////////
// Наследование + super
// 1. Создай класс Student, который наследуется от Person
// 2. Класс Student, помимо name, age должен принимать еще один параметр - group.
// 3. Добавь метод getInfo(), выводящий "<name>, <age> лет, группа <group>"
// 4. Создай экземпляр Student и вызови getInfo()

// class Student extends Person {
//     constructor(name, age, group) {
//         super(name, age)
//         this.group = group
//     }

//     getInfo() {
//         console.log(`${this.name}, ${this.age} лет, группа ${this.group}`)
//     }
// }

// const student = new Student('Вася', 25, '25')
// student.getInfo()


///////////////////////////////////////////////////////////////// Задание 3:///////////////////////////////////////////////////////////////
// Геттеры и сеттеры
// 1. Измени класс Person:
//    - добавь приватное поле #salary (можешь задать любое число)
//    - добавь геттер salary, который возвращает зарплату
//    - добавь сеттер salary, который:
//        - не дает ставить отрицательные числа
//        - делает salary числом с плавающей точкой, до десятых. Например: 
// obj.salary = 33;
// console.log(obj.salary) // 33.0
// Если число уже с плавающей точкой, то его нужно округлить, до десятых по правилам математики.
// 2. Проверь работу: выведи зарплату, измени её, выведи ещё раз


// class Person {
//     #salary = 32.0;
    
//     constructor(name, age) {
//         this.name = name
//         this.age = age 
//     }

//     get salary() {
//         return this.#salary;
//     }

//     set salary(value) {
//         if (value < 0) {
//             console.log("Зарплата не может быть отрицательной");
//             return;
//         }
//         this.#salary = Math.round(value * 10) / 10;
//     }
// }

// const obj = new Person("Алексей", 30);

// obj.salary = 33;
// console.log(obj.salary)

// obj.salary = -100;
// console.log(obj.salary)


///////////////////////////////////////////////////////////////// Задание 4:///////////////////////////////////////////////////////////////
// Методы класса
// 1. В класс Student добавь метод isAdult()
//    - возвращает true, если age >= 18
// 2. Создай студента и проверь метод

// class Student {
//     constructor(name, age) {
//         this.name = name
//         this.age = age 
//     }

//     isAdult() {
//         if (this.age >= 18) {
//             return true;
//         }
//         else {
//             console.log('Вход только совершеннолетним');
//             return false;
//         }
//     }
// }

// const someStudent = new Student('Александер', 20);
// console.log(someStudent.isAdult())


///////////////////////////////////////////////////////////////// Задание 5:///////////////////////////////////////////////////////////////
// Статические методы
// 1. Создай класс MathUtils
// 2. Добавь в него статический метод sum(a, b)
// 3. Вызови MathUtils.sum(4, 7)
// 4. Выведи результат

// class MathUtils {

//     static sum(a, b) {
//             return a + b;
//         }
// }

// const result = MathUtils.sum(4, 7);
// console.log(result);


///////////////////////////////////////////////////////////////// Задание 6:///////////////////////////////////////////////////////////////
// Наследование + переопределение метода
// 1. В Person создай метод introduce() → "Я человек."
// 2. В Student переопредели introduce() → "Я студент <name>."
// 3. Создай одного Person и одного Student, вызови их introduce()

// class Person {
//     introduce() {
//         console.log("Я человек.");
//     }
// }

// class Student extends Person {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
//     introduce() {
//         console.log(`Я студент ${this.name}.`);
//     }
// }

// const person = new Person();
// const student = new Student("Александер");

// person.introduce();
// student.introduce(); 


///////////////////////////////////////////////////////////////// Задание 7:///////////////////////////////////////////////////////////////
// Класс с методами, использующими геттеры и сеттеры
// 1. Создай класс Rectangle
// 2. Поля width и height задай через constructor
// 3. Создай геттер area, который возвращает площадь
// 4. Создай сеттер width, который не принимает отрицательные значения
// 5. Создай экземпляр и проверь работу

// class Rectangle {
//     constructor(width, height) {
//         this._width = width;
//         this.height = height;
//     }

//     get area() {
//         return this._width * this.height;
//     }

//     set width(value) {
//         if (value < 0) {
//             console.log("Ширина не может быть отрицательной");
//         } else {
//             this._width = value;
//         }
//     }
// }

// const areas = new Rectangle(10, 5);
// console.log(`Площадь: ${areas.area}`);


///////////////////////////////////////////////////////////////// Задание 8:///////////////////////////////////////////////////////////////
// Мини-проект "Каталог товаров"
// 1. Создай класс Product с полями title, price
// 2. Добавь метод getInfo() → "<title>: <price>₽"
// 3. Создай класс SaleProduct, наследующий Product
// 4. Добавь поле discount (%)
// 5. Добавь метод getFinalPrice(), уменьшающий price на discount%
// 6. Создай товар и товар со скидкой, выведи их цену и финальную цену

// class Product {
//     constructor(title, price) {
//         this.title = title
//         this.price = price 
//     }
//     getInfo() {
//         return `${this.title}: ${this.price}₽`;
//     }

// }

// class SaleProduct extends Product {
//     constructor(title, price, discount) {
//         super(title, price);
//         this.discount = discount;
//     }

//     getFinalPrice() {
//         return this.price - (this.price * (this.discount / 100));
//     }

//     getInfo() {
//         return `${super.getInfo()} | Скидка: ${this.discount}%`;
//     }
// }

// const coffee = new SaleProduct("Кофе", 500, 20);
// console.log(coffee.getInfo());
