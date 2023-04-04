"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(2, 5));
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(`${phrase} ${this.name}`);
        }
        else {
            console.log('Hey there!');
        }
    }
}
let user1;
user1 = new Person();
user1.greet("Hi there, I'm");
