// TS 249 - Review
// Special Types
// Any
var val = 'steve'; // works
val = true; // works
val = 12; // also works.
if (typeof val === 'string') {
    console.log(val.toUpperCase());
}
else if (typeof val === 'number') {
    console.log("Val is the number ".concat(val)); // this will run
}
// Unknown
var simple = "I'll be a string";
if (typeof simple === 'string') {
    console.log('simple is a string');
}
function shapeInfo(shape) {
    var text;
    if ( // checking using a long conditional check.
    typeof shape === 'object' &&
        shape !== null &&
        'kind' in shape &&
        shape.kind === 'shape') {
        text = shape.kind;
    }
    else {
        text = 'unsure what argument is!';
    }
    return text;
}
function isShape(arg) {
    return (typeof arg === 'object' &&
        arg !== null &&
        'kind' in arg &&
        arg.kind === 'shape');
}
function shapeInfoTypePredicate(shape) {
    var text;
    if (isShape(shape)) { // type guard using a type predicate
        text = shape.kind;
    }
    else {
        text = 'unsure what argument is!';
    }
    return text;
}
function describeVehicle(vehicle) {
    switch (vehicle.kind) {
        case 'Car':
            console.log('I am a car!');
            break;
        case 'Motorcycle':
            console.log('I am a motorcycle!');
            break;
        case 'Trike':
            console.log('I am a trike!');
            break;
        default:
            var _exhaustiveCheck = vehicle; // now raises an error, as we reach the condition with the `Trike` type.
            throw new Error("Invalid vehicle: ".concat(JSON.stringify(_exhaustiveCheck)));
    }
}
function handleValue(arg) {
    if (!arg || typeof arg !== 'object') {
        return "Invalid arg";
    }
    var workingArg = arg; // type assertion to assign `arg` to `workingArg` and treat it as a `Value` type.
    return workingArg.name;
}
