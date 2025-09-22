// index.js
const mylib = require("./lib/mylib");

console.log("Add 2 + 3 =", mylib.add(2, 3));
console.log("Subtract 5 - 2 =", mylib.subtract(5, 2));
console.log("Multiply 4 * 3 =", mylib.multiply(4, 3));
console.log("Divide 10 / 2 =", mylib.divide(10, 2));

// Uncomment below to test division by zero
// console.log(mylib.divide(10, 0));
