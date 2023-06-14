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
