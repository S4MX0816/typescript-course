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

function merge<T extends object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Sanyam" }, { age: 25 });
console.log(mergeObj.age);
