/*============ Object Type =============*/
const person: {
    name: string;
    lastName: string;
    age: number;
    hobbies: string[];
    role: [number, string] //tupple type
} = {
    name: 'Nathalie',
    lastName: 'Souza',
    age: 32,
    hobbies: ['hiking', 'chess', 'crochet'],
    role: [2, 'author']
};

let favoriteFood: string[];
favoriteFood = ['lasagna', 'barbecue', 'pizza', 'burger'];

console.log(person);
console.log(person.lastName);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
person.role.push('admin');
console.log(person.role);