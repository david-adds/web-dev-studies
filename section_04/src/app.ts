const add = (a:number, b:number = 7) => a + b;

console.log(add(2,5));

const printOutput = (output: string | number) => {
    console.log(output);
}

printOutput(add(5));