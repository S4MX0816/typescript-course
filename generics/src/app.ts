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
