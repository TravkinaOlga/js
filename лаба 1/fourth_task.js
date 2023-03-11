'use strict'

let layers = prompt('Сколько слоёв в Вашей ёлке?', 0);
// let layers = 13;

let array = [];

let z = '*';
let r = '#';
// let index;
for (let l = 0; layers != l - 1; l++) {
    if (l === 0) {
        array.push('>');
    } else if (l % 2 != 0) {
        array.push(z.repeat(l));
    } else {
        array.push(r.repeat(l));
    }
}
array.push('||');
console.log(array.join('\n'))