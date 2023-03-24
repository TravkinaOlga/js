'use strict'

let sampleArray = ["a","b","c","d"];
let n = 2;
let Array = []

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

while (n != 0) {
    Array.push(sampleArray[randomNumber(0, sampleArray.length - 1)]);
    n -= 1;
}

console.log(`sampleArray(["${sampleArray.join('","')}"], ${Array.length}) -> ["${Array.join('","')}"]`);