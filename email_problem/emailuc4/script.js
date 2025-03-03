function validateEmail(email) {
    // Regex to ensure:
    // - Starts with "abc"
    // - Optional second part (xyz) contains only letters, digits, _, +, -, .
    // - Mandatory "@bridgelabz."
    // - Mandatory "co" after "."
    // - Optional third part after ".co" (like ".in")
    const emailPattern = /^abc([_\+\-\.a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;

    if (!email.includes("@")) {
        return "❌ Invalid Email! '@' is missing.";
    }

    if (!email.includes("@bridgelabz.")) {
        return "❌ Invalid Email! '@bridgelabz.' is missing.";
    }

    if (!email.includes(".co")) {
        return "❌ Invalid Email! '.co' is missing.";
    }

    return emailPattern.test(email) ? "✅ Valid Email Address!" : "❌ Invalid Email Format!";
}

// Get email from the terminal and validate it
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an Email Address: ", (email) => {
    console.log(validateEmail(email));
    rl.close();
});
