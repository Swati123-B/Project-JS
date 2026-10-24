
// const data = require('fs').readFileSync(0, 'utf8');
// const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
// const n = tokens[0];
// const arr = tokens.slice(1, 1 + n);

// let max = arr[0];
// for(const x of arr) if (x> max) max= x;

// console.log(max);


let a = [3 ,7, 2, 9, 1];
let max = a[0];
a.forEach(num => {
    if (num > max) {
        max = num;
    }
});
console.log(max);