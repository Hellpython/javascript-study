let originalNumber = 10;
let copiedNumber = originalNumber;

copiedNumber = 20;

console.log("original primitive value:", originalNumber);
console.log("copied primitive value:", copiedNumber);

const originalObject = { x: 1 };
const copiedObject = originalObject;

copiedObject.x = 99;

console.log("object copied by reference:", originalObject.x);
