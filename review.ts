// TS 249 - Review

// Complex Types

let array: Array<string> = ['hello'];
let altArr: string[] = ['hello'];

let tuple: [string, string, number] = ['Tuples have a fixed', 'length arangement', 100];

// Special Types

// Any

let val: any = 'steve'; // works
val = true; // works
val = 12; // also works.

if (typeof val === 'string') {
  console.log(val.toUpperCase());
} else if (typeof val === 'number') {
  console.log(`Val is the number ${val}`) // this will run
}

// Unknown

let simple: unknown = "I'll be a string";

if (typeof simple === 'string') {
	console.log('simple is a string');
}

function shapeInfo(shape: unknown): string {
  let text: string;

  if ( // checking using a long conditional check.
    typeof shape === 'object' &&
    shape !== null &&
    'kind' in shape &&
    shape.kind === 'shape'
  ) {
    text = shape.kind;
  } else {
    text = 'unsure what argument is!';
  }

  return text;
}

type Shape = {
  kind: string;
  area: number;
}

function isShape(arg: unknown): arg is Shape { // Type predicate
  return (
    typeof arg === 'object' &&
    arg !== null &&
    'kind' in arg &&
    arg.kind === 'shape'
  );
}

function shapeInfoTypePredicate(shape: unknown): string {
  let text: string;

  if (isShape(shape)) { // type guard using a type predicate
    text = shape.kind;
  } else {
    text = 'unsure what argument is!';
  }

  return text;
}

// Never

type Car = {
  kind: 'Car';
  make: string;
  wheels: number;
}

type Motorcycle = {
  kind: 'Motorcycle';
  make: string;
  wheels: number;
}

// type Vehicle = Car | Motorcycle;

// function describeVehicle(vehicle: Vehicle):void {
//   switch (vehicle.kind) {
//     case 'Car':
//       console.log('I am a car!');
//       break;
//     case 'Motorcycle':
//       console.log('I am a motorcycle!');
//       break;
//   }
// }

type Trike = {
  kind: 'Trike';
  make: string;
  wheels: number;
}

type Vehicle = Car | Motorcycle | Trike; // Could potentially break the current implementation of describeVehicle

function describeVehicle(vehicle: Vehicle):void {
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
      const _exhaustiveCheck: never = vehicle; // now raises an error, as we reach the condition with the `Trike` type.
      throw new Error(`Invalid vehicle: ${JSON.stringify(_exhaustiveCheck)}`);
  }
}

// Type Assertions

type Value = {
	name: string;
	age: number;
}

function handleValue(arg: unknown):string {
	if (!arg || typeof arg !== 'object') {
		return "Invalid arg";
	}

	let workingArg = arg as Value; // type assertion to assign `arg` to `workingArg` and treat it as a `Value` type.
	return workingArg.name;
}

// Type intersections

type A = {
  name: string;
}

type B = {
  id: number;
}

type C = A & B;

// Type intersections with same property name.

type D = {
  id: string;
}

type F = B & D;

// let f: F = {id: '1'}; // Type 'string' is not assignable to type 'never';

// Interfaces

interface Boat {
	model: string;
	year: number;
}

// Extending an interface

interface Watercraft {
	model: string;
	year: number;
}

interface JetSki extends Watercraft {
	kind: 'Jetski';
}

let jetSki: JetSki = {
	kind: 'Jetski',
	model: 'Seadoo',
	year: 2020,
}

// Extending an interface with same property name.

interface Person {
  id: string;
  name: string;
}

// interface Employee extends Person {
//   id: number; // Error is raised if Person `id: string`;. `Person` must include `number` as a valid type for `id`, or change Employee `id` to type `string`.
//   job: string;
// }

// Structural Typing

type twoWheeler = {
	make: string;
}

type Bike = {
	make: string;
	model: string;
}

let kona: Bike = {make: 'Kona', model: 'Process'};
let vehicle: twoWheeler = kona; // works just fine.

console.log(vehicle.make); // logs 'Kona';
// console.log(vehicle.model); // raises a TypeErrorl `model` does not exist on type `twoWheeler`;

// Type widening and narrowing

// Widening

type Union = string | number;

// Narrowing

type Shirts = { color: string; size: string; }
type Pants = { color: string; size: string; length: number; }
type Clothing = Shirts | Pants;

// Equality

function example(arg1: string | number, arg2: string | boolean) {
  if (arg1 === arg2) {
    // arg1 and arg2 must both be strings
  } else {
    // do something individually with each arg.
  }
}

// Truthiness

function example2(optionalArg?: string) {
  if (optionalArg) {
    console.log(optionalArg.toUpperCase())
    // do something with the argument that is of type `string`
  }
}

// typeof

function example3(arg: string | number) {
  if (typeof arg === 'string') {
    // do something with the arg when it's a string;
  } else {
    // do something with the arg when it's a number;
  }
}

// IN

function defineClothing(piece: Clothing):void {
  console.log(`The piece is ${piece.color}`);
  // console.log(`The pants are ${piece.length} long.`); // raises an error as `length` is not available on all types within the `Clothing` type.
  if ('length' in piece) {
    console.log(`The pants are ${piece.length} long.`); // works.
  }
}

