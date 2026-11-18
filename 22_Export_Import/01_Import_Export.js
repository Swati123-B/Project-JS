// let BASE_URL = "https://app.vwo.com";

// function formatUpperCaseString(sname) {
//     return sname.toUpperCase();
// }

// let fname ="John";
// let lname ="Doe"; 

import { BASE_URL, formateUpperCaseString } from "./testutils.js";

console.log("BASE_URL:", BASE_URL);
let result = formateUpperCaseString("hello world");
console.log("Formatted String:", result);