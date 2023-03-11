'use strict'

function absValue(number) {
    if (number < 0) {
        number = -number;
        console.log(`absValue(${-number}) -> ${number}`);
    } else
    console.log(`absValue(${number}) -> ${number}`);
}

let m = prompt('Введите число и узнайте его модуль!', 0);
absValue(m);