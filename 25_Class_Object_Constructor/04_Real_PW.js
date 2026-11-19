class Testcase{
    constructor(name, age, rollNo, phoneNo){
        this.name = name;
        this.age = age;
        this.rollNo = rollNo;
        this.phoneNo = phoneNo;
    }

    display(){
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Roll No:", this.rollNo);
        console.log("Phone No:", this.phoneNo);
    }
}
let student1 = new Testcase("John", 20, 101, "1234567890");
student1.display(); 