// instanceOf

function example4(arg: Date | string) {
  if (arg instanceof Date) {
    // do something with the arg as a date object.
  } else {
    // do something when the arg is a string.
  }
}

// Type Predicates

// A type predicate is a `type as DesiredType` return value for a function

type Dog = {
  breed: string;
}

let husky: Dog = {breed: 'husky'}

function isDog(pet: Dog | Person): pet is Dog {
  return (pet as Dog).breed !== undefined;
}

if (isDog(husky)) {
  console.log(`My dog is a ${husky.breed}`);
} else {
	console.log('I am not a dog');
}

// Discriminated unions

interface Goldfish {
  kind: "Goldfish";
  age: number;
  bowl: string;
}

interface Shark {
  kind: "Shark";
  age: number;
  region: string;
}

type Fish = Goldfish | Shark;

function sharkOrFish(fish: Fish): void {
  if (fish.kind === "Goldfish") {
    console.log(fish.bowl); // Ok, because fish will be a Goldfish type here.
    console.log(`I'm a goldfish and live in bowl!`);
  } else {
    console.log(`I'm a shark and live in the ocean!`);
  }
}

// Never

function isAFish(fish: Fish): void {
  switch(fish.kind) {
    case 'Shark':
      console.log('I am a shark!');
      break;
    case 'Goldfish':
      console.log('I am a goldfish!');
      break;
    default:
      const _shouldNeverReach: never = fish;
      return _shouldNeverReach;
  }
}

// Index Signatures

interface People {
  [name: string]: string;
}

// interface Account {
//   [name: string]: string;
//   accountId: number; // raises an error.
// }

interface Account {
  [name: string]: string | number;
  accountId: number; // works.
}

// Utility Types

// Pick and Omit

interface User {
	name: string;
	email: string;
	age: number;
}

type NameOnly = Pick<User, "name">; // {name: string;}
type EmailandAge = Pick<User, "email" | "age">; // {email: string; age: number;}

// Parameters

type functionType = (a: string, b: number) => number;

type onlyParams = Parameters<functionType>;// 

let fromParamsCall: onlyParams = ['string', 1];

// With Rest parameter

function prefixValues(prefix: string, ...values: string[]):string {
	return values.map(val => prefix + ' ' + val).join(', ');
}

type prefixType = Parameters<typeof prefixValues>; // [string, ...string[]];
let input: prefixType = ['Hello', 'steve', 'tom', 'gerald'];

console.log(prefixValues(...input));// 'Hello steve, Hello tom, Hello gerald

// ReturnType

type returnType = (() => string); // returnType = string;

function createFish(name: string, species: string) {
  return {name, species};
}

type Fish1 = ReturnType<typeof createFish>;

// Partial

type Todo1 = {
	name: string;
	description: string;
}

function updateTodo(todo: Todo1, updates: Partial<Todo1>) {
	return {...todo, ...updates}; // updates spread after the intial todo spread will cause any properties already
																// defined in todo to be update with the values from updates.
}

// Readonly / Require

type Todo = { name: string; desc?: string; };

let readOnly: Readonly<Todo> = {name: 'read only string'};
let required: Required<Todo> = {name: 'Required string', desc: 'required desc'};

// Generics

function firstVal<T>(arr: T[]):T { // Here, T is the type parameter with the <generic>
	return arr[0];
}

type User5<T> = {
	name: string;
  age: T; // An object with a type `User` can assign any type to the `age` property.
}

let user:User5<string> = {
	name: 'steve',
	age: '30',
}

let user2: User5<number> = {
  name: 'steve',
  age: '30'; // Error is raised, we've specified this should be a number.
}

// Extending an object, ensuring a property exists in the passed in object.
function howOldAreYou<T extends {age: number}>(person: T):void {
	console.log(`This person is ${person.age} years old.`);
}

let person = {name: 'steve', age: 22};
howOldAreYou(person); // Variable `person` has an `age` property witha  type number;
let invalidPerson = {name: 'ralf'};
// howOldAreYou(invalidPerson); // Error is raised as invalidPerson is missing `age` property.

// Operators

// keyof operator

type someType = {name: string; age: number; gender: string; alive: boolean;};
type someTypeKeyOf = keyof someType;

let aType: someType = {name: 'hello', age: 22, gender: 'wee', alive: true};
let test: someTypeKeyOf = 'name'; // the string `name` is a key of `someType`.

// typeof

console.log(typeof "Hello World"); // string

type newType = {name: string; age: number;}
let newObj: newType = {name: 'steve', age: 30};

console.log(typeof newObj); // object

// Updating or Extending

type Person1 = {
	name: string;
}

type Employee1 = Person1 & {
	id: number;
}

// assigning another property to Employee
// type Employee1 = {jobTitle: string;};

interface Person2 {
  name: string;
}

interface Employee2 extends Person2 {
	id: number;
}

interface Employee2 {
  jobTitle: string;
}

let emp: Employee2 = {name: 'steve', id: 2, jobTitle: 'sales'}; // interface now includes properties of Person2 and additional `jobTitle` prop.