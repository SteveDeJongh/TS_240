// T230 - TypeScript Basics - The Art of Narrowing: TypeScript's Precision Tools
// 1
function printLength(input) {
    if (Array.isArray(input)) {
        console.log("Array count: ".concat(input.length));
    }
    else {
        console.log("String length: ".concat(input.length));
    }
}
printLength('Hello'); // String length: 5
printLength(['hello', 'world']); // Array count: 2
// Alternatively could have used `typeof input === 'string'`
// 2
function isStringArray(input) {
    return input.every(function (x) { return typeof x === 'string'; });
}
console.log(isStringArray([1, 2, 3])); // false;
console.log(isStringArray(['test', 'string'])); // true;
// 3
function isStringOr(input) {
    input && input !== "" && console.log("Input is defined and not empty");
}
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
function assertNever(value) {
    throw new Error("Unhandled value: ".concat(value));
}
function getArea(input) {
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
function logUnknown(input) {
    if (typeof input === 'string') {
        console.log(input);
    }
}
logUnknown(111); // nothing happens
logUnknown('hello world'); // logs 'hello world'
