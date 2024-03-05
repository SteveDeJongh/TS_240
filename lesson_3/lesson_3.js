// Lesson 3
function combine(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        throw new Error("Invalid input types: both inputs must be strings or both inputs must be numbers.");
    }
}
var concatenated = combine("Hello, ", "World!"); // Type 'string | number' is not assignable to type 'string'.
// Type 'number' is not assignable to type 'string'.
var added = combine(5, 10); // Type 'string | number' is not assignable to type 'string'.
// Type 'string' is not assignable to type 'number'.
function first(a) {
    return a[0];
}
console.log(typeof first(['s', 's']));
