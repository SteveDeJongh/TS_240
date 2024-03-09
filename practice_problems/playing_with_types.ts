// T230 - TypeScript Basics - TypeScript Fundamentals: Playing with Types

// 1

let string: string = 'string';
let number: number = 1;
let bool: boolean = true;

// 2

let colors: string[] = ['blue', 'red'];

// 3

function greet(name: string, age: number):string {
  return `Hello, your name is ${name}, and you are ${age} years old.`;
}

// 4

function toUpperCaseArray(input: string[]): string[] {
  return input.map(el => el.toUpperCase());
}

console.log(toUpperCaseArray(colors)); // ['BLUE', 'RED'];

// 5

function logMessage(input: string): void {
  console.log(input);
}

logMessage('Hello world!'); // logs 'Hello world!';

// 6

type Direction = 'left' | 'right' | 'up' | 'down';

let move: Direction = 'left';

// If we attempt to assign any other string that those listed in the type `Direction` as string literals, it would raise a type error.
// move = 'blah'; // 'blah' is not assignable to type 'Direction';

// 7

let userID = 1;

// If we now attempt to assign a string to the `userID`, it would raise a typeError.

// userID = 'A'; // Type `string` is not assignable to type `number`.

// This is because typeScript infers the `number` type for the `userID` variable based on the initial value assigned to it.