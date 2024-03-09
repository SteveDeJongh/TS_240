// T230 - TypeScript Basics - Dynamic Interfaces: Mastering Advanced Structures
var employee = {
    name: 'Steve',
    age: 30,
    employeeId: 1,
};
var pet = {
    bark: function () { return console.log('Woof'); },
    meow: function () { return console.log('Meow'); },
};
pet.bark(); // 'Woof'
pet.meow(); // 'Meow'
var dictionary = {
    hello: 'world',
    goodbye: 'moon',
};
function printUserDataField(userData, key) {
    console.log(userData[key]);
}
var userData = {
    name: 'Steve',
    age: 30,
    email: 'blah@gmail.com',
};
printUserDataField(userData, 'name'); // 'Steve'
printUserDataField(userData, 'age'); // 30
// printUserDataField(userData, 'phone'); // TypeError, 'phone' is not assignable to paramter of type "keyof userData". (aka 'phone' is not in the uniont 'name' | 'age' | 'email')
// 5
function getProperty(obj, key) {
    return obj[key];
}
var user = {
    name: 'steve',
    age: 30,
};
var userName = getProperty(user, 'name'); // works, assigns 'steve' to userName,
var userAge = getProperty(user, 'age'); // works, assigns 30 to userAge.
// const userEmail = getProperty(user, 'email'); // fails, `email` is not a key of `user`.
