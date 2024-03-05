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