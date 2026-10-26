// Function as Expression

function greet(name){
    return `Hello, ${name}`;
}

//Anonymous Fn -> fn without name
const greet1 = function (name){
 return `Hello, ${name}`;

}
console.log(greet1("ABC"));
console.log(greet("ABC"));