// T230 - TypeScript Basics - TypeScript Fundamentals: Playing with Types
// 1
var string = 'string';
var number = 1;
var bool = true;
// 2
var colors = ['blue', 'red'];
// 3
function greet(name, age) {
    return "Hello, your name is ".concat(name, ", and you are ").concat(age, " years old.");
}
// 4
function toUpperCaseArray(input) {
    return input.map(function (el) { return el.toUpperCase(); });
}
console.log(toUpperCaseArray(colors)); // ['BLUE', 'RED'];
// 5
function logMessage(input) {
    console.log(input);
}
logMessage('Hello world!'); // logs 'Hello world!';
var move = 'left';
// If we attempt to assign any other string that those listed in the type `Direction` as string literals, it would raise a type error.
// move = 'blah'; // 'blah' is not assignable to type 'Direction';
// 7
var userID = 1;
// If we now attempt to assign a string to the `userID`, it would raise a typeError.
// userID = 'A'; // Type `string` is not assignable to type `number`.
// This is because typeScript infers the `number` type for the `userID` variable based on the initial value assigned to it.
