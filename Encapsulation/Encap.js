class Car{
    #engine;
    constructor(name,engineName){
        this.name = name;
        this.#engine = engineName;
    }
}
setEngine(engineName){
    this.#engine = engineName;
}
getEngine(){
    return this.#engine;
}

let tesla = new Car("Tesla","V8");
console.log(tesla);
tesla.setEngine("V9");
console.log(tesla.getEngine);
