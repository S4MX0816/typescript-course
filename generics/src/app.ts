//////////// BUILT IN GENERIC TYPES

const names: Array<string> = ["Sanyam", "Naveen"]; // string[]
// names[0].split(" ");

const promise: Promise<number> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});
promise.then((data) => {
  //  data.split(" ")
});

//////////// CUSTOM GENERIC TYPES

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Sanyam" }, { age: 25 });
console.log(mergeObj.age);

interface Lengthy {
  length: number;
}
function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length > 0) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}
console.log(countAndPrint("Hello There!"));
console.log(countAndPrint(["Sports", "Cooking"]));

//////////// KEYOF CONSTRAINT

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({ name: "Sanyam" }, "name"));

//////////// GENERIC CLASSES

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Sanyam");
textStorage.addItem("Harsh");
textStorage.removeItem("Harsh");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
console.log(numberStorage.getItems());

// const objectStorage = new DataStorage<object>();
// const harshObj = { name: "Harsh" };
// objectStorage.addItem(harshObj);
// objectStorage.addItem({ name: "Sanyam" });
// objectStorage.removeItem(harshObj);
// console.log(objectStorage.getItems());

//////////// GENERIC UTILITY TYPES

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const namesV2: Readonly<string[]> = ["Sanyam", "Naveen"];
// namesV2.push("Harsh");
// namesV2.pop()
