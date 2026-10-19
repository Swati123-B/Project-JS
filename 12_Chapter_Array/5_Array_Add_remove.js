let arr= [1,2,3];

console.log(arr);

//add to End
arr.push(4);
console.log(arr);

//Remove from End
arr.pop();
console.log(arr);

arr.push(5,6);
console.log(arr);

arr.unshift(0);
console.log(arr);

// Remove from Begining
arr.shift();
console.log(arr);

// [1,2,3,4,5]
arr.splice(2,1);
console.log(arr);

arr.splice(2,0,99);
console.log(arr);

arr.splice(2,1,99);
console.log(arr);

// arr.splice(2,2,99);
// console.log(arr);

arr.splice(1,2,10,20);
console.log(arr);