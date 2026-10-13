//comparion operator it will return true or false
let a= 10;
let b= 20;  

console.log(a==b); // false
console.log(a!=b); // true
console.log(a<b); // true
console.log(a>b); // false
console.log(a<=b); // true
console.log(a>=b); // false

//== it will check only value not the data type
let c= 10;
let d= "10";
console.log(c==d); // true loose comparison operator

//=== it will check both value and data type
let e= 10;
let f= "10";
console.log(e===f); // false strict comparison operator    

//!= it will check only value not the data type
let g= 10;
let h= "10";
console.log(g!=h); // false

//!== it will check both value and data type
let i= 10;
let j= "10";
console.log(i!==j); // true