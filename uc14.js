function validateEmployee(employeeId, salary, gender, date) {
    try {
        // Regex patterns
        const idPattern = /^[1-9]\d*$/;  // Employee ID: Non-zero positive number
        const salaryPattern = /^[1-9]\d*$/;  // Salary: Non-zero positive number
        const genderPattern = /^[MF]$/i;  // Gender: M or F (case insensitive)
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;  // Date format: YYYY-MM-DD

        // Validate Employee ID
        if (!idPattern.test(employeeId)) throw new Error("❌ Invalid Employee ID! Must be a non-zero positive number.");

        // Validate Salary
        if (!salaryPattern.test(salary)) throw new Error("❌ Invalid Salary! Must be a non-zero positive number.");

        // Validate Gender
        if (!genderPattern.test(gender)) throw new Error("❌ Invalid Gender! Must be 'M' or 'F'.");

        // Validate Date format
        if (!datePattern.test(date)) throw new Error("❌ Invalid Date Format! Use YYYY-MM-DD.");

        // Validate Date is not a future date
        const today = new Date().toISOString().split("T")[0]; // Get current date (YYYY-MM-DD)
        if (date > today) throw new Error("❌ Invalid Date! Future dates are not allowed.");

        return "✅ All details are valid!";
    } catch (error) {
        return error.message;
    }
}

// Get input from terminal
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Employee ID: ", (empId) => {
    rl.question("Enter Salary: ", (salary) => {
        rl.question("Enter Gender (M/F): ", (gender) => {
            rl.question("Enter Joining Date (YYYY-MM-DD): ", (date) => {
                console.log(validateEmployee(empId, salary, gender, date));
                rl.close();
            });
        });
    });
});
