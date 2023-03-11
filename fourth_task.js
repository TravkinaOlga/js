'use strict'

//let layers = prompt('Сколько слоёв в Вашей ёлке?', 0);
let layers = 13;

let z = '*';
let r = '#';
let index;
for (let l = 0; layers != l - 1; l++) {
    if (l === 0) {
        index = '>';
    } else if (l === layers) {
        index = '||';
    } else if (l % 2 != 0) {
        index = z.repeat(l);
    } else {
        index = r.repeat(l);
    }
    process.stdout.write(`${index}\n`);
}