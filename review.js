// TS 249 - Review
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var aType = { name: 'hello', age: 22, gender: 'wee', alive: true };
var test = 'name'; // the string `name` is a key of `someType`.
// typeof
console.log(typeof "Hello World"); // string
var newObj = { name: 'steve', age: 30 };
console.log(typeof newObj); // object
////////////////////////////////// Type Annotations //////////////////////////////////
var stringTyped;
function typgingParams(param1) {
    //...
}
function typingReturnValue(param) {
    return "blah";
}
var objectTyping = {
    name: 'steve',
    age: 30,
};
var typedArray;
// OR
var altTypedArray;
////////////////////////////////// Primitive Types //////////////////////////////////
// Primitives:
// `string`, `number`, `boolean`, `bigint`, `symbol`, `null` and `undefined`.
// Complex Types
var array = ['hello'];
var altArr = ['hello'];
var tuple = ['Tuples have a fixed', 'length arangement', 100];
var literal = 'literal1';
var arrrr = [1, 2, 3, 4];
console.log(arrrr[6]);
////////////////////////////////// Typing an objects properties //////////////////////////////////
var caroo = {
    name: 'steve',
    year: 2000,
};
var newCar = {
    make: 'mazda',
    year: 2023,
};
////////////////////////////////// Special Types //////////////////////////////////
////////////////////////////////// Any
var val = 'steve'; // works
val = true; // works
val = 12; // also works.
if (typeof val === 'string') {
    console.log(val.toUpperCase());
}
else if (typeof val === 'number') {
    console.log("Val is the number ".concat(val)); // this will run
}
////////////////////////////////// Unknown 
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
var s = 'ssss';
// let b: string = s; // Can not assign type unkown to type string.
var c;
if (typeof s === 'string') {
    c = s;
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
//////////////////////////////// Typing Parameters and Return Values ////////////////////////////////
function functionName(param, param2) {
    return "".concat(param, " ").concat(param2);
}
function defaultAndOptionalParam(def, param) {
    if (def === void 0) { def = 'some String value'; }
    console.log(def.toUpperCase());
    if (param) {
        console.log(param.toLocaleUpperCase()); // param will be a string here.
    }
    return "Some string";
}
defaultAndOptionalParam('first arg', 'second arg'); // FIRST ARG
function explainOption(arg) {
    return "".concat(arg.name, " is ").concat(arg.age, " years old.");
}
var n = {
    name: 'steve',
    age: 30,
};
console.log(explainOption(n)); // Works, type `Option2` is the same shape as `Option1`.
var kona = { make: 'Kona', model: 'Process' };
var vehicle = kona; // works just fine.
console.log(vehicle.make); // logs 'Kona';
var jetSki = {
    kind: 'Jetski',
    model: 'Seadoo',
    year: 2020,
};
function handleValue(arg) {
    if (!arg || typeof arg !== 'object') {
        return "Invalid arg";
    }
    var workingArg = arg; // type assertion to assign `arg` to `workingArg` and treat it as a `Value` type.
    return workingArg.name;
}
var cObj = {
    name: 'steve',
    id: 2,
};
function handlePet(pet) {
    // console.log(`${pet.whiskerLength}`)// Not accessible, `pet` is typed to both Dog and Cat and is too wide.
    if ('whiskerLength' in pet) {
        console.log("".concat(pet.whiskerLength)); // works just fine, only a Cat2 type cna be here.
    }
    console.log(pet.age, pet.breed);
}
//////////////////////////////// Narrowing ////////////////////////////////
// Equality
function example(arg1, arg2) {
    if (arg1 === arg2) {
        // arg1 and arg2 must both be strings
    }
    else {
        // do something individually with each arg.
    }
}
// Truthiness
function example2(optionalArg) {
    if (optionalArg) {
        console.log(optionalArg.toUpperCase());
        // do something with the argument that is of type `string`
    }
}
// typeof
function example3(arg) {
    if (typeof arg === 'string') {
        // do something with the arg when it's a string;
    }
    else {
        // do something with the arg when it's a number;
    }
}
function defineClothing(piece) {
    console.log("The piece is ".concat(piece.color));
    // console.log(`The pants are ${piece.length} long.`); // raises an error as `length` is not available on all types within the `Clothing` type, in this case the `Shirts` type.
    if ('length' in piece) {
        console.log("The pants are ".concat(piece.length, " long.")); // works, as we've now ensure that only
        // a `Pants` type can make it here.
    }
}
// instanceOf
function example4(arg) {
    if (arg instanceof Date) {
        console.log(arg.getMonth); // Works, arg here is a `Date` object.
        // do something with the arg as a date object.
    }
    else {
        // do something when the arg is a string.
    }
}
var husky = { breed: 'husky' };
function isDog(pet) {
    return pet.breed !== undefined;
}
if (isDog(husky)) {
    console.log("My dog is a ".concat(husky.breed));
}
else {
    console.log('I am not a dog');
}
function sharkOrFish(fish) {
    if (fish.kind === "Goldfish") {
        console.log(fish.bowl); // Ok, because fish will be a Goldfish type here.
        console.log("I'm a goldfish and live in bowl!");
    }
    else {
        console.log("I'm a shark and live in the ocean!");
    }
}
var fish = {
    kind: 'Goldfish', // The string literal for the discrimant property still needs to be set on the object.
    age: 22,
    bowl: 'home',
};
// Never
function isAFish(fish) {
    switch (fish.kind) {
        case 'Shark':
            console.log('I am a shark!');
            break;
        case 'Goldfish':
            console.log('I am a goldfish!');
            break;
        default:
            var _shouldNeverReach = fish;
            return _shouldNeverReach;
    }
}
var person2 = { age: '30', }; // works
var account1 = {
    accountId: 2,
    name: 'checking',
}; // works
var account2 = {
    accountId: 2,
    2: 'checking',
};
var fromParamsCall = ['string', 1];
// With Rest parameter
function prefixValues(prefix) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return values.map(function (val) { return prefix + ' ' + val; }).join(', ');
}
var input = ['Hello', 'steve', 'tom', 'gerald'];
console.log(prefixValues.apply(void 0, input)); // 'Hello steve, Hello tom, Hello gerald
function createFish(name, species) {
    return { name: name, species: species };
}
function updateTodo(todo, updates) {
    return __assign(__assign({}, todo), updates); // updates spread after the intial todo spread will cause any properties already
    // defined in todo to be update with the values from updates.
}
var readOnly = { name: 'read only string' };
var required = { name: 'Required string', desc: 'required desc' };
//////////////////////////////// Generics ////////////////////////////////
function firstVal(arr) {
    return arr[0];
}
var user = {
    name: 'steve',
    age: '30',
};
var user2 = {
    name: 'steve',
    // age: '30'; // Error is raised, we've specified this should be a number.
    age: 30,
};
var user3 = {
    name: 'steve',
    age: 20,
};
// Extending an object, ensuring a property exists in the passed in object.
function howOldAreYou(person) {
    console.log("This person is ".concat(person.age, " years old."));
}
var person = { name: 'steve', age: 22 };
howOldAreYou(person); // Variable `person` has an `age` property witha  type number;
var invalidPerson = { name: 'ralf' };
var emp = { name: 'steve', id: 2, jobTitle: 'sales' }; // interface now includes properties of Person2 and additional `jobTitle` prop.
var firstName = { name: 'steve' };
var firstAge = { age: 23 };
var bothA = { name: 'steve' }; // valid
var bothB = { name: 'steve', age: 12 }; // valid
var bothC = { age: 23 }; // valid
// let bothD: hasBothAnd = {name: 'steve'}; // invalid
var bothE = { name: 'steve', age: 12 }; // valid
var animalA = { name: 'john', age: 22 }; // valid
var animalC = { name: 'john' }; // valid
var jkl = { name: 'steve', age: 2 };
var sObj = { name: 'steve', age: 2 };
//
