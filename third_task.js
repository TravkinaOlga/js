'use strict';

let number;
let i = 0;

do {
    number = prompt('Введите число', 0);
} while (isNaN(number) || number === '');

while (i <= number) {
    if  (i % 5 === 0 && i !== 0) {
        console.log(`"${i} fizz buzz"`);
    } else if (i % 2 === 0) {
        console.log(`"${i} buzz"`);
    } else {
        console.log(`"${i} fizz"`);
    }
    i++;
}