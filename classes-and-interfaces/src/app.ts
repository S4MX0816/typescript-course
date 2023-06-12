class Department {
  // id: number;
  // name: string;
  protected employees: string[] = [];

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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    // this.admins = admins
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(employee: string) {
    if (employee === "Harsh") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(report: string) {
    this.reports.push(report);
  }

  getReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["SAM", "NFS"]);
it.describe();

// const accountCopy = { name: "Dummy", describe: accounting.describe };
// accountCopy.describe();

it.addEmployee("Sanyam");
it.addEmployee("Naveen");

// accounting.employees[2] = "Kushager";

it.printEmployeeInformation();
console.log(it);

const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Something went wrong...");
accounting.getReports();
console.log(accounting);

accounting.addEmployee("Harsh");
accounting.addEmployee("Kushager");
accounting.printEmployeeInformation();
