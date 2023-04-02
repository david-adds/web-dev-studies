class Department {
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }  

    describe (this: Department) {
        console.log(`Department ${this.id}: ${this.name}`);
    }

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

const accounting = new Department('d1','Accounting');
accounting.addEmployee('John Doe');
accounting.addEmployee('Jane Doe');
// accounting.employees[2]='Anna';
accounting.describe();
accounting.printEmployeeInformation();

const ITDept = new ITDepartment('d2',['David']);
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
accountingDept.addEmployee('Jordan')
accountingDept.printReports();
accountingDept.printEmployeeInformation();
