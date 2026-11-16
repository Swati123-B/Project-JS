class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }   
    foo(){
        console.log(`This is a method from Animal class`);
    }   
}
class dog extends Animal{
        constructor(name){
            super(name);
        }   
        bark(){
            console.log(`${this.name} is barking`);
        }
        foo(){
            console.log(`This is a method from Dog class`);
        }
    }
    let dog = new Dog("Doggy");
    dog.eat();
    dog.sleep();
    dog.bark();
    dog.foo();