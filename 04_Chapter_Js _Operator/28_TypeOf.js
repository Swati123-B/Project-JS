console.log(typeof 10); // number
console.log(typeof "hello"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof 3.14);
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function(){}); // function
console.log(typeof NaN); // number
console.log(typeof Symbol("id")); // symbol
console.log(typeof BigInt(1234567890123456789012345678901234567890n)); // bigint
console.log(typeof new Date()); // object
console.log(typeof /regex/); // object

console.log(typeof Infinity); // number
console.log(typeof -Infinity); // number
console.log(typeof 0); // number
console.log(typeof -0); // number
console.log(typeof 1n); // bigint
console.log(typeof 0n); // bigint
console.log(typeof 1.0); // number
console.log(typeof 1.5); // number
console.log(typeof 1e10); // number