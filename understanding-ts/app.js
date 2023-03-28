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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 7] = "ADMIN";
    Role[Role["READ_ONLY"] = 8] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Nathalie',
    lastName: 'Souza',
    age: 32,
    hobbies: ['hiking', 'chess', 'crochet'],
    role: Role.AUTHOR
};
var favoriteFood;
favoriteFood = ['lasagna', 'barbecue', 'pizza', 'burger'];
console.log(person);
console.log(person.lastName);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
