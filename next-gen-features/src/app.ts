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

/////////////// SPREAD OPERATOR

const hobbies = ["Music", "Coding"];
const activeHobbies = ["Hiking", ...hobbies];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  name: "Sanyam",
  age: 25,
};

const copiedPerson = { ...person };

/////////////// REST PARAMETERS

const addV4 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => curResult + curValue, 0);
};
console.log(addV4(5, 10, 2, 3.7));

/////////////// DESTRUCTURING

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2, remainingHobbies);

const { name: nameV2, age: ageV2 } = person;
console.log(person, nameV2, ageV2);
