'use strict'

//////////////////////ЗАДАЧА 1////////////////////////////

var message = 'hello';
let number = 42;
const bolean = true;

console.log('var message:', message);
console.log('let number:', number);
console.log('const bolean:', bolean);

if (true) { 
    var message = 'hi'; 
    let number = 52;
    const bolean = false; 
    
    console.log('var message:', message);
    console.log('let number:', number);
    console.log('const bolean:', bolean);
}
 
//////////////////////ЗАДАЧА 2////////////////////////////

// console.log(a); // undefined
// console.log(b); // Error

// var a = 5;
// let b = 10;


// при var вызов переменной возможен до его назначения 


//////////////////////ЗАДАЧА 3////////////////////////////


let mesage = 'hello';
let numbeer = 42;
let boolean = true;
let users = null;
let admin = undefined;
let user = {
  name: "Андрей",
  age: 24,
};
let id = Symbol("id");
let numbers = 5645;

console.log(typeof mesage, numbeer, boolean, users, admin, user, id, numbers)


//////////////////////ЗАДАЧА 4////////////////////////////

let fg = 15;
let dfg = 10;
let ds = true;

console.log(fg + dfg);
console.log(fg - dfg);
console.log(fg + ds);

// потому что true считается за единицу, а отрицательное его значение за 0

//////////////////////ЗАДАЧА 5////////////////////////////

console.log("5" - 2) // насколько я понял он видит строку, но преобразует в число
console.log("5" + 2) // тут просто строка + число и происходит склейка
console.log(true + 1) // тут ясно как и ранее писал математичеки тру это 1 
console.log(false == 0) // как я понял == преобразует
console.log(null == undefined) // null и undefined равны друг другу при нестрогом равенстве

// вывод - 
// 3
// 52
// 2
// true
// true




