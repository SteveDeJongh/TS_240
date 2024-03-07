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