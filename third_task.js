'use strict';

let number;
let j = 0;

do {
    number = prompt('Введите число!', 0);
} while (isNaN(number) || number === '');

while (j <= number) {
    if  (j % 5 === 0 && j !== 0) {
        console.log(`"${j} fizz buzz"`);
    } else if (j % 2 === 0) {
        console.log(`"${j} buzz"`);
    } else {
        console.log(`"${j} fizz"`);
    }
    j++;
}