function findPattern(text, pattern) {
    const regex = new RegExp(pattern, "gi"); // 'g' for global, 'i' for case-insensitive
    const matches = text.match(regex);
    
    return matches ? `✅ Found Matches: ${matches.join(", ")}` : "❌ No Match Found!";
}

// Example usage
const text = "Regular expressions (regexp or regex) are powerful for pattern matching!";
const pattern = "regex|regexp"; // Search for 'regex' or 'regexp'

console.log(findPattern(text, pattern));

// Get user input from the terminal
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a text to search: ", (userText) => {
    rl.question("Enter a regex pattern: ", (userPattern) => {
        console.log(findPattern(userText, userPattern));
        rl.close();
    });
});
