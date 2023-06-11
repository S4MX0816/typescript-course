"use strict";
/////////////// CONST and LET
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var userName = "Sanyam";
// userName = "Naveen";
var age = 30;
age = 22;
function add(a, b) {
    var result;
    result = a + b;
    return result;
}
// console.log(result);
if (age > 20) {
    // var isOld = true; // available outside
    var isOld = true;
}
// console.log(isOld); // throw error when using let
/////////////// ARROW FUNCTIONS
var addV2 = function (a, b) { return a + b; };
console.log(addV2(2, 5));
var printOutput = function (output) {
    return console.log(output);
};
console.log(printOutput(addV2(2, 5)));
var button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function (event) {
    console.log(event);
});
/////////////// DEFAULT FUNCTION PARAMETERS
var addV3 = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
};
console.log(addV3(5));
/////////////// SPREAD OPERATOR
var hobbies = ["Music", "Coding"];
var activeHobbies = __spreadArray(["Hiking"], hobbies, true);
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
var person = {
    name: "Sanyam",
    age: 25,
};
var copiedPerson = __assign({}, person);
/////////////// REST PARAMETERS
var addV4 = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) { return curResult + curValue; }, 0);
};
console.log(addV4(5, 10, 2, 3.7));
/////////////// DESTRUCTURING
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log(hobbies, hobby1, hobby2, remainingHobbies);
var nameV2 = person.name, ageV2 = person.age;
console.log(person, nameV2, ageV2);
