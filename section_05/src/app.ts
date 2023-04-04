// type addFn = (a: number, b: number) => number;
interface addFn {
    (a: number, b: number): number;
}

let add: addFn;
add = (n1: number, n2: number) => {
    return n1 + n2;
};

console.log(add(2,5));

interface Named {
    readonly name: string;
}

interface Greetable extends Named{
    greet (phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30;

    constructor(n:string) {
        this.name = n;
    }
    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

let user1: Greetable;

user1 = new Person('John Doe');
// user1.name = 'Bruce Wayne';

user1.greet("Hi there, I'm");