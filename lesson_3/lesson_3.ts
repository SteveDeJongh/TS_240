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

// Practice Problems: Generic Objects

// 1

type Pair<T, U> = {
  first: T;
  second: U;
};

const myPair: Pair<number, string> = {
  first: 42,
  second: "Answer",
};

const yourPair: Pair<number, string> = {
  first: "Another answer",
  second: 42,
};

// The code misuses the generic object type for the yourPair object. The yourPair object is declared as a Pair<number, string>, but has a first property of type string and a second property of type number, which violates the expected generic object types.

// 2

type KeyValuePairs<T, U> = {
  key: T;
  values: U[];
};

const myPairs: KeyValuePairs<string, number> = {
  key: "Numbers",
  values: [1, 2, 3, 4, 5],
};

const yourPairs: KeyValuePairs<number, string> = {
  key: 42,
  values: ["One", "Two", 3, "Four"],
};

// The code missues the generic object type for the yourPair object. This is because we attempt to assign a number within the array assigned to values, which is expecting an array of only type `string` elements.

// Practice Problems: Generic Arrays (Does the code below use the generic array type correctly?)

// 1

let numbers: Array<number> = [1, 2, 3];

// Yes

// 2

let strings: string[] = ["apple", "banana", "cherry"];

// Yes

// 3

let bools: boolean[[]] = [true, false, true];

// No, the correct syntax would be `boolean[]`.

// 4

type FruitNames = "apple" | "banana" | "cherry";
const fruits: Array<FruitNames> = ["apple", "banana", "mango"];

// The code properly defines a generic array, however the last element in the `fruits` array will raise a TypeError as the `FruitNames` type does not include the string ltieral `mango`.