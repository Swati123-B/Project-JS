let arr = [1,2,3];
console.log(arr);

// Add to END
//(method) Array<number>.push(...items: number[]): number
//Appends new elements to the end of an array, and returns the new length of the array.
//@param items — New elements to add to the array.
arr.push(4);
console.log(arr);

// Remove from END
//(method) Array<number>.pop(): number | undefined
//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
arr.pop();
console.log(arr);


arr.push(5, 6);
console.log(arr);

// Add to BEGINNING
//(method) Array<number>.unshift(...items: number[]): number
//Inserts new elements at the start of an array, and returns the new length of the array.
//@param items — Elements to insert at the start of the array.
arr.unshift(0);
console.log(arr);

// Remove from BEGINNING
arr.shift();
console.log(arr);

// [ 1, 2, 3, 5, 6 ]
arr.splice(2,1);
console.log(arr);

arr.splice(2, 0, 99);
// arr.splice(2, 1, 99);
// arr.splice(2, 2, 99);
console.log(arr);

// [ 1, 2, 99, 5, 6 ]
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
arr.splice(1, 2, 10, 20);
console.log(arr);