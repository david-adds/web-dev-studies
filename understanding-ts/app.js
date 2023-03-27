/*============ Object Type =============*/
// const person: {
//     name: string;
//     lastName: string;
// } = {
var person = {
    name: 'David',
    lastName: 'Souza',
    hobbies: ['hiking', 'chess']
};
var favoriteFood;
favoriteFood = ['lasagna', 'barbecue', 'pizza', 'burger'];
console.log(person);
console.log(person.lastName);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
