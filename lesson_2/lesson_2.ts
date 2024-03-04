// Lesson 2

// Practice problems 1: Type Aliases

// 1

// Yes, this code will raise a typeerro because on lines 18 and 19 we are attempting to asign a number to a string type, and a string to a number type.

// Practice Problems 2: Object Types

// 1

// Length

// Practice Problems 3: Interfaces

// 1

interface Author {
  firstName: string;
  lastName: string;
}

interface Book {
  title: string;
  author: Author;
  publicationDate: number;
  genres: string[];
}

const book = {
  title: "The Great Gatsby",
  author: {
    firstName: "F. Scott",
    lastName: "Fitzgerald",
  },
  publicationDate: 1925,
  genres: ["Tragedy", "Realism"],
};

// Practice Problems: Structural Typing

// 1

// No, this code will not raise an error as the type 'Apple' has all of the required properties by type 'Fruit'.

// 2

// This will raise an error on line 5 when we atempt to assign et to `john`. This is because `et` does not contain the required `country` property for the `Human` type.

// 3

// Yes, on line 7, when we attempt to retrieve the `sideLength` property on variable `shape`. Even though we assign teh `redSquare` variable to `shape` on `line 5`, which initially does include the `sideLength` property, that property is not assigned in the `shape` variable, as that variable is of type `Shape` which does not include the property.

// Practice Problems: Optional Properties

// 1

interface UserInfo {
  name: string;
  email?: string;
  age?: number;
}

// function displayUserInfo(userInfo: UserInfo): string {
//   // Your implementation here
//   return `Name: ${userInfo.name}` + userInfo.email ? ', Emai: ' + userInfo.email : '' + userInfo.age ? ', Age: ' + userInfo.age : '';
// }

// Cleaner:

function displayUserInfo(userInfo: UserInfo): string {
  const email = userInfo.email ? userInfo.email : "N/A";
  const age = userInfo.age ? userInfo.age : "unknown";

  return `Name: ${userInfo.name}, Email: ${email}, Age: ${age}`;
}

// Practice Problems: Rearonly Properties

// 1

interface Point {
  readonly x: number;
  readonly y: number;
}

function movePoint(point: Point, dx: number, dy: number): Point {
  // Your implementation here
  return {
    x: point.x + dx,
    y: point.y + dy,
  };
}