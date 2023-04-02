const add = (a:number, b:number = 7) => a + b;

console.log(add(2,5));

const printOutput = (output: string | number) => {
    console.log(output);
}

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