"use strict";
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 25;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log(phrase);
        }
    };
    return Person;
}());
var user1;
user1 = new Person("Sanyam");
user1.greet("Hi there - I am");
console.log(user1);
var add;
add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(1, 3));
var user2 = new Person();
user2.greet("No name");
