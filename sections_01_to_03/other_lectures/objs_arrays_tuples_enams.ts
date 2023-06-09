/*============ Object Type =============*/
// const person: {
//     name: string;
//     lastName: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string] //tupple type
// } = 

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum Role {ADMIN, READ_ONLY, AUTHOR};
enum Role {ADMIN = 7, READ_ONLY, AUTHOR='AUTHOR'};

const person = {
    name: 'Nathalie',
    lastName: 'Souza',
    age: 32,
    hobbies: ['hiking', 'chess', 'crochet'],
    role: Role.AUTHOR
};

let favoriteFood: string[];
favoriteFood = ['lasagna', 'barbecue', 'pizza', 'burger'];

console.log(person);
console.log(person.lastName);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('is author')
}