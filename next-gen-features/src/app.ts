/////////////// CONST and LET

const userName = "Sanyam";
// userName = "Naveen";

let age = 30;
age = 22;

function add(a: number, b: number) {
  let result;
  result = a + b;
  return result;
}
// console.log(result);

if (age > 20) {
  // var isOld = true; // available outside
  let isOld = true;
}

// console.log(isOld); // throw error when using let

/////////////// ARROW FUNCTIONS

const addV2 = (a: number, b: number) => a + b;
console.log(addV2(2, 5));

const printOutput: (a: string | number) => void = (output) =>
  console.log(output);
console.log(printOutput(addV2(2, 5)));

const button = document.querySelector("button");
button?.addEventListener("click", (event) => {
  console.log(event);
});

/////////////// DEFAULT FUNCTION PARAMETERS

const addV3 = (a: number, b = 1) => a + b;
console.log(addV3(5));
