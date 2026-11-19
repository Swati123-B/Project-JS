//static constructor example
class Person {
    constructor() { 
        console.log("Person created");
    }
}
let person1 = new Person(); // Output: Person created
console.log(person1 instanceof Person); // Output: true