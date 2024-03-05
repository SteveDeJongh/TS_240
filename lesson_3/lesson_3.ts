// Lesson 3

// Practice Problems: Union Types

// 1

// function combine(a: string | number, b: string | number): string | number {
//   if (typeof a === 'string' && typeof b === 'string') {
//     return a + b;
//   } else if (typeof a === 'number' && typeof b === 'number') {
//     return a + b;
//   } else {
//     return 'Sorry, invalid entry';
//   }
// }

// const concatenated = combine("Hello, ", "World!"); // Returns "Hello, World!"
// const added = combine(5, 10); // Returns 15

// console.log(concatenated);
// console.log(added);

// Practice Problems: Function Overloads

// 1

function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error(
      "Invalid input types: both inputs must be strings or both inputs must be numbers."
    );
  }
}

const concatenated: string = combine("Hello, ", "World!"); // Type 'string | number' is not assignable to type 'string'.
// Type 'number' is not assignable to type 'string'.

const added: number = combine(5, 10); // Type 'string | number' is not assignable to type 'string'.
// Type 'string' is not assignable to type 'number'.

// Generics
function first<T>(a: T[]): T {
  return a[0];
}

console.log(typeof first(['s', 's'])); // string
console.log(typeof first([1, 's'])); // number

// Practice Problems: Generic Functions

// 1

function pair<T>(a: T, b: T): T[] {
  return [a, b];
}

const pairOfNumbers = pair(1, 2); // returns [1, 2]
const pairOfStrings = pair("hello", "world"); // returns ["hello", "world"]