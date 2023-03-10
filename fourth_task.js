'use strict'

//let n = prompt('Сколько слоёв в Вашей ёлке?', 0);
let n = 13;

let z = '*';
let r = '#';
let index;
for (let i = 0; n != i - 1; i++) {
    if (i === 0) {
        index = '>';
    } else if (i === n) {
        index = '||';
    } else if (i % 2 != 0) {
        index = z.repeat(i);
    } else {
        index = r.repeat(i);
    }
    process.stdout.write(`${index}\n`);
}