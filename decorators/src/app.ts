function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Sanyam";

  constructor() {
    console.log("Creating person object...");
  }
}

const per = new Person();
console.log(per);
