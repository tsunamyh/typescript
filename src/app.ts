// Code goes here!

class Department {
  // private name: string;
  
  constructor(private id : number, public name: string ) {
    
  }
  protected employees: string[] = [];

  describe(this: Department): void {
    console.log(`Department (${this.id}): ${this.name}`);  }

  addEmployee(employee: string) {
      this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
}
}

const accounting = new Department(23,'Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.describe();
accounting.printEmployeeInformation();

class AccountingDepartment extends Department {
  private lastReport: string  ;
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

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accountings = new AccountingDepartment(748);

accountings.addReport('Something went wrong...');
console.log(accountings.mostRecentReport);

accountings.addReport('Something went wrong1...');
console.log(accountings.mostRecentReport);

accountings.mostRecentReport = "Gameover!!"
console.log(accountings.mostRecentReport);

accountings.printReports();