"use strict";
/////////////// CONST and LET
const userName = "Sanyam";
// userName = "Naveen";
let age = 30;
age = 22;
function add(a, b) {
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
const addV2 = (a, b) => a + b;
console.log(addV2(2, 5));
const printOutput = (output) => console.log(output);
console.log(printOutput(addV2(2, 5)));
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", (event) => {
    console.log(event);
});
