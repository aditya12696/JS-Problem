// Constants
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS = 20;

// Function to get work hours
const getWorkHours = (attendance) => {
    switch (attendance) {
        case 1: return FULL_TIME_HOURS; // Full-time
        case 2: return PART_TIME_HOURS; // Part-time
        default: return 0; // Absent
    }
};

// Simulate Employee Wage for 20 Days
let dailyWages = [];
let dailyHours = [];
for (let day = 1; day <= WORKING_DAYS; day++) {
    let attendance = Math.floor(Math.random() * 3); // 0: Absent, 1: Full-time, 2: Part-time
    let hours = getWorkHours(attendance);
    let wage = hours * WAGE_PER_HOUR;
    dailyWages.push(wage);
    dailyHours.push(hours);
}

// a. Calculate Total Wage using Reduce
const totalWage = dailyWages.reduce((sum, wage) => sum + wage, 0);
console.log("Total Employee Wage:", totalWage);

// b. Show Day along with Daily Wage using Map
let dailyWageMap = dailyWages.map((wage, index) => `Day ${index + 1}: ₹${wage}`);
console.log("\nDaily Wage Map:");
console.log(dailyWageMap);

// c. Show Days when Full Time Wage (₹160) was earned using Filter
let fullTimeDays = dailyWages
    .map((wage, index) => (wage === 160 ? `Day ${index + 1}` : null))
    .filter(day => day !== null);
console.log("\nDays with Full Time Wage:", fullTimeDays);

// d. Find First Occurrence when Full Time Wage was Earned using Find
let firstFullTimeDay = dailyWages.findIndex(wage => wage === 160) + 1;
console.log("\nFirst Day Full Time Wage Earned:", firstFullTimeDay > 0 ? `Day ${firstFullTimeDay}` : "Never");

// e. Check if Every Element of Full Time Wage is ₹160 using Every
let allFullTime = dailyWages.every(wage => wage === 160);
console.log("\nEvery day full time wage?", allFullTime);

// f. Check if Any Part Time Wage Exists using Some
let hasPartTimeWage = dailyWages.some(wage => wage === 80);
console.log("\nHas Any Part-Time Wage?", hasPartTimeWage);

// g. Find the Number of Days Employee Worked using Reduce
const totalDaysWorked = dailyHours.reduce((count, hours) => (hours > 0 ? count + 1 : count), 0);
console.log("\nTotal Days Worked:", totalDaysWorked);
