/*============ Object Type =============*/
// const person: {
//     name: string;
//     lastName: string;
// } = {

const person ={
    name: 'David',
    lastName: 'Souza',
    hobbies: ['hiking', 'chess']
};

let favoriteFood: string[];
favoriteFood = ['lasagna', 'barbecue', 'pizza', 'burger'];

console.log(person);
console.log(person.lastName);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
