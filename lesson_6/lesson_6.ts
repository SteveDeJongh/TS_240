// Lesson 6

// Practice Problems: Extracting Shared Properties to a Common Type
/*
// 1

interface Shape {
  color: string;
}

interface Rectangle extends Shape {
  length: number;
  width: number;
}

interface Circle extends Shape {
  radius: number;
}

function displayShapeInfo(shape: Shape): string {
  return "The shape is color " + shape.color;
}

// Practice PRoblems: Object Spreading

// 1

interface Person {
  name: string;
  age: number;
}

interface Address {
  street: string;
  city: string;
  country: string;
}

interface Combined {
  name: string;
  age: number;
  street: string;
  city: string;
  country: string;
  phone: string;
}

const person: Person = {
  name: "John",
  age: 30,
};

const address: Address = {
  street: "123 Main St",
  city: "Tokyo",
  country: "Japan",
};

const combined: Combined = {
  ...person,
  ...address,
  phone: "555-1234",
};

// This code will run without errors.

// Practice PRoblems: Defining Options Types

// 1

function calculateRectangleArea(width: number, height?: number) {
  const area = width * (height ?? width);
  return area;
}

console.log(calculateRectangleArea(3, 0)); // 0

// This is because of the use of the nullish coalescing operator instead of the lorgial OR operator.

// 2

type NameOptions = {
  firstName?: string;
  lastName?: string;
  title?: string;
};

// function formatName(options: NameOptions): string {
//   let firstName: string = options.firstName ?? 'John';
//   let lastName: string = options.lastName ?? 'Doe';
//   let title: string = options.title ? (options.title + ' ') : '';
//   return `${title}${firstName} ${lastName}`;
// }

const formattedName = formatName({
  firstName: "Jane",
  lastName: "Smith",
  title: "Dr.",
});

console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe

// 3

function formatName({
  firstName = 'John',
  lastName = 'Doe',
  title,
}: NameOptions): string {
  let formattedName = title ? title + ' ' : '';
  formattedName += `${firstName} ${lastName}`;
  return formattedName;
}

// Practice Problems: Working with Exceptions

// 1

function sqrt(x: number): number {
  if (x < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(x);
}

function safeSqrt(x: number): number {
  // Implement this function.
  try {
    return sqrt(x);
  } catch(e: unknown) {
    if (e instanceof Error) {
     return -1; 
    } else {
      throw e;
    }
  }
}

console.log(safeSqrt(-2)); // -1
console.log(safeSqrt(10)); // 3.16...

// Practice Problems: Workign with Promises: Async/Await

// 1

async function getData(url: string): Promise<void> {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

// Practice Problems: Rejected Promises
*/

// 1

async function getData(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else if (typeof error === 'string') {
      console.log(error);
    } else {
      throw new Error('We can`t handle that!');
    }
  }
}

// Practice Problems: Pick and Omit

// 1

interface User {
  name: string;
  email: string;
  age: number;
}

type NameOnly = Pick<User, "name1">; // Raises an error as `name1` is not a property in `User`.
type WithoutName = Omit<User, "name1">;

// Practice Problems: ReturnType and Parameters

// 1

// The error here is that we're attempting to access teh paramters and return type of a function, and not the `typeof function`

function addNumbers(a: number, b: number): number {
  return a + b;
}

type AddNumbersParams = Parameters<typeof addNumbers>;
type AddNumbersReturnType = ReturnType<typeof addNumbers>;

type AddNumbersFunction = (...args: AddNumbersParams) => AddNumbersReturnType;

// Practice Problems: Partial

// 1

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Sample Product",
    price: 49.99,
    description: "A sample product for demonstration",
  },
];

function updateProduct(
  productId: number,
  updatedValues: Partial<Product>
): void {
  // Your implementation here:
  // Find product to update by productId
  // If found, apply partial update with using object spreading
  // Else log out "Product not found"
  let prodIdx = products.findIndex(prod => prod.id === productId);

  if (prodIdx !== -1) {
    products[prodIdx] = {...products[prodIdx], ...updatedValues};
  } else {
    console.log('Product not found.');
  }
}

updateProduct(1, {
  name: "Updated Product Name",
  price: 99.99,
});

// Practice Problems: Object Values at Runtime

// 1

// This code will run without issues as we use a `type assertion` changing the `userSettings` object type to `any`, turning off any type checking, and allowing the changes to be made to read only properties.

// `light`
// [`email`, `push`, `sms`]