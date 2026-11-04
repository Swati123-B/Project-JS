console.log(greeting);
var greeting = "Hello";
console.log(greeting);


// Behind the scenes:
// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"
// Note: The above code will not throw an error because var is hoisted and initialized with undefined.

