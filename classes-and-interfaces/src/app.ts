class Department {
  // id: number;
  // name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}):  ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = "d2";
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");
accounting.describe();

// const accountCopy = { name: "Dummy", describe: accounting.describe };
// accountCopy.describe();

accounting.addEmployee("Sanyam");
accounting.addEmployee("Naveen");

// accounting.employees[2] = "Kushager";

accounting.printEmployeeInformation();
