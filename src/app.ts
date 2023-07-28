// Code goes here!
abstract class Department {
  // private name: string;
  constructor(protected id: number, public name: string) {
  }
  protected employees: string[] = [];

  describe(this: Department): void {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  abstract addEmployee(employee: string):void
  
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
  
  static createEmployee(name: string) {
    return { name: name };
  }
}

// const accounting = new Department(23, 'Accounting');

// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');

// accounting.describe();
// accounting.printEmployeeInformation();

class AccountingDepartment extends Department {
  private lastReport: string;
  private reports: string[] = []

  constructor(id: number/* , private reports: string[] */) {
    super(id, 'Accounting');
    this.lastReport = this.reports[0];
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }
  get getemployees(){
    return this.employees
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

class ITDepartment extends Department {
  // admins: string[];
  constructor(id: number,public admins: string[]) {
    super(id, 'IT');
    // this.admins = admins;
  }
  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }
  get getemployees(){
    return this.employees
  }
}

const accountingDep = new AccountingDepartment(748);
const itDep = new ITDepartment(193,["khar","gav","shoghal"])

accountingDep.addEmployee("Saraacc")
accountingDep.addEmployee("Javadacc")
accountingDep.addEmployee("Sinaacc")

itDep.addEmployee("HojatIT")
itDep.addEmployee("HosseinIT")
itDep.addEmployee("AliIT")

console.log("accountingDep:::",accountingDep.getemployees);
console.log("itDep:::",itDep.getemployees);

// accountingDep.addReport('Something went wrong...');
// console.log(accountingDep.mostRecentReport);

// accountingDep.addReport('Something went wrong1...');
// console.log(accountingDep.mostRecentReport);

// accountingDep.mostRecentReport = "Gameover!!"
// console.log(accountingDep.mostRecentReport);

// accountingDep.printReports();
// console.log(Department.createEmployee("HojatFthi"));
