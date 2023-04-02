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

const accounting = new Department('D1','Accounting');
accounting.addEmployee('John Doe');
accounting.addEmployee('Jane Doe');
// accounting.employees[2]='Anna';

accounting.describe();
accounting.printEmployeeInformation();
