// Lesson 5
var customArray = ["apple", 42, "banana"];
// function processCustomArray(arr: CustomArray) {
//   let result: string[] = [];
//   Object.keys(arr).forEach(v => {
//     if (typeof arr[v] === 'string') {
//       result.push(arr[v].toUpperCase());
//     }
//   })
//   return result;
// }
var result = processCustomArray(customArray);
console.log(result); // Output: ["APPLE", "BANANA"]
// Alt
function processCustomArray(arr) {
    if (Array.isArray(arr)) {
        return arr
            .filter(function (element) { return typeof element === "string"; })
            .map(function (element) { return element.toUpperCase(); });
    }
    return [];
}
