// Lesson 6
function formatName(options) {
    var _a, _b;
    var firstName = (_a = options.firstName) !== null && _a !== void 0 ? _a : 'John';
    var lastName = (_b = options.lastName) !== null && _b !== void 0 ? _b : 'Doe';
    var title = options.title ? (options.title + ' ') : '';
    return "".concat(title).concat(firstName, " ").concat(lastName);
}
var formattedName = formatName({
    firstName: "Jane",
    lastName: "Smith",
    title: "Dr.",
});
console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe
