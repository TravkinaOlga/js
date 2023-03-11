'use strict'

let n = prompt('Введите делимое', 0);
let x = prompt('Введите первый делитель', 0);
let y = prompt('Введите второй делитель', 0);

let flag = true;
if (n % x != 0|| n % y != 0) {
    flag = false;
}
console.log(`n = ${n}, x = ${x}, y = ${y} => ${flag}`);