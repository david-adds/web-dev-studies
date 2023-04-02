const add = (a:number, b:number = 7) => a + b;

console.log(add(2,5));

const printOutput = (output: string | number) => {
    console.log(output);
};

printOutput(add(5));

const hobbies = ['Sports', 'Movies', 'Comic books'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies); //Similar to the extent method of a list in python

const person = {
    name: 'Nat',
    age: 32
};

const copiedPerson = {...person};
console.log(copiedPerson);

const addv2 = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0);
};

const addedNumbers = addv2(5, 10, 12, 7);
console.log(addedNumbers);