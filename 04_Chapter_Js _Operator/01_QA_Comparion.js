

console.log("0"==0); // true "0" is converted to 0 for comparison
console.log("0"===0); // false "0" is a string and 0 is a number, so they are not strictly equal
console.log("0"!=0); // false "0" is converted to 0 for comparison

console.log("" === 0); // true "" is converted to 0 for comparison
console.log("" === 0); // false "" is a string and 0 is a number, so they are not strictly equal
console.log(""==="0"); // false "" is a string and "0" is also a string, but they are not equal

console.log("" != 0); // false "" is converted to 0 for comparison

