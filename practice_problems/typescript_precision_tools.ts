// T230 - TypeScript Basics - The Art of Narrowing: TypeScript's Precision Tools

// 1

function printLength(input: string | string[]): void {
  if (Array.isArray(input)) {
    console.log(`Array count: ${input.length}`)
  } else {
    console.log(`String length: ${input.length}`)
  }
}

printLength('Hello'); // String length: 5
printLength(['hello', 'world']); // Array count: 2

// Alternatively could have used `typeof input === 'string'`

// 2

function isStringArray(input: unknown[]): boolean {
  return input.every(x => typeof x === 'string');
}

console.log(isStringArray([1, 2, 3])); // false;
console.log(isStringArray(['test', 'string'])); // true;

// 3

function isStringOr(input: string | undefined): void {
  input && input !== "" && console.log("Input is defined and not empty");
}

// 4

type Circle = {
  kind: 'circle';
  radius: number;
}

type Square = {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

// function getArea(input: Shape):number {
//   if (input.kind === 'circle') {
//     return Math.PI * (input.radius * input.radius);
//   } else {
//     return input.sideLength * input.sideLength;
//   }
// }

// console.log(getArea({ kind: "circle", radius: 10 })); // 314.159...
// console.log(getArea({ kind: "square", sideLength: 10 })); // 100

// 5

function assertNever(value: never): never {
  throw new Error(`Unhandled value: ${value}`);
}

function getArea(input: Shape):number {
  switch (input.kind) {
    case 'circle':
      return Math.PI * (input.radius * input.radius);
    case 'square':
      return input.sideLength * input.sideLength;
    default:
      return assertNever(input);
      // Compiler checks for exhastiveness
  }
}

console.log(getArea({ kind: "circle", radius: 10 })); // 314.159...
console.log(getArea({ kind: "square", sideLength: 10 })); // 100

// 6

function logUnknown(input: unknown): void {
  if (typeof input === 'string') {
    console.log(input);
  }
}

logUnknown(111); // nothing happens
logUnknown('hello world'); // logs 'hello world'