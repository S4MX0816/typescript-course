interface Greetable {
  readonly name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 25;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Sanyam");
user1.greet("Hi there - I am");
console.log(user1);
// user1.name = "Harsh";
