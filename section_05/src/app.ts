 abstract class Department {
    static fiscalYear = 2023;
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
        // console.log(Department.fiscalYear);
    }  

    static createEmployee(name: string) {
        return {name: name}
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        //validation etc
        // this.id = 'd2';
        this.employees.push(employee);
    }

    printEmployeeInformation () {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}


class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe () {
        console.log(`IT Department ${this.id}: ${this.name}`);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.')
    }

    set mostRecentReport(value: string) {
        if (!value){
            throw new Error('Plese pass in a valid value!')
        }   
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    describe () {
        console.log(`Accounting Department ${this.id}: ${this.name}`);
    }
    
    addEmployee(name: string) {
        if (name === 'Bobby') {
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


const employee1 = Department.createEmployee('Alison');
console.log(employee1, Department.fiscalYear);

const ITDept = new ITDepartment('d1',['David']);
ITDept.addEmployee('John Doe');
ITDept.addEmployee('Jane Doe');
ITDept.describe();
ITDept.printEmployeeInformation();

const accountingDept = new AccountingDepartment('d2', []);
accountingDept.describe();

accountingDept.mostRecentReport = 'Year End Report';
accountingDept.addReport('Something went wrong!');
console.log(accountingDept.mostRecentReport);

accountingDept.addEmployee('Rachel');
accountingDept.addEmployee('Cinthia');
accountingDept.addEmployee('Jordan')
accountingDept.printReports();
accountingDept.printEmployeeInformation();
