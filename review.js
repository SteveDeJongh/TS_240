// TS 249 - Review
var val = 'steve'; // works
val = true; // works
val = 12; // also works.
if (typeof val === 'string') {
    console.log(val.toUpperCase());
}
else if (typeof val === 'number') {
    console.log("Val is the number ".concat(val));
}
