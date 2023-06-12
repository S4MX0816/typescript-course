abstract class Department {
  static fiscalYear = 2023;

  // id: number;
  // name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

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

  describe(this: Department): void {
    console.log("`IT Department - ID:  ${this.id}`");
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new AccountingDepartment("d2", []);
    }
    return this.instance;
  }

  private constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe() {
    console.log(`Accounting Department - ID:  ${this.id}`);
  }

  addEmployee(employee: string) {
    if (employee === "Harsh") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
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

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

// console.log(accounting.mostRecentReport);
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);

accounting.getReports();
console.log(accounting);

accounting.addEmployee("Harsh");
accounting.addEmployee("Kushager");
accounting.printEmployeeInformation();

// accounting.mostRecentReport = "";
accounting.mostRecentReport = "Year end report";
accounting.getReports();

const employee1 = Department.createEmployee("Raghav");
console.log(employee1, Department.fiscalYear);

accounting.describe();
it.describe();
