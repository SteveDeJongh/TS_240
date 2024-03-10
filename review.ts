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