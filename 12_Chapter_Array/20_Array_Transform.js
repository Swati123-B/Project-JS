//map & filters


//every vs some
// every -> all most pass

console.log([80,90,85].every(s=>s>=70));

console.log([80,60,85].every(s=>s>=70));

//some - Atleast one must pass
console.log([80,60,85].some(s => s < 70));

console.log([80,90,85].some(s => s < 70));