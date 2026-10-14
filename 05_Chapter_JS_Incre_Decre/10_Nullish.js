let amul= null;
let val = amul ?? "default value"; // nullish coalescing operator
console.log(val);


let  apiResponse = null;
let apiData = apiResponse ?? "{}"; // nullish coalescing operator
console.log(apiData);

let  apiResponse1 = "undefined";
let apiData1 = apiResponse1 ?? "{}";
console.log(apiData1);


let  apiResponse2 = undefined;
let apiData2 = apiResponse2 ?? "{}";
console.log(apiData2);  