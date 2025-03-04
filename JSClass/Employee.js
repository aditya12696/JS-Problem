class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Method to display employee details
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`;
    }
}

// Creating objects (instances)
const emp1 = new Employee(101, "Alice", 50000);
const emp2 = new Employee(102, "Bob", 60000);

// Using the method
console.log(emp1.getDetails());
console.log(emp2.getDetails());