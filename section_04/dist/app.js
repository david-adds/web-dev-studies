"use strict";
const add = (a, b = 7) => a + b;
console.log(add(2, 5));
const printOutput = (output) => {
    console.log(output);
};
printOutput(add(5));
