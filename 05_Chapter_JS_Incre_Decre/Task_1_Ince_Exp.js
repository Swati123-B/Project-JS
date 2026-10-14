let a =100;
console.log(a++ + ++a + a++ + ++a);
console.log(a);

// A = 100, a = 100
// A = 100 + 102 + 102 + 104 = 408
// A = 408, a = 104
// post increment means first use the current value of a in the expression and then increment it