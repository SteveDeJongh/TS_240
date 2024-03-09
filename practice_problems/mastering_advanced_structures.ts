// T230 - TypeScript Basics - Dynamic Interfaces: Mastering Advanced Structures

// 1

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

let employee: Employee = {
  name: 'Steve',
  age: 30,
  employeeId: 1,
}

// 2

interface Dog {
  bark(): void;
}

interface Cat {
  meow(): void;
}

type Pet = Dog & Cat;

const pet: Pet = {
  bark: () => console.log('Woof'),
  meow: () => console.log('Meow'),
}

pet.bark(); // 'Woof'
pet.meow(); // 'Meow'

// 3

interface StringMap {
  [key: string]: string;
}

let dictionary: StringMap = {
  hello: 'world',
  goodbye: 'moon',
}

// 4

interface UserData {
  name: string;
  age: number;
  email: string;
}

type UserKeys = keyof UserData;

function printUserDataField(userData: UserData, key: UserKeys): void {
  console.log(userData[key]);
}

const userData: UserData = {
  name: 'Steve',
  age: 30,
  email: 'blah@gmail.com',
}

printUserDataField(userData, 'name'); // 'Steve'
printUserDataField(userData, 'age'); // 30
// printUserDataField(userData, 'phone'); // TypeError, 'phone' is not assignable to paramter of type "keyof userData". (aka 'phone' is not in the uniont 'name' | 'age' | 'email')

// 5

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = {
  name: 'steve',
  age: 30,
}

const userName = getProperty(user, 'name'); // works, assigns 'steve' to userName,
const userAge = getProperty(user, 'age'); // works, assigns 30 to userAge.

// const userEmail = getProperty(user, 'email'); // fails, `email` is not a key of `user`.