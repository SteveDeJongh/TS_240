// T230 - TypeScript Basics - Flexible Types: Generics and More
// 1
function wrapInArray(input) {
    return [input];
}
console.log(wrapInArray("hello")); // ['hello']
console.log(wrapInArray(100)); // [120]
// 2
function printId(input) {
    if (typeof input === 'number') {
        console.log('Your ID is a number.');
    }
    else {
        console.log("Your ID is a string.");
    }
}
printId(101); // Your ID is a number.
printId('101'); // Your is id a string.
// 3
function firstElement(input) {
    return input[0];
}
console.log(firstElement([7, 9, 11])); // 7;
console.log(firstElement([])); // undefined;
var kvp1 = {
    key: 'hello',
    value: 1,
};
// 5
function filterByType(arr, type) {
    return arr.filter(function (x) { return typeof x === type; });
}
console.log(filterByType(["hello", "world", 42, true], "string")); // ["hello", "world"]
