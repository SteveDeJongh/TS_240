// TS 249 - Review

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

let f: F = {id: '1'}; // Type 'string' is not assignable to type 'never';

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

interface Employee extends Person {
  id: number; // Error is raised if Person `id: string`;. `Person` must include `number` as a valid type for `id`, or change Employee `id` to type `string`.
  job: string;
}

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