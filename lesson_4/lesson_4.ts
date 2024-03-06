// Lesson 4

// Practice Problems: Narrowing with Type Guards

// Will the following code result in a type error or execute without any issues?

// 1

// type Video = {
//   title: string;
//   creator: string;
// };

// function printVideoInfo(videoOrVideos: Video | Video[]) {
//   if ("length" in videoOrVideos) {
//     videoOrVideos.forEach((v) =>
//       console.log(`"${v.title}" by ${v.creator}`)
//     );
//   } else {
//     console.log(`"${videoOrVideos.title}" by ${videoOrVideos.creator}`);
//   }
// }

// printVideoInfo({
//   title: "Introduction to TypeScript",
//   creator: "John Doe",
// });

// Yes, this will work as the `length` property is only accessible on an array of video Types, and therefor thanks to flow analysis, all arguments of `video[]` type will go into the first branch, with simple `Video` type arguments moving to the else branch.

// 2

type Video = {
  title: string;
  creator: string;
  length: number;
};

function printVideoInfo(videoOrVideos: Video | Video[]) {
  if ("length" in videoOrVideos) {
    videoOrVideos.forEach((v) =>
      console.log(`"${v.title}" by ${v.creator}`)
    );
  } else {
    console.log(`"${videoOrVideos.title}" by ${videoOrVideos.creator}`);
  }
}

printVideoInfo({
  title: "Introduction to TypeScript",
  creator: "John Doe",
  length: 100,
});

// This will raise an error, as both argument types will end up in the first branch and the `video` type will not know how to resupond to `forEach`

// Practice Problems: Type Predicates

// 1

type Vehicle = { make: string; model: string; year: number };
type Motorcycle = Vehicle & { type: "motorcycle" };
type Car = Vehicle & { type: "car"; doors: number };

function isCar(vehicle: Vehicle | Car | Motorcycle): vehicle is Car {
  return 'doors' in vehicle; // implementation
}

// Usage
let myCar: Car = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
  type: "car",
  doors: 4,
};

if (isCar(myCar)) {
  console.log(myCar.doors);
}

// Practice Problems: Narrowing with Short Circuiting

// 1

type Vehicle =
  | {
      kind: "car";
      fuelType: "gas" | "electric";
      range: number;
    }
  | {
      type: "bicycle";
      isElectric: boolean;
    };

function getVehicleInfo(vehicle: Vehicle) {
  const info =
    (vehicle.kind === "car" &&
      `Car with ${vehicle.fuelType} engine and a range of ${vehicle.range} km`) ||
    (vehicle.type === "bicycle" &&
      `Bicycle with electric assist: ${vehicle.isElectric}`);
  console.log(info);
}

getVehicleInfo({ type: "bicycle", isElectric: true });

// Thus wukk rause a type error as both objects within the Vehicle type do not have a `kind` property.

// 