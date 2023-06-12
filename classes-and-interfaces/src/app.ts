class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");
accounting.describe();

// const accountCopy = { name: "Dummy", describe: accounting.describe };
// accountCopy.describe();

accounting.addEmployee("Sanyam");
accounting.addEmployee("Naveen");

// accounting.employees[2] = "Kushager";

accounting.printEmployeeInformation();
