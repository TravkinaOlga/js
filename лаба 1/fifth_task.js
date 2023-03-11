'use strict'

let num = 12;
let personal_number;

do {
    personal_number = prompt('Введите число, чтобы угадать', 0);
    if (personal_number === '' || personal_number === null) {
        continue;
    } else if (personal_number > num) {
        console.log('Ваше число больше :с');
    } else if (personal_number < num) {
        console.log('Ваше число меньше :(');
    }
} while (personal_number != num);
console.log('Угадано :з');