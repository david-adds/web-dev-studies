"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department ${this.id}: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === 'Bobby') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = new Department('d1', 'Accounting');
accounting.addEmployee('John Doe');
accounting.addEmployee('Jane Doe');
accounting.describe();
accounting.printEmployeeInformation();
const ITDept = new ITDepartment('d2', ['David']);
ITDept.addEmployee('Bobby');
ITDept.addEmployee('Rachel');
ITDept.describe();
ITDept.printEmployeeInformation();
const accountingDept = new AccountingDepartment('d3', []);
accountingDept.describe();
accountingDept.addReport('Something went wrong!');
accountingDept.addEmployee('Bobby');
accountingDept.addEmployee('Cinthia');
accountingDept.addEmployee('Jordan');
accountingDept.printReports();
accountingDept.printEmployeeInformation();
