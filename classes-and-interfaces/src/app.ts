interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  outputName?: string | undefined;
  age = 25;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log(phrase);
    }
  }
}

let user1: Greetable;

user1 = new Person("Sanyam");
user1.greet("Hi there - I am");
console.log(user1);
// user1.name = "Harsh";

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};
console.log(add(1, 3));

const user2 = new Person();
user2.greet("No name");
