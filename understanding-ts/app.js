/*============ Object Type =============*/
var person = {
    name: 'Nathalie',
    lastName: 'Souza',
    age: 32,
    hobbies: ['hiking', 'chess', 'crochet'],
    role: [2, 'author']
};
var favoriteFood;
favoriteFood = ['lasagna', 'barbecue', 'pizza', 'burger'];
console.log(person);
console.log(person.lastName);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
person.role.push('admin');
console.log(person.role);
