'use strict'

let n = 12;
let number;

do {
    number = prompt('Введите число', 0);
    if (number === '' || number === null) {
        continue;
    } else if (number > n) {
        console.log('Ваше число больше :с');
    } else if (number < n) {
        console.log('Ваше число меньше :(');
    }
} while (number != n);
console.log('Угадано :з');