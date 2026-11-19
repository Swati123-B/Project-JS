class Car{
    // constructor is a special method that is called when an object is created
// It is used to initialize the object's properties
//default vs parameterized constructor
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

let myCar = new Car("Toyota", "Camry", 2020);
console.log(myCar.make);

let myCar2 = new Car("Honda", "Civic", 2021);
console.log(myCar2.model);


class Car1{
    // Constructor
    // Default vs Param

    constructor(assigned_name){
        this.name = assigned_name;
    }
}

let hyndai_i10 = new Car1("i10");
console.log(hyndai_i10.name);

let mg_hector = new Car1("MG Hector");
console.log(mg_hector.name);

const i11 = new Car1("i11");     // constructor runs → "i10"
const Nexon = new Car1("Nexon");