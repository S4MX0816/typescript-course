"use strict";
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department("Accounting");
accounting.describe();
// const accountCopy = { name: "Dummy", describe: accounting.describe };
// accountCopy.describe();
accounting.addEmployee("Sanyam");
accounting.addEmployee("Naveen");
// accounting.employees[2] = "Kushager";
accounting.printEmployeeInformation();
