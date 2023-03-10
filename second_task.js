'use strict';

let a = 1;
let b = 1;
let c = 3;

if ((a + b > c) 
    && (a + c > b) 
    && (c + b > a)) {
    console.log('Треугольник существует');
    let p = (a + b + c) / 2;
    let P = 2 * p;
    console.log(`Периметр треуголька = ${P}`);

    let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log(`Площадь треугольника = ${S}`);

    console.log(`Соотношение периметра треугольника к его площади = ${P / S}`);
} else console.log('Треугольник не существует');
