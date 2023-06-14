"use strict";
//////////// BUILT IN GENERIC TYPES
const names = ["Sanyam", "Naveen"]; // string[]
// names[0].split(" ");
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});
promise.then((data) => {
    //  data.split(" ")
});
//////////// CUSTOM GENERIC TYPES
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "Sanyam" }, { age: 25 });
console.log(mergeObj.age);
function countAndPrint(element) {
    let descriptionText = "Got no value.";
    if (element.length > 0) {
        descriptionText = `Got ${element.length} elements.`;
    }
    return [element, descriptionText];
}
console.log(countAndPrint("Hello There!"));
console.log(countAndPrint(["Sports", "Cooking"]));
//////////// KEYOF CONSTRAINT
function extractAndConvert(obj, key) {
    return `Value: ${obj[key]}`;
}
console.log(extractAndConvert({ name: "Sanyam" }, "name"));
//////////// GENERIC CLASSES
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Sanyam");
textStorage.addItem("Harsh");
textStorage.removeItem("Harsh");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(10);
console.log(numberStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const namesV2 = ["Sanyam", "Naveen"];
// namesV2.push("Harsh");
// namesV2.pop()
