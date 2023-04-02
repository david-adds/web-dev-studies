class Department {
    name: string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }  

    describe (this: Department) {
        console.log(`Department: ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation () {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('Accounting');
accounting.addEmployee('John Doe');
accounting.addEmployee('Jane Doe');
// accounting.employees[2]='Anna';

accounting.describe();
accounting.printEmployeeInformation();
