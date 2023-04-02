"use strict";
const add = (a, b = 7) => a + b;
console.log(add(2, 5));
const printOutput = (output) => {
    console.log(output);
};
printOutput(add(5));
const hobbies = ['Sports', 'Movies', 'Comic books'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
const person = {
    name: 'Nat',
    age: 32
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
const addv2 = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = addv2(5, 10, 12, 7);
console.log(addedNumbers);
