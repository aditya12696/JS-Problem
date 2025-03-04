// ✅ 1. Inline Arrow Function
const add = (a, b) => a + b;
console.log("Addition:", add(5, 3)); // Output: 8

// ✅ 2. Arrow Function as a Variable
const greet = name => `Hello, ${name}!`;
console.log(greet("Alice")); // Output: Hello, Alice!

// ✅ 3. Arrow Function in Array Methods
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log("Squares:", squares); // Output: [1, 4, 9, 16, 25]

// ✅ 4. Arrow Function as a Callback
const filteredNumbers = numbers.filter(num => num > 2);
console.log("Filtered Numbers:", filteredNumbers); // Output: [3, 4, 5]

// ✅ 5. Arrow Function inside an Object
const person = {
    name: "Bob",
    greet: () => console.log("Hello, " + person.name)
};
person.greet(); // Output: Hello, Bob

// ✅ 6. Arrow Function with Reduce (Total Sum)
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Total Sum:", sum); // Output: 15

// ✅ 7. Arrow Function with SetTimeout
setTimeout(() => console.log("Delayed Message after 2 seconds"), 2000);

// ✅ 8. Arrow Function with Default Parameters
const multiply = (a, b = 2) => a * b;
console.log("Multiplication with default param:", multiply(4)); // Output: 8

// ✅ 9. Arrow Function Returning Object (Using Parentheses)
const getPerson = (name, age) => ({ name, age });
console.log(getPerson("Charlie", 25)); // Output: { name: 'Charlie', age: 25 }
