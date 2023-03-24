'use strict'

a = prompt('Введите минимальное число', 0);
b = prompt('Введите максимальное число', 0);

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(`randomNumber(${a}, ${b}) -> ${randomNumber(a, b)}`);