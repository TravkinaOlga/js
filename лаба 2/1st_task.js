'use strict'

function convertSpeed(speed, si) {
    if (si === 'toMS') {
        return `${speed / 3.6} м/с`;
    } else {
        return `${speed * 3.6} км/ч`;
    }
}
let a = prompt('Введите скорость', 0);
let b = prompt('Введите единицы измерения вида toKMH или toMS', '');
console.log(`convertSpeed(${a}, '${b}') ->` + ` ` + `${convertSpeed(a, b)}`)