let a = true
console.log(a);

let b = false
console.log(b);

console.log(a && b);

console.log(aa || bb);

console.log(!aa);
console.log(!bb);
console.log(aa || bb);

// transitive comparison -> coerced
console.log("" == 0);
console.log("" == false);


let c = 10>5
console.log(c);

let d = 10<5
console.log(d);
 let e = 10>=5
console.log(e);

let f = 10<=5
console.log(f);

let g = 10==5
console.log(g);


let h = 10!=5
console.log(h);

let i = 10===5
console.log(i);

let j = 10!==5
console.log(j);

let k = 10>5 && 10<20
console.log(k);

console.log("200" == 200);
    console.log("200" === 200);