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