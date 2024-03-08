// Lesson 6

// Practice Problems: Extracting Shared Properties to a Common Type
/*
// 1

interface Shape {
  color: string;
}

interface Rectangle extends Shape {
  length: number;
  width: number;
}

interface Circle extends Shape {
  radius: number;
}

function displayShapeInfo(shape: Shape): string {
  return "The shape is color " + shape.color;
}

// Practice PRoblems: Object Spreading

// 1

interface Person {
  name: string;
  age: number;
}

interface Address {
  street: string;
  city: string;
  country: string;
}

interface Combined {
  name: string;
  age: number;
  street: string;
  city: string;
  country: string;
  phone: string;
}

const person: Person = {
  name: "John",
  age: 30,
};

const address: Address = {
  street: "123 Main St",
  city: "Tokyo",
  country: "Japan",
};

const combined: Combined = {
  ...person,
  ...address,
  phone: "555-1234",
};

// This code will run without errors.

// Practice PRoblems: Defining Options Types

// 1

function calculateRectangleArea(width: number, height?: number) {
  const area = width * (height ?? width);
  return area;
}

console.log(calculateRectangleArea(3, 0)); // 0

// This is because of the use of the nullish coalescing operator instead of the lorgial OR operator.

*/
// 2

type NameOptions = {
  firstName?: string;
  lastName?: string;
  title?: string;
};

// function formatName(options: NameOptions): string {
//   let firstName: string = options.firstName ?? 'John';
//   let lastName: string = options.lastName ?? 'Doe';
//   let title: string = options.title ? (options.title + ' ') : '';
//   return `${title}${firstName} ${lastName}`;
// }

const formattedName = formatName({
  firstName: "Jane",
  lastName: "Smith",
  title: "Dr.",
});

console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe

// 3

function formatName({
  firstName = 'John',
  lastName = 'Doe',
  title,
}: NameOptions): string {
  let formattedName = title ? title + ' ' : '';
  formattedName += `${firstName} ${lastName}`;
  return formattedName;
}

// Practice Problems: Working with Exceptions