// Lesson 5

// Practice Problems: Extending interfaces
/*
// 1

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return "Generic animal sound";
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  fetch() {
    return `${this.name} fetches a stick.`;
  }
}

const myDog = new Dog("Rex");
console.log(myDog.fetch());

// In TypeScript

interface Animal {
  name: string;
  makeSound(): string;
}

interface Dog extends Animal {
  fetch(): string;
}

const myDog: Dog = {
  name: "Rex",
  makeSound: () => "Generic animal sound",
  fetch: () => "Rex fetches a stick.",
};

console.log(myDog.fetch());

// Practice Problems: Type Intersections

// 1

type Product = {
  name: string;
  price: number;
};

type Shipping = {
  weight: number;
  shippingCost: number;
};

// type ShippableProduct = Product & Shipping; // Using type intersections.

// const item: ShippableProduct = {
//   name: "Table",
//   price: 100,
//   weight: 20,
//   shippingCost: 30,
// };

// 2


interface ShippableProduct extends Product, Shipping {}; // Using type intersections.

const item: ShippableProduct = {
  name: "Table",
  price: 100,
  weight: 20,
  shippingCost: 30,
};

// Practice Problems: Differences between Interfaces and Types

// 1

// Yes, this will raise an error as types defined using the type aliases are `closed` and can not be changed after creation.

type Point = { x: number };
type Point = { y: number };

const point: Point = { x: 1, y: 2 };

// 2

interface UserInterface {
  name: string;
  email: string;
}

type UserType = {
  name: string;
  email: string;
};

function greetUser(user: UserType) {
  return `Hello, ${user.name}`;
}

const user: UserInterface = {
  name: "Alice",
  email: "alice@example.com",
};

console.log(greetUser(user));

// No this will not result in an error. As even though we are passing in a `user` type to `greetUser` instead of a `userType` type, thanks to TypeScripts structural type system, were concerned with the shape that the values rather than the name of the type.

// Practice Problems: Index Signatures

// 1

interface User {
  [key: number]: string;
}

const obj: User = {
  1: "Jane",
  2: "30",
  3: "female",
};

console.log(Object.keys(obj).every((key) => typeof key === "number"));

// This will result in false due to how JavaScript automatically converts keys to strings.

// 2

type User = Map<number, string>;

const obj: User = new Map();
obj.set(1, "Jane");
obj.set(2, "30");
obj.set(3, "female");

console.log(Object.keys(obj).every((key) => typeof key === "number")); // Output: true

// Practice Problems: Arrays and Index Signatures

// 1

*/

type CustomArray = {
  [index: number]: string | number;
};

const customArray: CustomArray = ["apple", 42, "banana"];

// function processCustomArray(arr: CustomArray) {
//   let result: string[] = [];

//   Object.keys(arr).forEach(v => {
//     if (typeof arr[v] === 'string') {
//       result.push(arr[v].toUpperCase());
//     }
//   })

//   return result;
// }

const result = processCustomArray(customArray);
console.log(result); // Output: ["APPLE", "BANANA"]

// Alt

function processCustomArray(arr: CustomArray) {
  if (Array.isArray(arr)) {
    return arr
      .filter((element) => typeof element === "string")
      .map((element) => element.toUpperCase());
  }
  return [];
}

// Practice Problems: The Object Type

// 1

// function getProperty(obj: {[key: string]: unknown}, key: string) {
//   return obj[key];
// }

// 2

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const obj = {
  name: "John",
  age: 30,
};

const x = getProperty(obj, "name");
const y = getProperty(obj, "age");

// Practice Problems: The keyof Operator

// 1

interface Student {
  name: string;
  age: number;
}

let key: keyof Student = "grade"; // TypeError
key = 'name'; // works
key = 'age'; // works

// Yes this will result in a type error. The type of `key` is essentially 'name' | 'age', and as the string literal 'grade' is neither of those, the error is raised.

// Practice Problems: Generic constraints

// 1

function getProperty<T, K extends keyof T>(obj: T, key: K):  T[K] {
  return obj[key];
}