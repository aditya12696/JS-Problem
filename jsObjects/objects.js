// Employee Object
let employee = {
    id: 101,
    name: "Alice",
    salary: 50000,

    // Function to display details
    getDetails: function () {
        return `ID: ${this.id}, Name: ${this.name}, Salary: ₹${this.salary}`;
    },

    // Arrow Function Example
    increaseSalary: (amount) => {
        employee.salary += amount;
        return `New Salary: ₹${employee.salary}`;
    }
};

// Accessing Fields
console.log("Employee ID:", employee.id);
console.log("Employee Name:", employee.name);
console.log("Employee Salary:", employee.salary);

// Calling Functions
console.log(employee.getDetails()); // Using Method
console.log(employee.increaseSalary(5000)); // Increase Salary
console.log(employee.getDetails()); // Updated Details
