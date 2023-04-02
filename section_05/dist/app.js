"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
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
Department.fiscalYear = 2023;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Plese pass in a valid value!');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployee(name) {
        if (name === 'Bobby') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
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
const employee1 = Department.createEmployee('Alison');
console.log(employee1, Department.fiscalYear);
const ITDept = new ITDepartment('d2', ['David']);
ITDept.addEmployee('Bobby');
ITDept.addEmployee('Rachel');
ITDept.describe();
ITDept.printEmployeeInformation();
const accountingDept = new AccountingDepartment('d3', []);
accountingDept.describe();
accountingDept.mostRecentReport = 'Year End Report';
accountingDept.addReport('Something went wrong!');
console.log(accountingDept.mostRecentReport);
accountingDept.addEmployee('Bobby');
accountingDept.addEmployee('Cinthia');
accountingDept.addEmployee('Jordan');
accountingDept.printReports();
accountingDept.printEmployeeInformation();
