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
/////////////// DEFAULT FUNCTION PARAMETERS
const addV3 = (a, b = 1) => a + b;
console.log(addV3(5));
/////////////// SPREAD OPERATOR
const hobbies = ["Music", "Coding"];
const activeHobbies = ["Hiking", ...hobbies];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    name: "Sanyam",
    age: 25,
};
const copiedPerson = Object.assign({}, person);
/////////////// REST PARAMETERS
const addV4 = (...numbers) => {
    return numbers.reduce((curResult, curValue) => curResult + curValue, 0);
};
console.log(addV4(5, 10, 2, 3.7));
