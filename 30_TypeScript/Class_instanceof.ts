class Bird {
  fly() {
    console.log("Flying...");
   }
}

class Fish {
  swim() {
    console.log("Swimming...");
   }
}

function move(animal: Bird | Fish) {
  if (animal instanceof Bird) {
    // TypeScript knows animal is Bird here
    animal.fly();
  } else {
    // TypeScript knows animal is Fish here
    animal.swim();
  }
}