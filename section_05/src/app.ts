class Department {
    // private readonly id: string;
    // private name: string;
    private employees: string[] = [];

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
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }
    addReport(text: string) {
        this.reports.push(text);
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
accountingDept.addReport('Something went wrong!');
accountingDept.printReports();
