"use strict";
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // id: number;
        // name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department (".concat(this.id, "):  ").concat(this.name));
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
var accounting = new Department("d1", "Accounting");
accounting.describe();
// const accountCopy = { name: "Dummy", describe: accounting.describe };
// accountCopy.describe();
accounting.addEmployee("Sanyam");
accounting.addEmployee("Naveen");
// accounting.employees[2] = "Kushager";
accounting.printEmployeeInformation();
