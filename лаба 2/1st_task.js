'use strict'

function convertSpeed(speed, si) {
    if (si === 'toMS') {
        console.log(`convertSpeed(${speed}, ${si}) -> '${speed / 3.6} м/с'`);
    } else {
        console.log(`convertSpeed(${speed}, '${si}') -> '${speed * 3.6} км/ч'`)
    }
}
let a = 36;
let b = 'toKMH';
convertSpeed(a, b);