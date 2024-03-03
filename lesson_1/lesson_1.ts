// Practice Problems 1

// 1

// Yes, because x and y are both numbers, resulting in addition rather than concatenation and returns a integer rather than a string.

// 2

// No, as this expression 2 + "2" will result in a string value type. 

// 3

// Yes, because the expression `2 === "2"` will raise an error stating that the comparison appears to be unintential as a string type and a number type will not have any overlap, and therefor the strict equality operator will never return true.

// 4

// No because of short circuit evaluation.

// 5

// Yes

// 6

// Yes, we can not reassign a `undefined` type varaible to a new type.

// Practice Problems 2: Arrays and Tuples

// 1

// Yes, only strings are accepted types within the array.

// 2

// Yes this will raise an error. Even though the typle is defined with only 2 indices, both of type number, the error raised will be due to the length, but instead because the new element being pushed is of type "string".

// 3

// No, this will not raise an error as a number is a valid type in the tuple. The "fixed length" of a tuple of not enforced as a fixed length array does not exist in JS.

// 4

// Yes, as the element at index 0 is restricted to teh type `number`, and we're are attempting to assign a type `string`.

// 5

// : (string | boolean)[]

// Practice Problems 3: Prameter Types and return types

// 1

function subtract(initial: number, values: number[]):string {
  let remaining = initial;
  for (const value of values) {
    remaining -= value;
  }
  return "The result is: " + remaining;
}

// 2

function displayInfo(
  name: string,
  age?: number,
  country: string = "USA"
): string {
  return `${name}, ${age ? age : "unknown age"}, from ${country}`;
}

console.log(displayInfo("Alice", 30)); // "Alice, 30, from USA."
console.log(displayInfo("Bob", undefined, "Canada")); // "Bob, unknown age, from Canada."
console.log(displayInfo("Charlie", 25, "UK")); // "Charlie, 25, from UK."

// Practice Problems 4: Working with built-in JS methods

// 1

const numbersInStringFormat = ["10", "20", "30", "40"];

function convertToNumbers(arr: string[]): number[] {
  // Your implementation here
  return arr.map(x => Number(x));
}

console.log(convertToNumbers(numbersInStringFormat)); // [10, 20, 30, 40]

// Practice Problem 5: void

// 1

function logSum(a: number, b: number): void {
  const sum = a + b;
  console.log("The sum of", a, "and", b, "is", sum);
  return sum;
}

logSum(3, 4);

// Yes, because we attempt to return a tpye "number" when our return value of the function is typed as void.

// Practice PRoblems 6: Literal Types

// 1

function calculate(operation: "add" | "subtract" | "multiply" | "divide", a: number, b: number) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      throw new Error("Invalid operation");
  }
}

// Alternatively we can define a type and assign it as teh type for parameter `operation`

type Operation = "add" | "subtract" | "multiply" | "divide";

// Ex: function calculate(operation: Operation, a: number, b: number) ...

// Practice Problems 7: Explciit Typing vs Type Inference

// 1

function concatenate(a, b) {
  return a + b;
}

const result = concatenate("Hello", "World");
const numericResult = concatenate(1, 2);

console.log(result);
console.log(numericResult);

// On line 134, instead of "12" being returned, we'll see 3. 

// Practice problem 8: Type Errors vs Syntax Errors

// 1

// Type error, as text is expecting a type string and we are attempting to assign a number type.

// 2

// No errors

// 3

// Syntax Error