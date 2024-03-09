// T230 - TypeScript Basics - TypeScript Fundamentals: Blueprinting with TypeScript

// 1

// type Contact = { // Type alias
//   firstName: string;
//   lastName: string;
//   age: number;
//   isOnline: boolean;
// }

// Ex usage:
let contact: Contact = {
  firstName: 'Steve',
  lastName: 'De Jongh',
  age: 32,
  isOnline: false,
}

// 2

// type Employee = {
//   id: number;
//   name: string;
//   department: string;
// }

// let employee: Employee = {
let employe: { id: number; name: string; department: string } = { // Object type annotation
  id: 1,
  name: 'Steve',
  department: 'Sales',
}

// 3

interface Car {
  make: string;
  model: string;
  year: number;
}

let myCar: Car = {
  make: 'Ford',
  model: 'F-150',
  year: 2023,
}

// 4

type Device = {
  manufacturer: string;
  model: string;
  year: number;
}

let computer: Device = {
  manufacturer: 'Apple',
  model: 'Macbook Pro',
  year: 2020,
}

let smartPhone = {
  manufacturer: 'Apple',
  model: 'Iphone Pro',
  year: 2020,
  hasHeadPhoneJack: false,
}

let anotherSmartphone: Device = smartPhone; // Allowed as interface `Device` is narrower than smartPhone. `anotherSmartphone` will only contain teh manufacturer, model, and year properties as far as TypeScript is concerned, however in the JS runtime it will still contain all properties of `smartPhone` (includes `hasHeadPhoneJack`).

// 4

type Contact = { // Type alias
  firstName: string;
  lastName: string;
  age?: number; // age and isOnline are now optional properties for type `Contact`
  isOnline?: boolean;
}

// 5

interface Account {
  username: string;
  email: string;
  readonly accountCreationDate: string;
}

// Example usage:

const userAccount: Account = {
  username: "johndoe123",
  email: "john@example.com",
  accountCreationDate: "2023-01-01",
};

// 6

let randomValue: any = 'Hello world';
let upperCased: string = (randomValue as string).toUpperCase();

console.log(upperCased); // 'HELLO WORLD'

// 7

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  describe(): string {
    return `${this.name} is ${this.age} years old.`;
  }
}

const person = new Person('Steve', 30);
console.log(person.describe()); // `Steve is 30 years old`

// Alternatively, we could have written the class like so:

// class Person {
//   constructor(public name: string, public age: number) {}

//   describe(): string {
//     return `${this.name} is ${this.age} years old.`;
//   }
// }