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
