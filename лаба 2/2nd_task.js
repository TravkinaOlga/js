'use strict'

function absValue(number) {
    if (number < 0) {
        number = -number;
        return number;
    } else
        return number;
}

let m = prompt('Введите число и узнайте его модуль!', 0);
console.log(`absValue(${m}) ->` + ` ` + `${absValue(m)}`)