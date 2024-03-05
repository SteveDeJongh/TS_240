// Lesson 3
// Practice Problem: Union Types
// 1
// function concatenateStrings(a: string, b: string): string {
//   return a + b;
// }
// function addNumbers(a: number, b: number): number {
//   return a + b;
// }
// const result = concatenateStrings("Hello", "World");
// const numericResult = addNumbers(1, 2);
function combine(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return 'Sorry, invalid entry';
    }
}
var concatenated = combine("Hello, ", "World!"); // Returns "Hello, World!"
var added = combine(5, 10); // Returns 15
console.log(concatenated);
console.log(added);
