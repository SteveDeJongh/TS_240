// T230 - TypeScript Basics - TypeScript Fundamentals: Blueprinting with TypeScript
// 1
// type Contact = { // Type alias
//   firstName: string;
//   lastName: string;
//   age: number;
//   isOnline: boolean;
// }
// Ex usage:
var contact = {
    firstName: 'Steve',
    lastName: 'De Jongh',
    age: 32,
    isOnline: false,
};
// 2
// type Employee = {
//   id: number;
//   name: string;
//   department: string;
// }
// let employee: Employee = {
var employe = {
    id: 1,
    name: 'Steve',
    department: 'Sales',
};
var myCar = {
    make: 'Ford',
    model: 'F-150',
    year: 2023,
};
var computer = {
    manufacturer: 'Apple',
    model: 'Macbook Pro',
    year: 2020,
};
var smartPhone = {
    manufacturer: 'Apple',
    model: 'Iphone Pro',
    year: 2020,
    hasHeadPhoneJack: false,
};
var anotherSmartphone = smartPhone; // Allowed as interface `Device` is narrower than smartPhone. `anotherSmartphone` will only contain teh manufacturer, model, and year properties as far as TypeScript is concerned, however in the JS runtime it will still contain all properties of `smartPhone` (includes `hasHeadPhoneJack`).
// Example usage:
var userAccount = {
    username: "johndoe123",
    email: "john@example.com",
    accountCreationDate: "2023-01-01",
};
// 6
var randomValue = 'Hello world';
var upperCased = randomValue.toUpperCase();
console.log(upperCased); // 'HELLO WORLD'
// 7
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.describe = function () {
        return "".concat(this.name, " is ").concat(this.age, " years old.");
    };
    return Person;
}());
var person = new Person('Steve', 30);
console.log(person.describe()); // `Steve is 30 years old`
// Alternatively, we could have written the class like so:
// class Person {
//   constructor(public name: string, public age: number) {}
//   describe(): string {
//     return `${this.name} is ${this.age} years old.`;
//   }
// }
