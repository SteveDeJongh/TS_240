// Lesson 5

// Practice Problems: Extending interfaces

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

