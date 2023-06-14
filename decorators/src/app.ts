function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  name = "Sanyam";

  constructor() {
    console.log("Creating person object...");
  }
}

const per = new Person();
console.log(per);
