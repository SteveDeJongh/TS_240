// T230 - TypeScript Basics - Flexible Types: Generics and More

// 1

function wrapInArray(input: string | number): Array<string | number> {
  return [input];
}

console.log(wrapInArray("hello")); // ['hello']
console.log(wrapInArray(100)); // [120]

// 2

function printId(input: string | number): void {
  if (typeof input === 'number') {
    console.log('Your ID is a number.');
  } else {
    console.log(`Your ID is a string.`);
  }
}

printId(101); // Your ID is a number.
printId('101'); // Your is id a string.

// 3

function firstElement<T>(input: T[]): T | undefined {
  return input[0];
}

console.log(firstElement([7, 9, 11])) // 7;
console.log(firstElement([])) // undefined;

// 4

interface KeyValuePair <Key, Value>{
  key: Key;
  value: Value;
}

let kvp1: KeyValuePair<string, number> = {
  key: 'hello',
  value: 1,
}

// 5

function filterByType<T>(arr: any[], type: string): T[] {
  return arr.filter(x => typeof x === type);
}

console.log(filterByType<string>(["hello", "world", 42, true], "string")); // ["hello", "world"]
